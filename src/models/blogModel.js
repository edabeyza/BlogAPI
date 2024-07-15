"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- *

// Mongoose

const mongoose = require("mongoose")

// const ModelName = new mongoose.Schema({ ...fields }, { ...settings} )

const ModelSchema = new mongoose.Schema({

    // Primary Key (_id) tanımlamaya gerek yoktur. Mongoose otomatik olarak tanımlar.
    // _id: Number

    fieldName: {
        type: String,
        default: null, // Veri gelmediğinde yazılacak veri.
        trim: true, // Başındaki ve sonundaki boşlukları kırpar.
        unique: true, // Benzersiz olmasını sağlar.
        index: true, // Aramalarda hızlı erişim sağlar. Her şeye verilmez, verilirse veritabanı şişer. Performans düşer.
        // required: true, // Veri gönderimi zorunlu mu?
        required: [true, 'Bu data mutlaka gönderilmeli'], // [Veri gönderimi zorunlu mu?, HATA MESAJI]
        // enum: [1, 2, 3] // Sadece belirtilen değerlerden biri olabilir.
        enum: [[1, 2, 3], 'Bu değerlerden bir olmalıdır' ], // Sadece belirtilen değerlerden biri olabilir.
        // validate: (data) => true, // Gelen data formatının doğruluğunu kontrol eder.
        validate: [
            (data) => {return true}, 
            'Data formatı uygun değil'
        ],// Gelen data formatının doğruluğunu kontrol eder.
        get: (data) => data, // Bu veriye erişilmek istendiğinde otomatik çalışacak fonksiyon.
        set: (data) => data, // Bu field'a veri kaydedilmek istendiğinde otomatik çalışacak fonksiyon.
    }



}, { 
    collection: 'tableName', // Tablo ismi
    timestamps: true // Oluşturulma(createdAt) ve güncelleme(updatedAt) tarihlerini otomatik olarak ekler.
 })

 // Modele çevirmek için:
const ModelName = mongoose.model('ModelName', ModelSchema)
/* ------------------------------------------------------- */

// BlogCategory Model




/* ------------------------------------------------------- */