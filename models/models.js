const mongoose = require('mongoose');

const modelsSchema = new mongoose.Schema({
    deviceGroupName: String,
    address: String,
    deviceData: String,
    deviceId: String,
    username: String
  });

module.exports = mongoose.model('models', modelsSchema);