const mongoose = require("mongoose");

const { Schema } = mongoose;

const frostingSchema = new Schema({
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

const Frosting = mongoose.model("Frosting", frostingSchema);

module.exports = Frosting;
