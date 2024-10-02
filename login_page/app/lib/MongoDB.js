import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;

async function connectToDatabase() {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error while connecting to MongoDB:", err);
    throw err; // Throw the error to be handled elsewhere
  }
}

export default connectToDatabase;
