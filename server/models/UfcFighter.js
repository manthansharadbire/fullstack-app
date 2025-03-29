import { Schema, model } from "mongoose"; //Schema means structure

const ufcFighterSchema = new Schema({
    title: String,
    name: String,
    city: String,
    division: String,
    title: String,
    thumbnail: String,
})

const UfcFighter = model("UfcFighter",ufcFighterSchema );

export default UfcFighter;

//This is known as Schema Modeling or Data modeling. This is a stardard practice that most of the companies follow.