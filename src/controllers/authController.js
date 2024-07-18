"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

/* ------------------------------------------------------ */

const { User } = require('../models/userModel') 
const passwordEncrypt = require('../helpers/passwordEncrypt')  


// Auth Controller

module.exports.auth = {

    login: async (req, res) => {
        const { email, password } = req.body

        if (email && password) {

            // const user = await User.findOne({ email: email})
            const user = await User.findOne({ email })

            if(user) {

                // console.log(user)
                if(user.password === passwordEncrypt(password)) {

                    res.send({
                        message: 'Login success'
                    })
                    
                } else {
                    res.errorStatusCode = 401
                    throw new Error('Login parameters are incorrect')
                }

            } else {
                res.errorStatusCode = 401
                throw new Error('User not found')
            }

        } else {
    
           res.errorStatusCode = 401
           throw new Error('Email and Password are required')

        }
    },

    logout: async (req, res) => {
        
    }
}

/* ------------------------------------------------------ */