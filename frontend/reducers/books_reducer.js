import {
  RECEIVE_ALL_BOOKS, RESERVE_BOOK
} from "../actions/book_actions";

const booksReducer = (state = {}, action) => {
  Object.freeze(state);

  let newState = Object.assign({}, state);

  switch (action.type) {
    case RECEIVE_ALL_BOOKS:
      Object.keys(action.books).forEach(bookId => {
        newState[bookId] = action.books[bookId];
      });
      return newState;
    case RESERVE_BOOK:
      return newState;
    default:
      return state;
  }
};

export default booksReducer;
