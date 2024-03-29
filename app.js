import express from "express";
import cookieParser from "cookie-parser";
import {connectdb}  from "./db/database.js";
import {config} from 'dotenv'
import router from "./routes/user.js";
import cors from "cors";



config({
    path:"./db/config.env"
});
const app =  express();
connectdb();




app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))

app.use("/api/v1/users",router)









app.get("/",(req,res)=>{
    res.send("server is working properly")
})


app.listen(process.env.PORT,()=>{
    console.log(`server is working on port ${process.env.PORT}`);
})

