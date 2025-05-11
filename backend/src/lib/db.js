import mongoose from 'mongoose';

export const connectDB = async () => {
    console.log(process.env.MONGODB_URI);
    
    try{
        const conn = await mongoose.connect(process.env.MONGODB_URI);
        console.log("MongoDB Connected");
        
    } catch(err){
        console.log("MongoDB Connected Error", err);
        
    }
}