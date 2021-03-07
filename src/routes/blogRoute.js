const { Router } = require('express');
const blogRouter = Router();
const {Blog} = require("../models/Blog");

blogRouter.post('/', async(req,res)=>{
    try{

    }catch(err){
        console.log(err);
        res.status(500).send({err: err.message});
    }
});


blogRouter.get('/', async(req,res)=>{
    try{

    }catch(err){
        console.log(err);
        res.status(500).send({err: err.message});
    }
});

blogRouter.get('/:blogId', async(req,res)=>{
    try{

    }catch(err){
        console.log(err);
        res.status(500).send({err: err.message});
    }
});

blogRouter.put('/:blogId', async(req,res)=>{
    try{

    }catch(err){
        console.log(err);
        res.status(500).send({err: err.message});
    }
});

blogRouter.patch('/:blogId/live', async(req,res)=>{
    try{

    }catch(err){
        console.log(err);
        res.status(500).send({err: err.message});
    }
});

module.exports = {blogRouter};

