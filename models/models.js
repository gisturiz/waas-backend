const mongoose = require('mongoose');

const modelsSchema = new mongoose.Schema({
    name: String,
    key: String,
    pool: String
});

module.exports = mongoose.model('models', modelsSchema);