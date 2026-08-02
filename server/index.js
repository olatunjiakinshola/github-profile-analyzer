require('dotenv').config({ quiet: true });

const express = require('express');
const cors = require('cors');
const githubRoutes = require('./routes/github');

const app = express();
app.use(cors());
app.use(express.json());

console.log('Token loaded:', process.env.GITHUB_TOKEN ? process.env.GITHUB_TOKEN.slice(0, 8) + '...' : 'MISSING');

app.get('/', (req, res) => {
  res.send('GitHub Profile Analyzer backend is running!');
});

app.use('/api/github', githubRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});