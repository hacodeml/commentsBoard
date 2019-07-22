// GraphQL.js
const {
    GraphQLObjectType,
    GraphQLString,
    GraphQLInt,
    GraphQLNonNull
} = require('graphql');

// Comment type
const CommentType = require('../types/comment-type');

// Root mutation
const RootMutation = new GraphQLObjectType({
    name: 'RootMutationType',
    description: "Contains mutations to add and delete comments.",
    fields: () => ({
        createComment: {
            type: CommentType,
            description: "Creates a new comment.",
            args: {
                name: { type: new GraphQLNonNull(GraphQLString) },
                comment: { type: new GraphQLNonNull(GraphQLString) }
            },
            resolve(parentValue, args, context) {
                return context.CommentsModel.create({ name: args.name, comment: args.comment })
            }
        },
        deleteComment: {
            type: CommentType,
            description: "Delete a bad comment related to a specific id.",
            args: {
                id: { type: new GraphQLNonNull(GraphQLInt) }
            },
            resolve(parentValue, args, context) {
                return context.CommentsModel.destroy({
                    where: {
                        id: args.id
                    }
                }
                )
            }
        }
    })
});

module.exports = RootMutation;