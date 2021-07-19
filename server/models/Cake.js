const mongoose = require("mongoose");

const { Schema } = mongoose;

const cakeSchema = new Schema({
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
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

const Cake = mongoose.model("Cake", cakeSchema);

module.exports = Cake;
