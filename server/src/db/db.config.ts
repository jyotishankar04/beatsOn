import mongoose from "mongoose";
import EnvConfig from "../config/EnvConfig";

const dbConnectionString = `${EnvConfig.MONGO_URI}${EnvConfig.DB_NAME}`;

const dbConnect = async () => {
  console.log("Connecting to MongoDB...", dbConnectionString);

  try {
    const connectionInstance = await mongoose.connect(dbConnectionString);

    console.log(
      `Successfully connected to MongoDB: ${connectionInstance.connection.host}`
    );
  } catch (error) {
    console.error(`Error connecting to MongoDB: ${error}`);
    process.exit(1);
  }
};

export default dbConnect;
