import mongoose from "mongoose";


 export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://hindjoumar4:hindjoumar4@cluster0.axjwi.mongodb.net/blog-app')
    console.log("DB Connected");
} 