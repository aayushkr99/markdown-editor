const express = require('express');
const router = express.Router();
const markdownController = require('../controllers/markdownController');

// API route for markdown processing
router.post('/markdown', markdownController.convertMarkdown);

module.exports = router;