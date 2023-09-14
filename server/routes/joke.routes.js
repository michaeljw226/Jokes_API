// 1. import controller
const JokeController = require("../controllers/joke.controller")

module.exports = (app) => {
  // Get Requests
  app.get("/api/test", JokeController.apiTest);

  app.get("/api/jokes", JokeController.allJokes)
  app.get("/api/jokes/:id", JokeController.allJokes)
  // Post Requests

  // note(line 12 does not compete with line 8 as one is get and one is post)
  app.post("/api/jokes", JokeController.createJoke)
  // Put Requests
  app.patch("/api/jokes/:id", JokeController.updateJoke);
  // Delete Requests
  app.delete("/api/jokes/:id", JokeController.deleteJoke)
};
// Import routes to our server

// module.exports = router