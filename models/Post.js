// Import required modules
import mongoose from 'mongoose';

// Define a schema for the Post data with validation rules
const postSchema = new mongoose.Schema({
  id: {
    type: Number,
    required: [true, 'Post ID is required'],
    unique: true, // Ensure the ID is unique
  },
  userId: {
    type: Number,
    required: [true, 'User ID is required'],
  },
  title: {
    type: String,
    required: [true, 'Title is required'],
    maxlength: [100, 'Title cannot exceed 100 characters'],
  },
  body: {
    type: String,
    required: [true, 'Body is required'],
  },
});

// Create and export the Post model based on the schema
const Post = mongoose.model('Post', postSchema);
export default Post;
