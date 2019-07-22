import gql from "graphql-tag";

const CREATE_COMMENT = gql`
  mutation($comment: String!) {
    createComment(name: "Julio", comment: $comment) {
      id
      name
      comment
    }
  }
`;

const DELETE_COMMENTS = gql`
  mutation($id: Int!) {
    deleteComment(id: $id) {
      id
    }
  }
`;

export { CREATE_COMMENT, DELETE_COMMENTS };
