import mongoose from "mongoose";
const MONGODB_URL = process.env.MONGODB_URI
let isConnected = false;

async function dbConnect(){

    if(isConnected){
        console.log("Database already Connected");
        return;
    }

    try{
        const db = await mongoose.connect(MONGODB_URL);
        isConnected  = db.connections[0].readyState === 1
        console.log("Connected to database", db)
    }
    catch(err){
        console.log("Failed to connect db:",err)
        throw err
    }
}
export default dbConnect;