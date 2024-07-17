"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require("express").Router();

// Call Controllers:
const {blogCategory, blogPost} = require('../controllers/blogController')

/* ------------------------------------------------------- */

// URL: /blog

// BlogCategory
router.route('/category')
    .get(blogCategory.list)
    .post(blogCategory.create)
/* ------------------------------------------------------- */

module.exports = router;