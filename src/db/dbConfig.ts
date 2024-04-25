import mongoose from "mongoose";

export async function connectDb() {
  try {
    mongoose.connect(process.env.MONGO_URI!);

    const connection = mongoose.connection;

    connection.on("connected", () => {
      console.log("DB connected");
    });

    connection.on("error", (error) => {
      console.log("DB connection error: ",error);
      process.exit(1);
    });
  } catch (error) {
    console.log("something went wrong in connecting to DB");
  }
}
