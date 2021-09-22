import React from "react";
import { Link } from "react-router-dom";
import Book from "../components/book";

class Search extends React.Component {
  render() {
    const myBooks = this.props.onMyBooks.map((myBook) => myBook.id);
    return (
      <div>
        <div className="search-books">
          <div className="search-books-bar">
            <Link to="/">
              <button style={{ cursor: "pointer" }} className="close-search">
                Close
              </button>
            </Link>
            <div className="search-books-input-wrapper">
              <input
                type="text"
                placeholder="Search by title or author"
                value={this.props.onUpdateQuery}
                onChange={(event) =>
                  this.props.handleUpdateQuery(event.target.value)
                }
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
              {this.props.onSearchedBooks.length > 0 &&
                this.props.onSearchedBooks.map((searchedBook) => {
                  if (myBooks.includes(searchedBook.id)) {
                    this.props.onMyBooks.forEach((element) => {
                      if (searchedBook.id === element.id) {
                        searchedBook.shelf = element.shelf;
                      }
                    });
                  } else {
                    searchedBook.shelf = "none";
                  }

                  return (
                    <li key={searchedBook.id}>
                      <Book
                        book={searchedBook}
                        handleChange={this.props.handleChange}
                      />
                    </li>
                  );
                })}
            </ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
