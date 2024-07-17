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

        // const categoryId = req.params.categoryId
        // const data = await BlogCategory.findOne({_id:categoryId})

        const data = await BlogCategory.findOne({_id:req.params.categoryId})

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {

        // const data = await BlogCategory.updateOne({ ...filter}, { ...data })
        const data = await BlogCategory.updateOne({_id: req.params.categoryId}, req.body)
        
        res.status(202).send({
            error: false,
            result: data, // Güncelleme işleminin sayısal değerini döndürür.
            new: await BlogCategory.findOne({_id:req.params.categoryId}) // Güncellenmiş halini döndürür.
        })  

    },

    delete: async (req, res) => {

        const data = await BlogCategory.deleteOne({_id:req.params.categoryId})
        console.log(data)

        // res.status(204).send({
        //     error: false,
        //     result: data
        // })

        if(data.deletedCount > 0){
            res.sendStatus(204)
            // error: false,

        } else {

            res.errorStatusCode = 404
            throw new Error('Data not found')

            // error: true,
        }
    }
    
}

module.exports.blogPost = {
    
    list: async (req, res) => {

        const data = await BlogPost.find()

        res.status(200).send({
            error: false,
            result: data
        })
    },

    // CRUD Methods

    create: async (req, res) => {

        // res.send('create method')

        const data = await BlogPost.create(req.body)
        console.log(data)

        res.status(201).send({
            error:false,
            result: data
        })
        
    },

    read: async (req, res) => {

        const data = await BlogPost.findOne({_id:req.params.postId})

        res.status(200).send({
            error: false,
            result: data
        })
    },

    update: async (req, res) => {

        const data = await BlogPost.updateOne({_id: req.params.postId}, req.body)
        
        res.status(202).send({
            error: false,
            result: data, // Güncelleme işleminin sayısal değerini döndürür.
            new: await BlogPost.findOne({_id:req.params.postId}) // Güncellenmiş halini döndürür.
        })  

    },

    delete: async (req, res) => {

        const data = await BlogPost.deleteOne({_id:req.params.postId})
        console.log(data)

        // res.status(204).send({
        //     error: false,
        //     result: data
        // })

        if(data.deletedCount > 0){
            res.sendStatus(204)
            // error: false,

        } else {

            res.errorStatusCode = 404
            throw new Error('Data not found')

            // error: true,
        }
    }
    
}