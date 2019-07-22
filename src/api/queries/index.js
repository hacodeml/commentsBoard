import gql from "graphql-tag";

const GET_COMMENTS = gql`
  {
    listOfComments {
      id
      comment
      name
    }
  }
`;

export {
  GET_COMMENTS
}