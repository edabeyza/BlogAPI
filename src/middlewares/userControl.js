"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Authentication Middleware:
// Session içindeki user id ve password u kontrol eden middleware

const { User } = require('../models/userModel')

module.exports = (req, res, next) => {
    
    console.log(req.session)
    next()
}
