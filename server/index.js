import express from 'express';
import * as dotenv from 'dotenv'
import cors from 'cors';
import connect from './mongodb/connect.js';
import postrouts from './routes/postrouts.js'
import dalliroutes from './routes/dalliroutes.js'
dotenv.config();

const app = express();
app.use(cors());
app.use('/api/post',postrouts)
app.use('/api/dalliroutes',dalliroutes)
 app.use(express.json({ limit: '50mb' }));
 
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  res.json("hello from dalle");
});

const startServer = async () => {
  try {
    await connect(process.env.MONGO_URL);
    app.listen(4000, () => {
      console.log('Server started on port 4000');
    });
  } catch (err) {
    console.error('Error starting server:', err);
  }
};

startServer();
