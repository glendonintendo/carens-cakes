const mongoose = require("mongoose");

const { Schema } = mongoose;

const cakeFlavorSchema = new Schema({
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
});

const CakeFlavor = mongoose.model("CakeFlavor", cakeFlavorSchema);

module.exports = CakeFlavor;
