const mongoose = require("mongoose");

const { Schema } = mongoose;

const decorationSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
});

const Decoration = mongoose.model("Decoration", decorationSchema);

module.exports = Decoration;
