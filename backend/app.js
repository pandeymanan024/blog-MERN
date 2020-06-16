const express = require('express')
const mongoose = require('mongoose')
const { MONGOURI } = require("./keys")

const app = express()
const PORT = 5000;

//connection to MongoDB
mongoose.connect(MONGOURI, {
    useUnifiedTopology: true,
    useNewUrlParser: true

});

mongoose.connection.on("connected", () => {
    console.log("connected to mongoDB")
});

mongoose.connection.on("error", (error) => {
    console.log("Error: " + error)
});

//Models import
require('./models/post')
require('./models/category')

app.use(express.json())

//Router import
app.use(require("./routes/post"))

app.listen(PORT, () => {
    console.log("server is started at " + PORT)
})