import mongoose from "mongoose";

const conversationSchema = new mongoose.Schema({
    members: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    messages: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Messages",
            default: []
        }
    ]
},{timestamps: true});

const Conversation = mongoose.model("Conversation", conversationSchema);

export default Conversation;