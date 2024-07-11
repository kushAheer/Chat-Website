import User from "../Models/UserModel.js";


export const getUsers = async (req, res) => {
    try {
        const logedInUserId = req.user._id;


        const allUser = await User.find({ _id: { $ne: logedInUserId } }).select("-Password -token"); //get all user that are not equal to login in user

        return res.status(200).json({status : 200 , userList : allUser});
        
        
    } catch (error) {
        return res.status(500).json({ message: error.message , success: false});
    }
};