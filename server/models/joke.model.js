// import mongoose
const mongoose = require("mongoose");

// define the schema with keys & validations (laying out collections)

const JokeSchema = new mongoose.Schema(
  {
    setup: {
      type: String,
      required: [true, "Please enter a joke set up."],
      minLength: [5, "Must be 5+ characters in length."],
    },
    punchline: {
      type: String,
      required: [true, "Please enter a joke set up."],
      minLength: [5, "Must be 5+ characters in length."],
    },
    // automatically create the createdAt and updatedAt
  },
    { timestamps: true }
);

// create a mmodel with the schema & export it
const Joke = mongoose.model("Joke", JokeSchema);

module.exports = Joke;
