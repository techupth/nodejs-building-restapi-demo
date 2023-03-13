import express from "express";

import { blogPosts } from "./data/posts.js";

let blogPostMockDatabase = blogPosts;

const app = express();
const port = 4000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/posts", function (req, res) {
  blogPostMockDatabase.push({
    id: blogPostMockDatabase[blogPostMockDatabase.length - 1].id + 1,
    ...req.body,
  });

  return res.json({
    message: "Blog post has been created successfully",
  });
});

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
