const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const Message = require("../models/messageSchema");


exports.getAllMessages = async (req, res) => {
    console.log(req.params.id);

    let user_id = req.params.user_id;
    let program_id = req.params.program_id;

    let query = {
      program_id: program_id,
      $or: [
        { user_id: user_id },
        { user_id: user_id }
      ]
    };
  
    try {
    let messages = await Message.find(query).sort({ created_date: 1 });
      res.json(messages);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};



exports.storeMessage = async (req, res) => {
    
    try {
        // Create a new message instance
        const newMessage = new Message({
          program_id: req.body.program_id,
          user_id: req.body.user_id,
          message_text: req.body.message_text,
          is_admin_read: req.body.is_admin_read,
          created_date: req.body.created_date || Date.now() 
        });
    
        // Save the message instance to the database
        await newMessage.save();
    
        // Send a success response
        res.status(201).json({
          "status": "success",
          "statusCode": 200,
          "message": "Message saved successfully!",
        });
      } catch (error) {
        // Handle any errors
        console.error('Error saving message:', error);
        res.status(500).json({ error: 'An error occurred while saving the message.' });
    }

};


exports.getGroupUsers = async (req, res) => {


    res.status(201).json({
        "status": "success",
        "statusCode": 200,
        "message": "Message saved successfully!",
      });



};
  