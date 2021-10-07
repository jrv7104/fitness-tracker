//definitions
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require("./routes");
const mongoose = require("mongoose");

//middleware
app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(express.static('public'));

//routing
//pending
mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(routes)
app.get('/exercise', (req, res) => {
    // console.log(__dirname)
    res.sendFile(path.join(__dirname, "/public/exercise.html"))
})

app.get('/stats', (req, res) => {
    res.sendFile(path.join(__dirname, "/public/stats.html"))
})

//listening
app.listen(PORT, () => {
    console.log("listening")
})