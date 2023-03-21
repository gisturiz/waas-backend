const mongoose = require('mongoose');

const modelsSchema = new mongoose.Schema({
    deviceGroupName: String,
    Addresses: [
        {
            address: String,
            network: String
        }
    ],
    deviceId: String,
    username: String
});

module.exports = mongoose.model('models', modelsSchema);