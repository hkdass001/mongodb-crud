// Import required modules
import Post from '../models/Post.js';

// Controller function to create a new post
export const createPost = async (req, res) => {
  try {
    // Create a new Post instance with data from the request body
    const post = new Post(req.body);
    // Save the post to the database
    await post.save();
    // Send a success response with the created post
    res.status(201).json(post);
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get all posts
export const getAllPosts = async (req, res) => {
  try {
    // Retrieve all posts from the database
    const posts = await Post.find();
    // Send the posts as a JSON response
    res.json(posts);
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({ error: error.message });
  }
};

// Controller function to get a single post by ID
export const getPostById = async (req, res) => {
  try {
    // Parse the ID from the request parameters
    const postId = parseInt(req.params.id);
    // Find the post by 'id' field
    const post = await Post.findOne({ id: postId });
    if (!post) {
      // If no post is found, send a 404 response
      return res.status(404).json({ error: 'Post not found' });
    }
    // Send the post as a JSON response
    res.json(post);
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({ error: error.message });
  }
};

// Controller function to update a post by ID
export const updatePost = async (req, res) => {
  try {
    // Parse the ID from the request parameters
    const postId = parseInt(req.params.id);
    // Find and update the post by 'id' field
    const post = await Post.findOneAndUpdate(
      { id: postId },
      req.body,
      { new: true, runValidators: true } // Options to return new doc and run validators
    );
    if (!post) {
      // If no post is found, send a 404 response
      return res.status(404).json({ error: 'Post not found' });
    }
    // Send the updated post as a JSON response
    res.json(post);
  } catch (error) {
    // Handle any errors that occur
    handleError(error, res);
  }
};

// Controller function to delete a post by ID
export const deletePost = async (req, res) => {
  try {
    // Parse the ID from the request parameters
    const postId = parseInt(req.params.id);
    // Find and delete the post by 'id' field
    const post = await Post.findOneAndDelete({ id: postId });
    if (!post) {
      // If no post is found, send a 404 response
      return res.status(404).json({ error: 'Post not found' });
    }
    // Send a success message as a JSON response
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    // Handle any errors that occur
    res.status(500).json({ error: error.message });
  }
};