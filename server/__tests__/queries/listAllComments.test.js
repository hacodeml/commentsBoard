// GraphQL.js
const { graphql } = require('graphql');

// Schema that will be tested
const schema = require('../../src/services/graphQL');

// Mock service
const mockService = require('../dataSource/dummyData');

// Object which contains all necessary arguments for our graphql function
const commentsTestCase = {
    id: 'Test Case: List all comments',
    query: `
      query {
            listOfComments {
              id
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
            listOfComments: [
                { id: 1, name: 'Julio', comment: "Hola" },
                { id: 2, name: 'Julio', comment: "Chau" }
            ]
        }
    }
};

// Test definition
describe('It should list all existing comments', () => {
    const { id, query, variables, context, expected } = commentsTestCase
    test(`${id}`, async () => {
        const result = await graphql(schema, query, null, context, variables)
        return expect(result).toEqual(expected)
    })
});
