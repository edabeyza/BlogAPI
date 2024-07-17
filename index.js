"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

// Accept JSON Data
app.use(express.json())

// DB Connection
// const dbConnection = require('./src/dbConnection')
// dbConnection()
require('./src/dbConnection')()

// Catch errors from async functions:
require('express-async-errors')

// Routes
app.all('/', (req, res) => {
    res.send('WELCOME TO BLOG API')
})

app.use('/blog', require('./src/routes/blogRouter')) // BlogCategory, BlogPost
app.use('/user', require('./src/routes/userRouter')) // User

// continue from here...

// Catch Errors:
app.use(require('./src/errorHandler'))


/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))