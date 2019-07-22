import React, { useState, useEffect, Fragment } from "react";
import { CommentsRepository } from "../../../commentsRepository";

// Dependencies required to create a comment
import { CREATE_COMMENT, GET_COMMENTS } from "../../../../api";
import { useMutation } from "react-apollo-hooks";

// Styled components
import { SubmitButton, Form, TextArea } from "../../../../ui";

function CommentsGenerator() {
  const [newComment, setNewComment] = useState("");
  const [sendComment] = useMutation(CREATE_COMMENT, {
    variables: {
      comment: newComment
    },
    refetchQueries: [{ query: GET_COMMENTS }]
  });

  const handleChange = e => {
    setNewComment(e.target.value);
  };

  const handleSubmit = e => {
    if (e) e.preventDefault();
    sendComment();
    setNewComment("");
  };

  const handleTextarea = e => {
    if(e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  return (
    <Fragment>
      <Form onSubmit={handleSubmit}>
        <TextArea
          value={newComment}
          onKeyDown={handleTextarea}
          onChange={handleChange}
          placeholder="Enter your comment here!.&#10;>Please use Shift+Enter to add a new line. &#10;>To submit a comment, press Enter key or click the 'Submit' Bottom"
          type="text"
          name="newComment"
          required
        />
        <SubmitButton type="submit">
          Submit
        </SubmitButton>
      </Form>
      <CommentsRepository />
    </Fragment>
  );
}

export { CommentsGenerator };
