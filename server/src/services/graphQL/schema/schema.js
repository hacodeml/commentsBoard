// GraphQL.js
const {
  GraphQLSchema
} = require('graphql');

// Queries and mutations
const query = require('../query/rootQuery');
const mutation = require('../mutations/rootMutation');

// Creating GraphQL schema
module.exports = new GraphQLSchema({
  query,
  mutation
});

