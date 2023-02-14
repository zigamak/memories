import mongoose from "mongoose";
//PostSchema
const PostSchema= mongoose.Schema({
    title: String,
    message: String,
    creator: String,
    tags :[String],
    selectedFile:String,
    likecount: {
        type:Number,
        default:0
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
});
const PostMessage = mongoose.model('PostMessage', PostSchema);

export default PostMessage;