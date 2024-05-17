const mongoose = require('mongoose');
const { secret } = require('./secret');

mongoose.set('strictQuery', false);

// local url 
const DB_URL = 'mongodb+srv://cool:nezapomnil123@atlascluster.nkmuek0.mongodb.net/'; 
// mongodb url
const MONGO_URI = secret.db_url;

const connectDB = async () => {
  try { 
    await mongoose.connect(MONGO_URI);
    console.log('mongodb connection success!');
  } catch (err) {
    console.log('mongodb connection failed!', err.message);
  }
};

module.exports = connectDB;
