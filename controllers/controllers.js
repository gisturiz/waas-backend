const model = require("../models/models");
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config();
const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// Create user
exports.createController = (req, res) => {
    const controller = new model({
        deviceGroupName: req.body.deviceGroupName,
        address: req.body.address,
        deviceData: req.body.deviceData,
        deviceId: req.body.deviceId,
        username: req.body.username.toLowerCase()
    });

    async function createListing(client, newListing) {
        await client.db("waas").collection("users").insertOne(newListing)
            .then(result => {
                if (result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: "Failed to create user" });
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: "Failed to fetch user"
                });
            });
    };

    createListing(client, controller);
};

// Get user by username
exports.getControllerById = (req, res) => {
    async function getListing(client, userName) {
        await client.db("waas").collection("users").findOne({ username: userName })
            .then(result => {
                if (result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: "User not found" });
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: "Failed to fetch user"
                });
            })
    };

    getListing(client, req.params.username);
};

// Update User by username 
exports.updateControllerById = (req, res) => {
    const controller = {
        deviceGroupName: req.body.deviceGroupName,
        address: req.body.address,
        deviceData: req.body.deviceData,
        deviceId: req.body.deviceId,
        username: req.body.username.toLowerCase()
    };

    async function updateListing(client, userName, updatedListing) {
        await client.db("waas").collection("users").updateOne({ username: userName }, { $set: updatedListing })
            .then(result => {
                if (result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: "Failed to update user" });
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: "Failed to fetch user"
                });
            });
    };

    updateListing(client, req.params.username, controller);
};

// Delete User by username
exports.deleteControllerById = (req, res) => {
    async function deleteListing(client, userName) {
        await client.db("waas").collection("users").deleteOne({ username: userName })
            .then(result => {
                if (result) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: "Failed to delete user" });
                }
            })
            .catch(err => {
                res.status(500).json({
                    message: "Failed to fetch user"
                });
            })
    };

    deleteListing(client, req.params.username);

};