// Import Dependencies 

const express = require("express");
const cors = require("cors");
const methodOverride = require("method-override");
const compression = require('compression');
const helmet = require("helmet");
const fs = require('fs')
const path = require('path')
const morgan = require('morgan')
require('dotenv').config();

// Create App Object

const app = express();
app.use(helmet());
app.use(cors());
app.use(compression({
    level: 6,
    threshold: 0,
}))

// create a write stream (in append mode)
const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
 
app.use(morgan('combined', { stream: accessLogStream }))
// Declaring Ports

// Home path

app.get("/", (req, res) =>{
    console.log('You have accessed the index page');
    res.send("You're amazing, keep going! I am working :D!");

});

const apiController = require('./controllers/Api');
app.use('/api', apiController);

const PORT = process.env.PORT || 3001;

// Database Connection

// mongoose.connect(process.env.DATABASE_URL_TEST, {useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
// mongoose.connection.once('open', () => {
//     console.log('Linked to MongoDB')
// })

// Server Listener

app.listen(PORT, () => console.log(`Backend Currently Running on Port: ${PORT}`));
