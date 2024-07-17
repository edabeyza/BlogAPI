"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Call Models:
const {BlogCategory, BlogPost} = require('../models/blogModel')

/* ------------------------------------------------------- */

// BlogCategory Controller

module.exports.blogCategory = {

    list: async (req, res) => {

        const data = await BlogCategory.find()

        res.status(200).send({
            error: false,
            result: data
        })
    },

    // CRUD Methods

    create: async (req, res) => {

        // res.send('create method')

        const data = await BlogCategory.create(req.body)
        console.log(data)

        res.status(201).send({
            error:false,
            result: data
        })
        
    },

    read: async (req, res) => {

        const data = await BlogCategory.findById(req.params.id)

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {

        const data = await BlogCategory.findByIdAndUpdate
        (req.params.id, req.body, {new: true})
        
        res.status(200).send({
            error: false,
            result: data
        })  

    }
}