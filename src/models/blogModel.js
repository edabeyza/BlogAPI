"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

// Mongoose

const mongoose = require("mongoose")

// const ModelName = new mongoose.Schema({ ...fields }, { ...settings} )

// const ModelSchema = new mongoose.Schema({

//     // Primary Key (_id) tanımlamaya gerek yoktur. Mongoose otomatik olarak tanımlar.
//     // _id: Number

//     fieldName: {
//         type: String,
//         default: null, // Veri gelmediğinde yazılacak veri.
//         trim: true, // Başındaki ve sonundaki boşlukları kırpar.
//         unique: true, // Benzersiz olmasını sağlar.
//         index: true, // Aramalarda hızlı erişim sağlar. Her şeye verilmez, verilirse veritabanı şişer. Performans düşer.
//         // required: true, // Veri gönderimi zorunlu mu?
//         required: [true, 'Bu data mutlaka gönderilmeli'], // [Veri gönderimi zorunlu mu?, HATA MESAJI]
//         // enum: [1, 2, 3] // Sadece belirtilen değerlerden biri olabilir.
//         enum: [[1, 2, 3], 'Bu değerlerden bir olmalıdır' ], // Sadece belirtilen değerlerden biri olabilir.
//         // validate: (data) => true, // Gelen data formatının doğruluğunu kontrol eder.
//         validate: [
//             (data) => {return true}, 
//             'Data formatı uygun değil'
//         ],// Gelen data formatının doğruluğunu kontrol eder.
//         get: (data) => data, // Bu veriye erişilmek istendiğinde otomatik çalışacak fonksiyon.
//         set: (data) => data, // Bu field'a veri kaydedilmek istendiğinde otomatik çalışacak fonksiyon.
//     }



// }, { 
//     collection: 'tableName', // Tablo ismi
//     timestamps: true // Oluşturulma(createdAt) ve güncelleme(updatedAt) tarihlerini otomatik olarak ekler.
//  })

//  // Modele çevirmek için:
// const ModelName = mongoose.model('ModelName', ModelSchema)

// fieldName = String, // ShortHand
// /* ------------------------------------------------------- */

// BlogCategory Model

const BlogCategorySchema = new mongoose.Schema({
    
       
    // _id

    name : {
        type: String,
        required: [true, 'Blog Category Name is required'],
        trim: true,
    },

}, { 
    collection: 'blogCategories',
    timestamps: true })

// Set Model
// const BlogCategory = mongoose.model('BlogCategory', BlogCategorySchema)

/* ------------------------------------------------------- */

// BlogPost Schema

const BlogPostSchema = new mongoose.Schema({

    // _id

    categoryId: {
        type: mongoose.Schema.Types.ObjectId,  // BlogCategory tablosundan bir id gelecek. ObjectId Javascript'te olmayan bir veri tipi olduğu için mongoose'un Schema kütüphanesinden alınır. // Hexadecimal Format: 5f4e7b3e3e6e4d2e3e6e4d2e
        ref: 'BlogCategory', // BlogCategory tablosuna referans verir.
        required: [true, 'Blog Category is required'],
        // unique: true // One to one ilişki yapmak için.
    },

    title: {
        type: String,
        required: [true, 'Blog Title is required'],
        trim: true,
    },

    content: {
        type: String,
        required: [true, 'Blog Content is required'],
        trim: true,
    },

    // createdAt, updatedAt otomatik eklenecek.
}, { collection: 'blogPosts', 
    timestamps: true 
})

// Set Model
// const BlogPost = mongoose.model('BlogPost', BlogPostSchema)

/* ------------------------------------------------------- */

// Export Models
// module.exports = { BlogCategory, BlogPost }
module.exports = { 
    BlogCategory: mongoose.model('BlogCategory', BlogCategorySchema), 
    BlogPost: mongoose.model('BlogPost', BlogPostSchema)

 }

 // Many to One ilişkiyi One to One ilişkiye çevirmek için many olan tarafı yani foreing key'i unique yapmak gerekmektedir.