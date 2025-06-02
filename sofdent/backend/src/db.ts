import mongoose from "mongoose";

const uri =
  "mongodb+srv://Hector2:Gemelos05@test.bvshrmj.mongodb.net/?retryWrites=true&w=majority&appName=Test";

mongoose.connect(uri);

export const connectDB = () => {
  return mongoose.connect(uri);
};
