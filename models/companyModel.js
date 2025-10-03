const mongoose = require('mongoose');


const companySchema = new mongoose.Schema(
    {
        name: { type: String },
        date: { type: String },
        companyName: { type: String },
        like: { type: Number, default: 0 },
        dislike: { type: Number, default: 0 }
    }
)

module.exports = mongoose.model(
    'collection_company', companySchema);
