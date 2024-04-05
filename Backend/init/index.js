import mongoose from "mongoose";
import initData from "./data.js";
import Listing from "../model/book.model.js";

const PORT = process.env.PORT || 4000;
const MONGO_URL = "mongodb://127.0.0.1:27017/bookStore";

async function main() {
    try {
        await mongoose.connect(MONGO_URL);
        console.log("Connected to MongoDB");

        await initDB();
    } catch (err) {
        console.error("Error connecting to MongoDB:", err);
    }
}

async function initDB() {
    try {
        await Listing.deleteMany({});
        await Listing.insertMany(initData);
        console.log("Data was initialized");
    } catch (err) {
        console.error("Error initializing data:", err);
    }
}

main();
