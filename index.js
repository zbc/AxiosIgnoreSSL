const express = require("express");
const https = require("https");
const axios = require("axios");

const app = new express();
const PORT = process.env.PORT || 5000;

const agent = new https.Agent({
  rejectUnauthorized: false
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.post("/api", (req, res) => {
  const { url } = req.body;
  console.log("This is URL: ", url);
  axios
    .get(url, { httpsAgent: agent })
    .then(response => {
      console.log("This is response: ", response.data);
      return res.json(response.data);
    })
    .catch(err => console.log(err));
});

app.listen(PORT, () => console.log(`app is running on port: ${PORT}`));
