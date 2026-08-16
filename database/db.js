import mongoose from 'mongoose'
import "dotenv/config";
const connectDB =async()=>{
    try{
        await  mongoose.connect(`${process.env.MONGO_URI}`)
        console.log('mongoose connect successfully ');

    }catch(error){
console.log('mongoose connection failed',error);
    };
    

    }



export default connectDB