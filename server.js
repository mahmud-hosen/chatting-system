const express = require('express');
const mongoose = require('mongoose');

const messageHandler = require("./routes/messagesRoutes");  

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const port = 4004;
const db_url = 'mongodb://127.0.0.1:27017/chatting_service';

// Connect to MongoDB
mongoose.connect(db_url).then(() => {
    console.log('MongoDB connected successfully');
}).catch((err) => {
    console.error('MongoDB connection error:', err);
});

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Use the messages router
app.use("/user/api/v1/messages", messageHandler);    

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
