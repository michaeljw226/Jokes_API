const express = require('express')
const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('dotenv').config();
const port = process.env.PORT

require("./config/mongoose.config")

// routes
const routes = require("./routes/joke.routes");
routes(app);



app.listen(port, () => console.log(`🧠🧠🧠 Server open on port ${port}`))