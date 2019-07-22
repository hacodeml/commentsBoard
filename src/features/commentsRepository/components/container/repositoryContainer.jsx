import React, { useState, Fragment } from "react";

// Dependencies required to get data and delete comments
import { DELETE_COMMENTS, GET_COMMENTS } from "../../../../api";
import { useQuery, useMutation } from "react-apollo-hooks";

// Card component
import { Card } from "../../../../components";

// Styles
import { RepositoryTitle, Comments, RepositoryContainer } from "./repository.style";
import { BaseContainer } from "../../../../assets/styles";
// Component which handles all existing messages
const CommentsRepository = props => {
  const { data, error, loading } = useQuery(GET_COMMENTS);
  const [deleteComment] = useMutation(DELETE_COMMENTS, {
    refetchQueries: [{ query: GET_COMMENTS }]
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error! {error.message}</div>;
  }

  const handleDelete = e => {
    const id = e.target.parentElement.id;
    let currentID = parseInt(id);
    deleteComment({
      variables: {
        id: currentID
      }
    });
  };

  return (
    <Fragment>
      <RepositoryContainer>
        <RepositoryTitle>Comments</RepositoryTitle>
        <Comments>
          {data.listOfComments
            .map(result => (
              <Card
                id={result.id}
                key={result.id}
                handleDelete={handleDelete}
                comment={result.comment}
              />
            ))
            .reverse()}
        </Comments>
      </RepositoryContainer>
    </Fragment>
  );
};

export { CommentsRepository };
