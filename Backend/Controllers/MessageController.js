import Conversation from "../Models/ConversationModel.js";
import Message from "../Models/MessagesModel.js";
import { getReciverSocketId, io } from "../SocketIo/Socket.js";



export const sendMessage = async (req, res) => {
    try {
        const receiverId = req.params.id;        
        const { message } = req.body;
        const senderId = req.user._id;

        let conservationBetween = await Conversation.findOne({
            members : {
                $all : [senderId,receiverId]
            }
        })

        if(!conservationBetween){
            conservationBetween = await Conversation.create({
                members : [senderId,receiverId]
            });
        }

        const newMessage = await Message.create({
            senderId,
            receiverId,
            message
        });

        if(!newMessage){
            return res.status(400).json({message: "Message not sent", success: false});
        }

        conservationBetween.messages.push(newMessage._id);
        
        //await newMessage.save(); below statement is more efficient than this doning seperately
        //saving the conversation and the message same time
        
        await Promise.all([conservationBetween.save(),newMessage.save()]);

        const reciverSocketId = getReciverSocketId(receiverId);
        
        if(reciverSocketId){

            //sending message to the receiver or sending message to a specific user

            io.to(reciverSocketId).emit("newMessage",newMessage)
        }





        return res.status(200).json({status : 200 ,message: "Message sent", success: true , data : newMessage});

    }catch(error){
        return res.status(500).json({message: error.message, success: false});
    }
};


export const getMessages = async (req, res) => {

    try {
        const userToChatWithId = req.params.id; //receiverId
        const senderId = req.user._id;
    
        const conservationBetween = await Conversation.findOne({
            members : {
                $all : [senderId,userToChatWithId]
            }
        }).populate("messages");

        if(!conservationBetween){
            return res.status(200).json({  status : 200, message : "No messages yet", success : true , data : []});
        }
        return res.status(200).json({status : 200 ,message: "Messages fetched", success: true , data : conservationBetween});
        
    } catch (error) {
        return res.status(500).json({message: error.message, success: false});
    }
};