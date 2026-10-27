import express from "express";
import connectDB from "./db/db.js";
import dotenv from "dotenv";
dotenv.config();


const app=express();

app.listen(process.env.PORT, ()=>{
    console.log(`App is listening on port ${process.env.PORT}`)
})
connectDB()


// const app=express();

// ;(async ()=>{
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//         console.log("Error: ", error);
//         throw error;
//         });

//         app.listen(process.env.PORT, ()=>{
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })
        
//     } catch (error) {
//         console.error("Error: ", error)
//             // throw error;
//     }
// })()