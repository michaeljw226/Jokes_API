// import model
const Joke = require("../models/joke.model");

// Server Test:
module.exports.apiTest = (req, res) => {
  res.json({ message: "Server is working!" });
};

// export all functions with placeholder
module.exports.allJokes = (req, res) => {
  Joke.find()
    .then((jokeList) => res.json(jokeList))
    .catch((err) => res.json(err));
};

module.exports.oneJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((OneJoke) => res.json(OneJoke))
    .catch((err) => res.json(err));
};

module.exports.createJoke = (req, res) => {
  Joke.create(req.body)
    .then((newJoke) => res.json(newJoke))
    .catch((err) => res.json(err));
};

module.exports.updateJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    // line 32 is enabling validations
    runValidators: true,
  })
    .then((updatedJoke) => res.json(updatedJoke))
    .catch((err) => res.json(err));
};

module.exports.deleteJoke = (req, res) => {
  Joke.findOneAndDelete({ _id: req.params.id })
    .then((status) => res.json(status))
    .catch((err) => res.json(err));
};
