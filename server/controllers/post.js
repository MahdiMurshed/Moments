import PostMessage from "../models/post.js";

export const createPost = (req, res) => {
  const post = req.body;
  const newPost = PostMessage({
    ...post,
    creator: req.userId,
    createdAt: new Date().toISOString(),
  });
  newPost
    .save()
    .then((result) => res.status(201).json(result))
    .catch((err) => res.status(409).json({ message: err.message }));
};

export const getPosts = async (req, res) => {
  try {
    const LIMIT = 6;
    const total = await PostMessage.countDocuments({});

    const page = req.query.page;
    const startingIndex = (Number(page) - 1) * LIMIT;
    const posts = await PostMessage.find()
      .sort({ _id: -1 })
      .limit(LIMIT)
      .skip(startingIndex);
    res
      .status(200)
      .json({
        data: posts,
        currentPage: Number(page),
        numberOfPages: Math.ceil(total / LIMIT),
      });
  } catch (error) {
    console.log("get posts error");
  }
};
