// run `node index.js` in the terminal
import express from 'express';
const app = express();
const port = 3111;
import cors from 'cors';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();
const PORT = process.env.PORT || 3001;
const HOST = '0.0.0.0'; // Use '0.0.0.0' to listen on all interfaces
console.log(`Hello Node.js v${process.versions.node}!`);
app.use(cors());
app.get('/', (req, res) => {
  const host = req.hostname;
  const url = req.originalUrl;
  console.log('url' + url);
  res.send('Welcome  a WebContainers app');
});

app.post('/api/data', (req, res) => {
  const data = req.body;
  console.log('Received data:', data);
  res.json({ message: 'Data received successfully', receivedData: data });
});

// app.listen(port, () => {
//   console.log(`App is live at http://localhost:${port}`);
// });
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
