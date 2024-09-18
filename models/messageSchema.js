const mongoose = require('mongoose');

// Define the schema
const messageSchema = new mongoose.Schema({
  program_id: { type: Number, required: true },
  user_id: { type: Number, required: true },
  message_text: { type: String, required: true },
  is_admin_read: { type: Number, default: 0 }, 
  created_date: { type: Date, default: Date.now },
  updated_timestamp: { type: Date, default: Date.now },
});

// Create the model
const Message = mongoose.model('Message', messageSchema);

// Export the model
module.exports = Message;
