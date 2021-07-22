const mongoose = require("mongoose");

const { Schema } = mongoose;

const cakeTypeSchema = new Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});

const CakeType = mongoose.model("CakeType", cakeTypeSchema);

module.exports = CakeType;
