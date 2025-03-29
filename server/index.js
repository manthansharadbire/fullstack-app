import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
import UfcFighter from './models/UfcFighter.js';

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async()=>{
const connection = await mongoose.connect(process.env.MONGODB_URI);
if (connection){
    console.log("MongoDB connected successfully")
}
};



app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is running" });
});

app.get("/ufc-fighters", async(req, res) => {

    const ufcFighters = await UfcFighter.find();

    return res.status(200).json({
        success: true,
        data: ufcFighters,
        message: "UFC Fighters fetched successfully"
    });
});


app.post("/ufc-fighters", async(req, res) => {
    const { name, city, division, title, thumbnail } = req.body;
    const newUfcFighters = new UfcFighter({
         name,
         city, 
         division, 
         title, 
         thumbnail
    });

    const savedUfcFighter = await newUfcFighters.save();

    return res.status(201).json({
        success:true,
        data:savedUfcFighter,
        message:"UFC Fighter has been added successfully"
    });
});


const PORT = process.env.PORT || 5002;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});