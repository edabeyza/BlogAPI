"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const mongoose = require('mongoose')

/* ------------------------------------------------------- */

// Password Encyrpt

const crypto = require('node:crypto')

//Parameters: 
const keyCode = process.env.SECRET_KEY // Şifreleme anahtarı
const loopCount = 10000 //  Döngü sayısı
const charCount = 32 // 32 karakter
const encType = 'sha512' // Şifremele algoritması
// Return Encrypted Password:
const passwordEncrypt = function (password) {

    return crypto.pbkdf2Sync(password, keyCode, loopCount, charCount, encType).toString('hex')
}


/* -------------------------------------------------------*/

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        trim: true,
        unique: true,
        required: {true: 'Email is required'}
    },

    password: {
        type: String,
        trim: true,
        required: true,
        set: () => {
            console.log(password)
            return 'beyza'  
        } // Veri kaydederken return edilen data kaydedilir.
    },

    firstName: String,

    lastName: String,

}, {

    collection: 'users',
    timestamps: true

})

/* ------------------------------------------------------- */

// module.exports = mongoose.model('User', UserSchema) // Direct
module.exports.User = mongoose.model('User', UserSchema) // In Object