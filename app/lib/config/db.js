import mongoose from "mongoose";


 export const ConnectDB = async () =>{
    await mongoose.connect('mongodb+srv://hindjoumar4:hindhind@cluster0.axjwi.mongodb.net/blog-app')
    console.log("DB Connected");
} 