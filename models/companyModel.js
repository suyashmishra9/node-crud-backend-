const mongoose = require('mongoose');


const companySchema = new mongoose.Schema(
    {
        name: { type: String },
        date: { type: String },
        companyName: { type: String }
    }
)

module.exports = mongoose.model(
    'collection_company', companySchema);
