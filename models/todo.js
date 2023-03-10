const mongoose = require("mongoose");

var todoSchema = mongoose.Schema(
  {
    title: {
      type: String,
      minLength: 5,
      maxLength: 20,
    },
    status: {
      enum: ["to-do", "in-progress", "done"],
    //   default: "to-do",
    },
    userId: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true }
);

var todoModel = mongoose.model('Todo', todoSchema);

module.exports = todoModel;