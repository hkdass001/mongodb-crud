// Import required modules
import express from 'express'; // Framework for building web applications
import mongoose from 'mongoose'; // MongoDB object modeling tool
import postRoutes from './routes/postRoutes.js'; // Import post routes
import fetchDataAndSave from './utils/fetchData.js'; // Import data fetching utility

// Create an instance of Express
const app = express();

// Use JSON middleware to parse JSON bodies of incoming requests
app.use(express.json());

// MongoDB connection string (update this if your MongoDB URI is different)
const mongoURI = 'mongodb://localhost:27017/Test'
 
// Connect to MongoDB using Mongoose
mongoose.connect(mongoURI, {
  useNewUrlParser: true, // Use new URL parser
  useUnifiedTopology: true, // Use new server discovery and monitoring engine
});

// Once the database is connected, fetch initial data and save to the database
mongoose.connection.once('open', () => {
  console.log('Connected to MongoDB');
  fetchDataAndSave(); // Fetch data from external API and save to MongoDB
});

// Use post routes for any requests to '/posts'
app.use('/posts', postRoutes);

// Start the server and listen on the specified port
const PORT = process.env.PORT || 3000; // Use environment variable or default to 3000
app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
