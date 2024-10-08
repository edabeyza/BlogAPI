"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const { User } = require('./src/models/userModel')
const { BlogCategory, BlogPost } = require('./src/models/blogModel')

/* ------------------------------------------------------- */

module.exports = async() => {

    /* Exampla Data */
    // Deleted All Records:
    await User.deleteMany().then(() => console.log(' - User Deleted All'))
    await BlogCategory.deleteMany().then(() => console.log(' - BlogCategory Deleted All'))
    await BlogPost.deleteMany().then(() => console.log(' - BlogPost Deleted All'))

    // Example User:
    const user = await User.create({
        email: "test@test.com",
        password: "12345678",
        firstName: "Test",
        lastName: "Test"
    })

    // Example Category:
    const blogCategory = await BlogCategory.create({
        name: 'Test Category'
    })
    // Example Posts:
    for (let key in [...Array(200)]) { // Buradaki işlemleri 200 kere tekrarlayacak
        await BlogPost.create({
            userId: user._id,
            categoryId: blogCategory._id,
            title: `test ${key} title`,
            content: `test ${key} content`,
            published: Boolean(key%2) // 0 ve 1 değerlerini alacak
        })
    }
    
    // finish
    console.log('Sync Data Created')
}
/* ------------------------------------------------------- */
