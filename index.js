import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";
import userRoute from  "./routes/userRouter.js";
import messageRoute from "./routes/messageRouter.js";
import cors from "cors";
import cookieParser from "cookie-parser";
import {app,server} from "./socket/socket.js";
import path from "path" ;
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({});

//const app = express();


//middlewares
app.use(express.static(path.resolve(__dirname,'build')));
app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(cookieParser());
const corsOptions = {
    origin: (origin, callback) => {
      callback(null, origin); 
    },
    credentials: true
  };
  
app.use(cors(corsOptions));


//routes
app.use("/api/v1/user",userRoute);
app.use("/api/v1/message",messageRoute);


const PORT = process.env.PORT;
server.listen(PORT,()=>{
    connectDB();
    console.log(`server listening at port ${PORT}`)
});