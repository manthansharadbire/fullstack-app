import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

const connectDB = async()=>{
const connection = await mongoose.connect(process.env.MONGODB_URI);
if (connection){
    console.log("MongoDB connected successfully")
}
};

const UFC_FIGHTERS = []

app.get("/health", (req, res) => {
    res.status(200).json({ message: "Server is running" });
});

app.get("/ufc-fighters", (req, res) => {
    return res.status(200).json({
        success: true,
        data: UFC_FIGHTERS,
        message: "UFC Fighters fetched successfully"
    });
});

app.post("/ufc-fighters", (req, res) => {
    const { name, city, division, title, thumbnail } = req.body;

    const newUfcFighters = {
        name,
        city,
        division,
        title,
        thumbnail
    };

    UFC_FIGHTERS.push(newUfcFighters);
    return res.status(201).json({
        success:true,
        data:newUfcFighters,
        message:"UFC Fighter has been added successfully"
    })

});

const PORT = 5002;

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
    connectDB();
});