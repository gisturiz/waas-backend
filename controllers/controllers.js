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
        username: req.body.username
    });

    async function createListing(client, newListing) {
        await client.db("waas").collection("users").insertOne(newListing)
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
            });
    };

    createListing(client, controller);
};

// Get user by ID
exports.getControllerById = (req, res) => {
    client.connect(err => {
        client.db("waas").collection("users").findOne(req.params.id)
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
            });
        client.close();
    })
};

// Update User by ID
exports.updateControllerById = (req, res, next) => {
    const controller = new model({
        _id: req.params.id,
        name: req.body.name,
        key: req.body.key,
        pool: req.body.pool
    });
    model.updateOne({ _id: req.params.id }, controller)
        .then(result => {
            res.status(200).json({ message: "Update successful" });
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to update user"
            });
        });
};

// Delete User by ID
exports.deleteControllerById = (req, res, next) => {
    model.deleteOne({ _id: req.params.id })
        .then(result => {
            res.status(200).json({ message: "User deleted" });
        })
        .catch(err => {
            res.status(500).json({
                message: "Failed to delete user"
            });
        });
};