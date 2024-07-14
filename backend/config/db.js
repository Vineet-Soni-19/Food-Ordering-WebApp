import mongoose from "mongoose";

export const connectDB=async()=>{
    await mongoose.connect('mongodb+srv://vineetsoni:12345@cluster0.70lhegf.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}