import PostMessage from '../models/postMessage.js';
//exported getPosts functions
export const getPosts = async(req, res) =>{
    try{
        const postMessages = await PostMessage.find();
        console.log(postMessages);
        res.status(200).json(postMessages);
    } catch(error) {
        res.status(404).json({message:error.message});
    }
}

export const createPost = async (req, res) =>{
    const post = req.body;
    const newPost = newPostMessage(post);

        try{
            await mewPost.save();
            
            res.status(201).json(newPost);
        }catch(error){
            res.status(409).json({message: error.message})
        }
}