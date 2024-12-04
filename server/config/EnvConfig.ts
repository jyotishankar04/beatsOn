import { config } from "dotenv";

config();

const EnvConfig = {
  env: process.env.NODE_ENV,
  PORT: process.env.PORT,
  MONGO_URI: process.env.MONGO_URI,
  JWT_SECRET: process.env.JWT_SECRET,
};

// freeze
Object.freeze(EnvConfig);

export default EnvConfig;
