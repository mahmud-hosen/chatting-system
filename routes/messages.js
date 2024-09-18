const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = require("../models/messageSchema");


const query = {
    program_id: 2002,
    $or: [
      { user_id: 101 },
      { user_id: 102 }
    ]
  };
  
  
// Route to get all messages
// router.get('/', async (req, res) => {
//     try {
//       const messages = await Message.find(query).sort({ date: 1 });
//       res.json(messages);
//     } catch (err) {
//       res.status(500).json({ message: err.message });
//     }
//   });

// Route to send a new message
// router.post('/save', async (req, res) => {
//   try {
//     // Create a new message instance
//     const newMessage = new Message({
//       program_id: req.body.program_id,
//       user_id: req.body.user_id,
//       message: req.body.message,
//       status: req.body.status,
//       created_date: req.body.created_date || Date.now() 
//     });

//     // Save the message instance to the database
//     await newMessage.save();

//     // Send a success response
//     res.status(201).json({
//       "status": "success",
//       "statusCode": 200,
//       "message": "Message saved successfully!",
//     });
//   } catch (error) {
//     // Handle any errors
//     console.error('Error saving message:', error);
//     res.status(500).json({ error: 'An error occurred while saving the message.' });
//   }
// });

module.exports = router;
