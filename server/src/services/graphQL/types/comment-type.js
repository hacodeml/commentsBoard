// GraphQL.js
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt
} = require('graphql');

// Comment object type
const CommentType = new GraphQLObjectType({
    name: 'Comments',
    fields: () => ({
        id: { type: GraphQLInt },
        name: { type: GraphQLString },
        comment: { type: GraphQLString },
    })
})

module.exports = CommentType;