// GraphQL.js
const {
    GraphQLObjectType,
    GraphQLList
} = require('graphql');

// Schema
const CommentType = require('../types/comment-type');

// Root query
const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    description: "Contains a query to list comments.",
    fields: () => ({
        listOfComments: {
            type: new GraphQLList(CommentType),
            description: "List all existing comments.",
            resolve(parentValue, args, context) {
                return context.CommentsModel.findAll();
            }
        }
    })
});

module.exports = RootQuery;