const axios = require("axios");
const express = require("express");
const path = require("path");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

const admin = require("firebase-admin");
const flamelink = require("flamelink");

const firebaseConfig = {
  credential: admin.credential.cert({
    type: process.env.REACT_APP_FIREBASE_TYPE,
    project_id: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    private_key_id: process.env.REACT_APP_FIREBASE_PRIVATE_KEY_ID,
    private_key: process.env.REACT_APP_FIREBASE_PRIVATE_KEY.replace(
      /\\n/g,
      "\n"
    ),
    client_email: process.env.REACT_APP_FIREBASE_CLIENT_EMAIL,
    client_id: process.env.REACT_APP_FIREBASE_CLIENT_ID,
    auth_uri: process.env.REACT_APP_FIREBASE_AUTH_URI,
    token_uri: process.env.REACT_APP_FIREBASE_TOKEN_URI,
    auth_provider_x509_cert_url: process.env.REACT_APP_FIREBASE_AUTH_PROVIDER,
    client_x509_cert_url: process.env.REACT_APP_FIREBASE_CLIENT
  }), // required
  databaseURL: "https://our-blind-mouse-blog.firebaseio.com", // required
  storageBucket: "our-blind-mouse-blog.appspot.com" // required if you want to your any Storage functionality
};

const firebaseApp = admin.initializeApp(firebaseConfig);

const cms = flamelink({ firebaseApp, isAdminApp: true });

const POSTS_URL = `https://www.pushtable.com/api/firestore/our-blind-mouse-blog/blog_posts_${
  process.env.NODE_ENV
}?auth=${process.env.REACT_APP_PUSHTABLE_API_KEY}`;

app.get("/api/posts", async (req, res) => {
  try {
    const blogContent = await cms.content.get("blogContent", {
      populate: [{ field: "heroImage" }]
    });
    const articles = await cms.content.get("articles", {
      populate: [{ field: "heroImage" }]
    });
    let posts = [];
    for (var key in blogContent) {
      posts.push(blogContent[key]);
    }
    for (var key in articles) {
      posts.push(articles[key]);
    }
    res.send(posts);
  } catch (error) {
    res.send(error);
  }
});
app.use(express.static(`${__dirname}/build`));

app.get("*", function(req, res) {
  res.sendFile(`${__dirname}/build/index.html`);
});

app.listen(port, () => console.log(`Listening on port ${port}`));
