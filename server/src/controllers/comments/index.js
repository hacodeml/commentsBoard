// Module dependencies
const express = require('express');
const graphqlHTTP = require('express-graphql');
let router = express.Router();

// Models (Data source)
const CommentsModel = require('../../models/sequelize');

// Services
const commentsService = require('../../services/graphQL');

// Routes
router.use('/', graphqlHTTP({
    schema: commentsService,
    graphiql: true,
    context: { CommentsModel }
}));

module.exports = router;