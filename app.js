const axios = require("axios");
const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const POSTS_URL = `https://www.pushtable.com/api/firestore/our-blind-mouse-blog/blog_posts_${
  process.env.NODE_ENV
}?auth=${process.env.REACT_APP_PUSHTABLE_API_KEY}`;

app.get("/api/posts", (req, res) => {
  axios.get(POSTS_URL).then(({ data }) => {
    res.send(data);
  });
});
app.use(express.static(`${__dirname}/build`));

app.get("*", function(req, res) {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
