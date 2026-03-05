import dotenv from "dotenv";

dotenv.config();
export const envVers = {
  PORT: process.env.PORT,
  DB_URL: process.env.DB_URL,
  NODE_ENV: process.env.NODE_ENV,
};
