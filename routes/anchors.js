const express = require('express');
const router = express.Router();
const anchorController = require('../controllers/anchors');

router.get('/anchors',  [anchorController.getAllAnchor]);
router.get('/anchors/:id',  [anchorController.getAnchor]);
router.post('/anchors',  [anchorController.createAnchor]);
router.delete('/anchors',  [anchorController.deleteAllAnchors]);
router.delete('/anchors/:id',  [anchorController.deleteAnchor]);

module.exports = router;
