const express = require('express');
const router = express.Router();
const anchorController = require('../controllers/anchors');

router.get('/anchors',  [anchorController.getAnchor]);
router.post('/anchors',  [anchorController.createAnchor]);

module.exports = router;
