import mongoose from 'mongoose'

const newdb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.log("Something went wrong in DB connection");
    console.error(error.message);
    process.exit(1);
  }
};
export default newdb;