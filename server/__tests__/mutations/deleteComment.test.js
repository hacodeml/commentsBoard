// GraphQL.js
const { graphql } = require('graphql');

// Schema that will be tested
const schema = require('../../src/services/graphQL');

// Mock service
const mockService = require('../dataSource/dummyData');

// Object which contains all necessary arguments for our graphql function
const commentsTestCase = {
    id: 'Test Case: Delete a comment',
    query: `
      mutation {
            deleteComment(id:1) {
              id
              comment
              name
            }
          }
    `,
    variables: {},

    context: { CommentsModel: mockService },

    // Expected result
    expected: {
        data: {
            deleteComment: 
                { id: null, name: null, comment: null }
        }
    }
};

// Test definition
describe('It should delete a comment', () => {
    const { id, query, variables, context, expected } = commentsTestCase
    test(`${id}`, async () => {
        const result = await graphql(schema, query, null, context, variables)
        return expect(result).toEqual(expected)
    })
});
