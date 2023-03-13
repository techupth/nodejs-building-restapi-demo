import express from "express";

import { blogPosts } from "./data/posts.js";

let blogPostMockDatabase = blogPosts;

const app = express();
const port = 4000;

app.get("/posts", (req, res) => {
  const limit = req.query.limit;

  if (limit > 100) {
    return res.status(401).json({
      message: "Invalid request. Can get data up to 100 posts per request",
    });
  }

  const blogPosts = blogPostMockDatabase.slice(0, limit);

  return res.json({
    data: blogPosts,
  });
});

app.get("/", (req, res) => {
  res.send("Hello DTs");
});

app.listen(port, () => {
  console.log(`Server is running at ${port}`);
});
