import React from "react";


class RentalForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      genre_id: 10,
      description: "",
      artist_id: this.props.currentUser.id
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }

  componentDidMount() {
    this.props.fetchBooks();
  }

  handleInput(field) {
    return e => this.setState({ [field]: e.currentTarget.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("track[title]", this.state.title);
    formData.append("track[genre_id]", this.state.genre_id);
    formData.append("track[artist_id]", this.state.artist_id);
    formData.append("track[description]", this.state.description);
    if (this.state.photoFile) {
      formData.append("track[photo]", this.state.photoFile);
    }
    if (this.state.audioFile) {
      formData.append("track[audio]", this.state.audioFile);
    }

    this.props
      .action(formData)
      .then(data =>
        this.props.history.push(`/${this.props.currentUser.id}/tracks`)
      );
  }

  handleCancel(e) {
    this.props.history.push(`/${this.props.currentUser.id}/tracks`);
  }

  renderErrors() {
    return (
      <ul>
        {this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>{error}</li>
        ))}
      </ul>
    );
  }

  render() {
     let booklist;
     if (this.props.books) {
       booklist = this.props.books;
     }

    return (
      <div className="rental-form-container">
        <form className="rental-form" onSubmit={this.handleSubmit}>
          <h1 className="rental-header">Song info</h1>
          <h3 className="rental-errors">{this.renderErrors()}</h3>
          <div className="rental-left-inputs-right">
            <div className="rental-files">
              <label className="rental-label">
                rental Track
                <input type="file" onChange={this.handleAudio} />
              </label>
            </div>
            <div className="form-input-fields">
              <div className="rental-label"></div>
              <label className="rental-label">
                Title*
                <input
                  type="text"
                  value={this.state.title}
                  placeholder="Name your track"
                  onChange={this.handleInput("title")}
                  className="rental-input"
                />
              </label>
              <div className="rental-label">
                <label className="rental-label">
                  Choose Book
                  <select className="book-dropdown" defaultValue="Select Book">
                    {
                    Object.values(booklist).map(book => {
                      return (
                        <option
                          className="book-dropdown-item"
                          value={book.id}
                          key={book.id}
                          onChange={this.handleInput("book")}
                        >
                          {book.title}
                        </option>
                      );
                    })}
                  </select>
                </label>
              </div>

              <div className="rental-buttons">
                <button onClick={this.handleCancel} className="rental-cancel">
                  Cancel
                </button>
                <input type="submit" value="Save" className="rental-submit" />
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default RentalForm;
