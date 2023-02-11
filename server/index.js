import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import postRoutes from './routes/posts.js';

const app = express();

app.use 
//Added body parser
app.use(bodyParser.json({limit:"30mb ", extended:true}));
app.use(bodyParser.urlencoded({limit:"30mb ", extended:true}));
app.use(cors());
//Connection url for mongodb
const CONNECTION_URL ='mongodb+srv://ziga:!CaSZvKS!qXy759@cluster0.fbfxnoh.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;
mongoose.connect(CONNECTION_URL,{useNewUrlParser:true, useUnifiedTopology:true})
    .then(()=>app.listen(PORT, ()=> console.log('Server running on port : ${PORT}')))
    .catch((error)=>console.error(error.message));
// 
mongoose.set('useFindAndModify',false); 