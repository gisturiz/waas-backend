const mongoose = require('mongoose');

const modelsSchema = new mongoose.Schema({
    poolName: String,
    deviceID: String,
    deviceGroupName: String,
    address: String,
});

module.exports = mongoose.model('models', modelsSchema);