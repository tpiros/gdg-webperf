import express from 'express';
import { resolve, dirname } from 'path';
import { fileURLToPath } from 'url';
import characters from './data.js';
import cors from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Get the delay from the command-line arguments
const args = process.argv.slice(2);
const delay = args.length > 0 ? parseInt(args[0], 10) : 0;

// Basic server setup
const app = express();
app.use(cors());

// Apply delay to all requests
app.use((_, __, next) => {
  setTimeout(next, delay);
});

// Disable asset caching
app.use((_, res, next) => {
  res.setHeader('Cache-Control', 'no-store');
  next();
});

app.get('/api', (_, res) => {
  return res.send(characters);
});

app.get('/api/:id', (req, res) => {
  const id = +req.params.id;
  const [character] = characters.filter((character) => character.id === id);
  return res.send(character);
});

// Start server on port 3000
const port = 4000;
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}/ with a delay of ${delay}ms`);
});
