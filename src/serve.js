const express = require('express')
const app = express()
const {userRouter}= require('./routes/userRoute');
const mongoose = require('mongoose');

const MONGO_URL ='mongodb+srv://admin:kh4CM8pSvYXjI6Dp@mongodb.pfyo1.mongodb.net/BlogService?retryWrites=true&w=majority';

const server = async() =>{
    try{
        await mongoose.connect(MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true,createIndexes:true,useFindAndModify:false});
        mongoose.set('debug',true);
        console.log('MongoDB connected');
        app.use(express.json());

        app.use('/user',userRouter);
 
        


        app.listen(3000,()=>console.log('3000번 연결 '));

    }catch(err){
        console.log(err);
    }
}

server();