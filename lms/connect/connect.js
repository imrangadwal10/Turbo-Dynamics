const mongoose = require('mongoose');

const connectDB= async()=>{
   return await mongoose.connect(`mongodb+srv://i:masai007@cluster0.uoma3hr.mongodb.net/?retryWrites=true&w=majority/hackathon`)
}

module.exports =connectDB;