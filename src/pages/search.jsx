import React from "react";
import { Link } from "react-router-dom";
// import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
  render() {
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
                // value={this.props.onUpdateQuery}
                // onChange={(event) => this.props.onChange(event.target.value)}
              />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid"></ol>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
