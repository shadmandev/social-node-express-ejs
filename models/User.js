import mongoose from "mongoose";

//create schama
const userSchema = mongoose.Schema(
    {
        name: {
            type: String,
            require: true,
            trim: true,
        },
        email: {
            type: String,
            require: true,
            unique: true,
            trim: true,
        },
        password: {
            type: String,
            require: true,
            trim: true,
        },
        username: {
            type: String,
            trim: true,
        },
        phone: {
            type: String,
            trim: true,
        },
        age: {
            type: Number,
        },
        skill: {
            type: String,
            trim: true,
        },
        gender: {
            type: String,
            enum: ["Male", "Female"],
        },
        location: {
            type: String,
            trim: true,
        },
        photo: {
            type: String,
            trim: true,
        },
        gallery: {
            type: Array,
            trim: true,
        },
        accessToken: {
            type: String,
            trim: true,
        },
        isAdmin: {
            type: Boolean,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
);

//create collection
export default mongoose.model("User", userSchema);
