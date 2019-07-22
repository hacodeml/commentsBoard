// GraphQL.js
const { graphql } = require('graphql');

// Schema that will be tested
const schema = require('../../src/services/graphQL');

// Mock service
const mockService = require('../dataSource/dummyData');

// Object which contains all necessary arguments for our graphql function
const commentsTestCase = {
    id: 'Test Case: Create a comment',
    query: `
      mutation {
            createComment(name: "Julio", comment: "Created a comment") {
                name
                comment
            }
          }
    `,
    variables: {},

    context: { CommentsModel: mockService },

    // Expected result
    expected: {
        data: {
            createComment: 
                { name: "Julio", comment: "Created a comment" }
        }
    }
};

// Test definition
describe('It should create a comment', () => {
    const { id, query, variables, context, expected } = commentsTestCase
    test(`${id}`, async () => {
        const result = await graphql(schema, query, null, context, variables)
        return expect(result).toEqual(expected)
    })
});
