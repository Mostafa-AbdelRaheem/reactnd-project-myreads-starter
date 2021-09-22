import Shelf from "../components/shelf";
import React from "react";
import { Link } from "react-router-dom";

class Home extends React.Component {
  render() {
    return (
      <div>
        <div className="list-books">
          <div className="list-books-title">
            <h1>MyReads</h1>
          </div>
          <div className="list-books-content">
            <Shelf
              handleChange={this.props.handleChange}
              bookStatus={this.props.currentlyReading}
              heading="Currently Reading"
            />
            <Shelf
              bookStatus={this.props.wantToRead}
              handleChange={this.props.handleChange}
              heading="Want to Read"
            />
            <Shelf
              bookStatus={this.props.read}
              handleChange={this.props.handleChange}
              heading="Read"
            />
          </div>
          <div className="open-search">
            <Link to="/search">
              <button>Click Me!</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
