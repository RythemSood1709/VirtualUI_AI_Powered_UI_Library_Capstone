import express from "express";
import { connectDB } from "./config/connectDB.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.route.js";
import userRouter from "./routes/user.route.js";
import cors from "cors"
dotenv.config();

const app = express();


app.use(express.json());
app.use(cookieParser());
app.use(cors({

  origin:"http://localhost:5173",
  credentials:true
}
))

app.get("/", (req, res) => {
  res.json("Hello from server");
});

app.use("/api/auth", authRouter);
app.use("/api/user", userRouter);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  connectDB();
});
