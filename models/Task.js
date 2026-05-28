const mongoose = require("mongoose");
//  schema for todo tasks

const taskSchema = new mongoose.Schema({

  title: {
    type: String,
    required: true,
    minlength: 3
  },

  status: {
    type: String,
    enum: ["pending", "completed"],
    default: "pending"
  }

}, {
  timestamps: true
});

module.exports = mongoose.model("Task", taskSchema);