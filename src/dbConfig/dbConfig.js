import mongoose from "mongoose";
export async function connect() {
  try {
    mongoose.connect(process.env.MONGO_URI);
    const connection = mongoose.connection;
    connection.on("connected", () => {
      console.log("MongoDB connected successfuly");
    });

    connection.on("error", (er) => {
      console.log("MongoDB connection error=>", er);
      process.exit();
    });
  } catch (err) {
    console.log("There is a error=>", err);
  }
}
