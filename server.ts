import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { handleContactForm } from './src/api/contact.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    await handleContactForm(req.body);
    res.json({ success: true });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ 
      success: false, 
      error: 'Failed to send message' 
    });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
}); 