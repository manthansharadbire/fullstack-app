import cors from 'cors';
import express from 'express';

const app = express();
app.use(express.json());
app.use(cors());

app.get("/health", (req,res) => {
    res.status(200).json({message:"Server is running"});
});

const PORT = 5002;

app.listen(PORT,()=>{
    console.log(`Server is running on ${PORT}`);
});