import express from 'express';
import dotenv from 'dotenv';
import axios from 'axios';

// Load environment variables from .env file
dotenv.config();

const app = express();

// Middleware to parse JSON and URL-encoded request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const apikey = process.env.LIMEWIRE_API_KEY;

// Test route to ensure server is running
app.get('/', (req, res) => {
    res.send('hello ai');
});

// Route to handle image generation requests using LimeWire API
app.post('/getimage', async (req, res) => {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return res.status(400).json({ error: 'Prompt is required' });
        }

        const response = await axios.post('https://api.limewire.com/api/image/generation', {
            prompt,
            aspect_ratio: "1:1",
            quality: "MID"
        }, {
            auth: {
                username: 'your_username',
                password: 'your_password'
            },
            headers: {
                'Content-Type': 'application/json',
                'X-Api-Version': 'v1'
            }
        });

        const image = response.data.data[0].url;
        console.log(image);
        res.json({ photo: image });
    } catch (err) {
        console.error('Error generating image:', err);
        res.status(500).json({ error: 'Failed to generate image' });
    }
});



export default app;

