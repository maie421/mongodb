const { Schema, model, Types} = require('mongoose')

const BlogSchema = new Schema(
    {
    title : {type : String , required : true},
    contnet : {type: String , required : true},
    islive : {type: Boolean, required : true, default :false},
    user: { type: Types.ObjectId, require : true, ref:"user"},
    },
    {timestamps : true}
);

const  Blog = model("blog", BlogSchema);

module.exports = { Blog };