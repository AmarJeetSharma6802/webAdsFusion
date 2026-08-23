import mongoose from "mongoose";

const DBconnect = async () => {
  if (mongoose.connection.readyState >= 1) {
    return mongoose.connection;
  }

  const uri = process.env.MONGODB_URI;

  if (!uri) {
    throw new Error(
      "MONGODB_URI is not set. Add it to .env locally and to the project's environment variables on the host."
    );
  }

  try {
    const connect = await mongoose.connect(uri);
    console.log(`MongoDB Connected: ${connect.connection.host}`);
    return connect.connection;
  } catch (error) {
    // Never kill the process here: this runs inside the Next.js build worker and
    // inside request handlers, so exiting takes the whole build/server down.
    // Let the caller decide how to degrade.
    console.error("MongoDB Connection Error:", error);
    throw error;
  }
};

export default DBconnect;
