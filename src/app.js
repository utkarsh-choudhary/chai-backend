import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";


const app=express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

const size_limit= "16kb"

app.use(express.json({
    limit: size_limit
}))
app.use(express.urlencoded({
    extended: true,
    limit: size_limit
}))
app.use(express.static("public"))
app.use(cookieParser())



export {app}