import mongoose from "mongoose";
import { Server } from "http";
import app from "./app";
import { envVers } from "./app/config/env";

let server: Server;

const startServer = async () => {
  try {
    await mongoose.connect(envVers.DB_URL as string);

    console.log("Database connected successfully");

    server = app.listen(envVers.PORT, () => {
      console.log(`Server is running on port ${envVers.PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startServer();

// handle unhandled rejection error
process.on("unhandledRejection", (err) => {
  console.log("Unhandled Rejection detected... server shutting down.", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});

// handle uncaught exception error
process.on("uncaughtException", (err) => {
  console.log("Uncaught Exception detected... server shutting down.", err);

  if (server) {
    server.close(() => {
      process.exit(1);
    });
  }

  process.exit(1);
});
