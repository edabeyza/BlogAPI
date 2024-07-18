"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Authentication Middleware:
// Session içindeki user id ve password u kontrol eden middleware

const { User } = require('../models/userModel')

module.exports = async (req, res, next) => {
    
    req.user = null
    // console.log(req.session)
    if (req?.session?._id) {
        // Session: OK
        const user = await User.findOne({ _id: req.session._id})

        if (user && user.password == req.session.password) {

            req.user = user

        } else {

            req.session = null
        }
    }
    next()
}
