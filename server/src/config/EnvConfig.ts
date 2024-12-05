import { config } from "dotenv";

config();

const EnvConfig = {
  env: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
  DB_NAME: process.env.DB_NAME,
  MONGO_USER: process.env.MONGO_USER,
  MONGO_PASSWORD: process.env.MONGO_PASSWORD,
};

// freeze
Object.freeze(EnvConfig);

export default EnvConfig;
