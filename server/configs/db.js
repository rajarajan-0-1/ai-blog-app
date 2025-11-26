import mongoose from "mongoose";

const connectDB = async () => {
    try {
        mongoose.connection.on('Connected', () => console.log("Database Connected")
        )
        await mongoose.connect(process.env.MONGO_URI);
    } catch (error) {
        console.log(error.message);
        
    }
}

export default connectDB;