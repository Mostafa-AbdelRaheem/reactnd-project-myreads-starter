import React from 'react'
import * as BooksAPI from './BooksAPI'
import Home from './pages/home';
import Search from './pages/search';
import { Route, Switch } from 'react-router-dom';
import { getAll, update ,search} from './BooksAPI';
import './App.css'

class BooksApp extends React.Component {

  state = {
    books: [],
    currentlyReading: [],
    wantToRead: [],
    read: [],

    query:''

  };


  componentDidMount() {
    BooksAPI.getAll().then(books=>{
      this.setState({
        books: books,
        currentlyReading: books.filter((book) => book.shelf === "currentlyReading"),
        wantToRead: books.filter((book) => book.shelf === "wantToRead"),
        read: books.filter((book) => book.shelf === "read"),
      })
    })
    
  }

  handleChange = (book,shelf) =>{
    update(book,shelf);
    BooksAPI.getAll().then(books=>{
      this.setState({
        books: books,
        currentlyReading: books.filter((book) => book.shelf === "currentlyReading"),
        wantToRead: books.filter((book) => book.shelf === "wantToRead"),
        read: books.filter((book) => book.shelf === "read"),
      })
    })
  }


  handleUpdateQuery=(query)=>{
    this.setState(
      {query:query}
    )
  }


  render() {
    console.log("Query",this.state.query);
    return (
      <div className="app">
        <Switch>
          <Route path="/search" exact render={()=> <Search 
                                              onUpdateQuery ={this.state.query}
                                              onChange = {this.handleUpdateQuery}
                                              
                                              />}/>
          <Route path="/" render={()=> <Home 
                                        currentlyReading={this.state.currentlyReading} 
                                        wantToRead={this.state.wantToRead} 
                                        read={this.state.read}
                                        handleChange={this.handleChange}
                                        />} />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
