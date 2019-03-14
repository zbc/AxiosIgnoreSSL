// const express = require("express");

// const app = new express();
const https = require("https");
const axios = require("axios");

const agent = new https.Agent({
  rejectUnauthorized: false
});
axios
  .get("https://192.168.92.227:11443/ext/xbox/info", { httpsAgent: agent })
  .then(response => console.log(response.data));
