import * as BooksUtil from "../utils/books_util";

export const RECEIVE_ALL_BOOKS = "RECEIVE_ALL_BOOKS";

const receiveAllBooks = books => ({
  type: RECEIVE_ALL_BOOKS,
  books
});


export const fetchBooks = () => dispatch =>
  BooksUtil.fetchBooks().then(books => dispatch(receiveAllBooks(books)));