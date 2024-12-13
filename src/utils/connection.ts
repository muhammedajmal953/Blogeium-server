import mongoose from "mongoose";

export async function connectDB(){
   try {
    const Mongourl = process.env.Mongo_URI
    
    if (!Mongourl) {
        console.log('not mongo db uri');
       
    }
    await mongoose.connect(Mongourl!)
    console.log('monogdb connected'); 
   } catch (error) {
    console.log('error in mongodb connected');
   } 
}