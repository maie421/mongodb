const {Router} = require('express');
const userRouter = Router();
const mongoose = require("mongoose");
const { User } = require('../models/User')

userRouter.get('/',async (req,res)=>{
    try{
        const users = await User.find({});
        return res.send({users});
    }catch(err){
        console.log(err);
        return res.status(500).send({err : err.message})
    }
});

userRouter.get("/:userId", async (req, res) => {
    try {
      const { userId } = req.params;
      if (!mongoose.isValidObjectId(userId))
        return res.status(400).send({ err: "invalid userId" });
      const user = await User.findOne({ _id: userId });
      return res.send({ user });
    } catch (err) {
      console.log(err);
      return res.status(500).send({ err: err.message });
    }
  });

userRouter.delete("/:userId",async(req,res)=>{
    try{
        const { userId } = req.params;
        if(!mongoose.isValidObjectId(userId)) return res.status(400).send({err:"invalid userid"})
        const user = await User.findByIdAndDelete({_id:userId});
        return res.send({user});
    }catch(err){
        console.log(err);
        return res.status(500).send('server listening on port 3000'); 
    }
})

userRouter.put("/:userId",async(req,res)=>{
    try{
        const { userId } = req.params;
        if(!mongoose.isValidObjectId(userId)) return res.status(400).send({err:"invalid userid"});
        const { age, name }=req.body;
        if(!age && !name) return res.status(400).send({err:"age is required"});
        if(age && typeof age !== 'number') return res.status(400).send({err:"age must be a number"});
        if(name && typeof name.first !== 'string' && typeof name.last !== 'string') return res.status(400).send({err : "first and last"});
        /* let updateBody ={};
        if(age) updateBody.age = age;
        if(name) updateBody.name = name; 

        const user = await User.findByIdAndUpdate(userId ,  updateBody ,{new:true});*/
        let user = await User.findById(userId);
        console.log({ userAfterEdit : user });
        if (age) user.age = age;
        if (name) uaer.name = name;
        await user.save();
        return res.send({user});
    }catch(err){
        console.log(err);
        return res.status(500).send('server listening on port 3000'); 
    }
})

userRouter.post('/',async (req,res)=>{
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
})

module.exports = {
    userRouter
}