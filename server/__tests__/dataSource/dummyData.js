/* -------------------------------------------
                 DUMMY DATA SOURCE
  ---------------------------------------------     
*/

// Data source for queries
const listOfComments = [
    { id: 1, name: 'Julio', comment: "Hola" },
    { id: 2, name: 'Julio', comment: "Chau" }
]

// Data source for mutations
const createComment = { name: "Julio", comment: "Created a comment" };

const deleteComment = { id: null, name: null, comment: null };

const findAll = () => listOfComments;
const destroy = () => deleteComment;
const create = () => createComment;

module.exports = { findAll, destroy, create }