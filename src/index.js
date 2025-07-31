import dotenv from "dotenv"
import connectDB from "./db/index.db.js";
import {app} from './app.js'
dotenv.config({
    path: './.env'
})

  

// For development, start server even if MongoDB is not available
app.listen(process.env.PORT || 8000, () => {
    console.log(`⚙️ Server is running at port : ${process.env.PORT || 8000}`);
})

// Try to connect to MongoDB if available
connectDB()
.then(() => {
    console.log("✅ MongoDB connected successfully");
})
.catch((err) => {
    console.log("⚠️ MongoDB connection failed, but server is running:", err.message);
})

