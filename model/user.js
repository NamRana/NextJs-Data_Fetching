import { Schema, models, model } from "mongoose";

const userSchema = new Schema({
    name: String,
    avatar: String,
    email: String,
    salary: Number,
    date: String,
    status: String,
},
{
    timestamps: true,
});

const Users = models.user || model('user', userSchema)

export default Users;