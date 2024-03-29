const {
    Schema,
    model,
    Types: { ObjectId },
} = require("mongoose");

const CommnetSchema = new Schema(
    {
        content: {type: String, required: true},
        user: {type: ObjectId, required: true, ref:"user"},
        blog:{type: ObjectId,required:true,ref:"blog"},
    },
    {timestamps:true}
);

const Comment = model("comment", CommnetSchema);
module.exports = { Comment };