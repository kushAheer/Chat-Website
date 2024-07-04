import mongoose from "mongoose";
// import bycryptjs from "bcryptjs";
import bcrypt from "bcrypt";
const userSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: true
    },

    Email: {
        type: String,
        required: true
    },
    Password: {
        type: String,
        required: true
    },
    Gender: {
        type: String,
        required: true,
        enum: ["male", "female"]
    },

    profilePicture: {
        type: String,
        

    },
    token: {
        type: String,

    },
},
    { timestamps: true }
);



userSchema.methods.generateToken = function () {
    return jwt.sign(
        { 
            id: this._id 
        }, 
        process.env.JWT_SECRET, 
        { expiresIn: process.env.JWT_EXPIRES_IN }
    )
}
userSchema.pre("save",async function(next){
    if(this.isModified("password")){
        // const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, 10);
    }
    next();
});
    
    
const User = mongoose.model('User', userSchema);

export default User;