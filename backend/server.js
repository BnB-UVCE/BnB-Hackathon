const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');
const db = require('./config/db');
const path = require('path'); 
const uploadRoutes = require('./routes/uploadRoutes');
const session = require('express-session');
const userRoutes = require('./routes/userRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({ secret: 'your-secret', resave: false, saveUninitialized: true }));
app.use(express.static('public')); 
app.use('/api', userRoutes)

app.use('/upload', uploadRoutes);

// Routes
app.use('/auth', authRoutes);

// Serve static files from the frontend directory
app.use(express.static(path.join(__dirname, '../frontend')));

// Fallback route for serving main.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../frontend', 'main.html')); // Serve main.html
});

// MongoDB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected...');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit process with failure
  }
};

connectDB(); // Call the connect function

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
