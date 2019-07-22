// Module dependencies
const express = require('express');
let router = express.Router();

// Controllers
const commentsController = require('../../controllers/comments');

// Register api routes
router.use('/graphql', commentsController);

module.exports = router;