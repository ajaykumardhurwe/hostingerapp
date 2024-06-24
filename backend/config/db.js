const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect(
        'mongodb+srv://admin:fNzRU69j68gUcx2t@cluster0.tuy6mdz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
        // mongodb://localhost:27017/expoCrud',
         {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
