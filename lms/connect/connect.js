const mongoose = require('mongoose');

const connectDB= async()=>{
   return await mongoose.connect(`mongodb://localhost:27017/hackathon`)
}

module.exports =connectDB;