import React from "react";
import Book from "./book";

class Shelf extends React.Component {
  render() {
    return (
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.heading}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {this.props.bookStatus.map((book) => (
                <li key={book.id}>
                  <Book book={book} handleChange={this.props.handleChange} />
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Shelf;
