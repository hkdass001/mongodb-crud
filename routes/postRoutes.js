// Import required modules
import express from 'express'; // Express framework
import {
  createPost,
  getAllPosts,
  getPostById,
  updatePost,
  deletePost,
} from '../controllers/postController.js'; // Import controller functions

// Create a router instance
const router = express.Router();

// Route to create a new post
router.post('/', createPost);

// Route to get all posts
router.get('/', getAllPosts);

// Route to get a single post by ID
router.get('/:id', getPostById);

// Route to update a post by ID
router.put('/:id', updatePost);

// Route to delete a post by ID
router.delete('/:id', deletePost);

// Export the router to be used in app.js
export default router;
