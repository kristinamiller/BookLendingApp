import React from "react";
import RentalFormContainer from './rental_form_container';
import { Link } from "react-router-dom";


class BookIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedBook: 0
    }

  
  }

  componentDidMount() {
    this.props.fetchBooks();
  }


  selectBook(id) {
    this.setState({selectedBook: id})
  }

  renderRentalLink(status, bookId) {
    if (status === "available") {
      return (
          // <Link 
          //   className="borrow-button"
          //   to={`/books/${bookId}`}
          // >
          //   Borrow This Book
          // </Link>

        <button
          onClick={() => this.selectBook(bookId)}
        >
          Borrow This Book
        </button>

      );
    }
  }

  // showRentalForm() {
  //   this.rentalFormVisible = true;
  // }

  renderRentalForm(id) {
    if (id === this.state.selectedBook) {
      return <div className="book-rental-form">Book Rental Form</div>;
    }
    // return <div className="book-rental-form">Book Rental Form</div>;
  }

  render() {
    let booklist;
    if (this.props.books) {
      booklist = this.props.books;
    }

    return (
      <div className="main-section">
        <div className="book-index-container">
          {/* <h1>Books</h1> */}
          <ul>
            {Object.values(booklist).map(book => {
              return (
                <div key={book.id}>
                  <li className="book-li">
                    <h2 className="book-title">{book.title}</h2>
                    <h2 className="book-author">{book.author}</h2>
                    <h2 className="book-status">{book.rental_status}</h2>
                    {this.renderRentalLink(book.rental_status, book.id)}
                  </li>
                  {this.renderRentalForm(book.id)}
                </div>
              );
            })}
          </ul>
        </div>
        <div className="rental-form-section">
          <RentalFormContainer />
        </div>
      </div>
    );
  }
}

export default BookIndex;
