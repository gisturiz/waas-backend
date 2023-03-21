const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.post('/create', controller.createController);
router.get('/:id', controller.getControllerById);
router.put('/:id', controller.updateControllerById);
router.delete('/:id', controller.deleteControllerById);

module.exports = router;