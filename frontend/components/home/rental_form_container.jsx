import { connect } from "react-redux";
import React from "react";
import RentalForm from "./rental_form";
import { fetchBooks } from "../../actions/book_actions";

const msp = state => {
  return {
    books: Object.values(state.entities.books)
  };
};

const mdp = dispatch => ({
  fetchBooks: () => dispatch(fetchBooks())
});

export default connect(msp, mdp)(RentalForm);
