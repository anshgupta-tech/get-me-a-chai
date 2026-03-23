import mongoose from "mongoose";

const connectDb = async () => {

  if (mongoose.connection.readyState >= 1) {
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(error);
    throw new Error("MongoDB connection failed");
  }
};

export default connectDb;