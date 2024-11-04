// Import required modules
import axios from 'axios';
import Post from '../models/Post.js';

// Function to fetch data from an external API and save to MongoDB
const fetchDataAndSave = async () => {
  try {
    // Fetch data from JSONPlaceholder API
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    const posts = response.data;

    // Save data to MongoDB
    await Post.insertMany(posts);
    console.log('Data fetched and saved to MongoDB');
  } catch (error) {
    // Log any errors that occur
    console.error('Error fetching data:', error.message);
  }
};

// Export the function to be used in app.js
export default fetchDataAndSave;
