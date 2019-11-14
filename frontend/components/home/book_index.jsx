import React from "react";

class TrackIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    let booklist;
    if (this.props.books) {
      booklist = this.props.books;
    }

    return (
      <div className="book-index-container">
        <h1>Book Index Goes Here</h1>
        <ul>
          {
            Object.values(booklist).map((book) => {
            return <h2 key={book.id}>{book.title}</h2>
            })
          }
        </ul>
      </div>
    );
  }
}

export default TrackIndex;
