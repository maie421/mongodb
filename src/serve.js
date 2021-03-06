const express = require('express')
const app = express()
const mongoose = require('mongoose')
const { User } = require('./models/User')

const MONGO_URL ='mongodb+srv://admin:kh4CM8pSvYXjI6Dp@mongodb.pfyo1.mongodb.net/BlogService?retryWrites=true&w=majority';

const server = async() =>{
    try{
        await mongoose.connect(MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true,createIndexes:true});
        console.log('MongoDB connected');
        //mongoose.connect(MONGO_URL).then(result => console.log({ result }))

        app.use(express.json());

        app.get('/user',async (req,res)=>{
            try{
                const users = await User.find({});
                return res.send({users});
            }catch(err){
                console.log(err);
                return res.status(500).send({err : err.message})
            }
        });
        
        app.get("/user/:userId",async(req,res)=>{
            try{
                const { userId } = req.params;
                if(!mongoose.isValidObjectId(userId)) return res.status(400).send({err:"invalid userid"})
                const user = await User.findOne({_id:userId});
                return res.send({user});
            }catch(err){
                console.log(err);
                 return res.status(500).send('server listening on port 3000'); 
            }
        })

        app.delete("/user/userId",async(req,res)=>{
            try{
                const { userId } = req.params;
                if(!mongoose.isValidObjectId(userId)) return res.status(400).send({err:"invalid userid"})
                const user = await User.findOne({_id:userId});
                return res.send({user});
            }catch(err){
                console.log(err);
                return res.status(500).send('server listening on port 3000'); 
            }
        })
        
        app.post('/user',async (req,res)=>{
            try{
                let {username, name} = req.body;
                if(!username) return res.status(400).send({err: "username is required"});
                if(!name || !name.firest || !name.last) return res.status(400).send({ err: "both first and last names are required"});
                const user= new User(req.body);
                await user.save();
                return res.send({seccuss:true});
            }catch(err){
                console.log(err);
                return res.status(500).send('server listening on port 3000'); 
            
            }
        });


        app.listen(3000,()=>console.log('3000번 연결 '));

    }catch(err){
        console.log(err);
    }
}

server();