import React from "react";
import RentalForm from './rental_form';

class BookIndex extends React.Component {
  constructor(props) {
    super(props);
    // this.renderRentalForm = this.renderRentalForm.bind(this);
    this.rentalFormVisible = false;
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  renderRentalLink(status) {
    if (status === "available") {
      return (
          <button 
            className="borrow-button"
            // onClick={this.showRentalForm()}
          >
            Borrow This Book
          </button>
      );
    }
  }

  showRentalForm() {
    this.rentalFormVisible = true;
  }

  renderRentalForm() {
    if (this.rentalFormVisible) {
      return <div className="book-rental-form">Book Rental Form</div>;
    }
    
  }

  render() {
    let booklist;
    if (this.props.books) {
      booklist = this.props.books;
    }

    return (
      <div className="book-index-container">
        {/* <h1>Books</h1> */}
        <ul>
          {
            Object.values(booklist).map((book) => {
            return (
              <div key={book.id}>
                <li className="book-li">
                  <h2 className="book-title">{book.title}</h2>
                  <h2 className="book-author">{book.author}</h2>
                  <h2 className="book-status">{book.rental_status}</h2>
                  {this.renderRentalLink(book.rental_status)}
                </li>
                {this.renderRentalForm()}
              </div>
            );
            })
          }
        </ul>
      </div>
    );
  }
}

export default BookIndex;
