"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */
// Accept JSON:
app.use(express.json())

// DB CONNECTION:
// const dbConnection = require('./src/dbConnection')
// dbConnection()
require('./src/configs/dbConnection')()

// Catch error from async:
require('express-async-errors')
/* ------------------------------------------------------- */
// Session & Cookie:
//* $ npm install cookie-session
const session = require('cookie-session');
const { user } = require("./src/controllers/userController");
// Session lar ömür verilmemiş Cookie lerdir.
// Bu bir middlewaredir. O yüzden app.use() ile kullanılır.
app.use(session( // Session için gerekli genel ayarlar
    {
        secret: process.env.SECRET_KEY,
        // maxAge: 1000 * 60 * 60 * 24 * 3, // Milisecond cinsinden. 1000 ms = 1 s
    }
))
/* ------------------------------------------------------- */

app.use(require('./src/middlewares/userControl'))
// Genel bir middleware olduğu için tüm route ları kapsar ve üstte olmalıdır.

/* ------------------------------------------------------- */

app.all('/', (req, res) => {
    res.send({
        
        message: 'Welcome to Blog Project',
        session: req.session, // Session ile ilgili data işlemlerini yapabiliriz.
        user: req.user, // User ile ilgili data işlemlerini yapabiliriz.
        isLogin: (req.user ? true : false)  // Login olup olmadığını kontrol edebiliriz.
    })
})

/* ------------------------------------------------------- */
// Routes:

app.use('/auth', require('./src/routes/authRouter')) // User Model - Login & Logout
app.use('/user', require('./src/routes/userRouter')) // User Model
app.use('/blog', require('./src/routes/blogRouter')) // BlogCategory & BlogPost

/* ------------------------------------------------------- */
// Catch Errors:
app.use(require('./src/middlewares/errorHandler'))

/* ------------------------------------------------------- */

app.listen(PORT, () => console.log('Running: http://127.0.0.1:' + PORT))

/* ------------------------------------------------------- */

// ! Syncronization Data:
// require('./sync')() // Sync Data
