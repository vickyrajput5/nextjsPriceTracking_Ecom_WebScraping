import mongoose from "mongoose";
let isConnected = false;


export const connectDB = async () =>{
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL Not defined')

    if(isConnected) return console.log('=> using existing database connections')
        try {
            await mongoose.connect(process.env.MONGODB_URL)

            isConnected = true

            console.log('MONGODB Connected')
        } catch (error) {
            console.log(error)
        }

}