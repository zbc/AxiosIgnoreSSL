import express from 'express';
import https from 'https';
import axios from 'axios';

const app = new express();
const PORT = process.env.PORT || 5000;

const agent = new https.Agent({
  rejectUnauthorized: false
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post('/api', (req, res) => {
  const { url } = req.body;
  axios.get(url, { httpsAgent: agent }).then(response => response.data);
});

app.listen(PORT, () => console.log(`app is running on port: ${PORT}`));
