const express = require('express');
const router = express.Router();
const controller = require('../controllers/controllers');

router.post('/create', controller.createController);
router.get('/:username', controller.getControllerById);
router.put('/:username', controller.updateControllerById);
router.delete('/:username', controller.deleteControllerById);

module.exports = router;