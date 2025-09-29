const mongoose = require('mongoose');

const connection = () => {
    mongoose.connect('mongodb://localhost:27017/Company', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
        .then(() => {
            console.log('Connected to MongoDB');
        })
        .catch((error) => {
            console.error('Error connecting to MongoDB:', error);
        });
} 

module.exports  = connection 