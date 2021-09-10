//definitions
const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3001;

//middleware
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

//routing
//pending
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