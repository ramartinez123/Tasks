import { Schema,model } from "mongoose";

const taskSchema = new Schema({
    title: {
        type:String,
        required:true,
        unique: true
    },
    description: String,
    done: Boolean,

}, {
    timestamps:true,
    versionKey: false
});

export default model('Task',taskSchema)