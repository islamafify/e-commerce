import express from "express";
import mongoose from "mongoose";

const app = express();
const port = 3001;

mongoose
    .connect("mongodb://localhost:27017/ecommerce")
    .then(() => console.log("mongo connected!")).catch((err) => console.log("failed to connect!", err));
app.listen(port, () => {
    console.log(`server is running at: http://localhost:${port}`)
})
