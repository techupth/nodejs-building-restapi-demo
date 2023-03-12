import express from "express";

import { blogPosts } from "./data/posts.js";

let blogPostMockDatabase = blogPosts;

const app = express();
const port = 4000;

app.get("/posts", (req, res) => {
  return res.json({
    data: blogPostMockDatabase,
  });
});

app.get("/", (req, res) => {
  res.send("Hello DTs");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
