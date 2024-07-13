import mongoose from 'mongoose';

const connect = async (url) => {
  mongoose.set('strictQuery', true);
  
  try {
    await mongoose.connect(url, {
      
    });
    console.log('MongoDB connected successfully');
  } catch (err) {
    console.error('Failed to connect to MongoDB', err);
  }
};

export default connect;
