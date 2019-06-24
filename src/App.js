import React, { Component } from 'react';
import ls from 'local-storage'
import Lists from './lists/lists'
// Import Materialize
import 'materialize-css/dist/css/materialize.min.css';
import M from "materialize-css";


const API = 'http://www.omdbapi.com/?';
const KEY = '&apikey=4e96eab0';
const MOVIE = 's='
const INFO = 'i=';
const PLOT = '&plot'
const INIT = [
  {
      "Title": "Batman Begins",
      "Year": "2005",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BZmUwNGU2ZmItMmRiNC00MjhlLTg5YWUtODMyNzkxODYzMmZlXkEyXkFqcGdeQXVyNTIzOTk5ODM@._V1_SX300.jpg"
  },
  {
      "Title": "Batman v Superman: Dawn of Justice",
      "Year": "2016",
      "imdbID": "tt2975590",
      "Type": "movie",
      "Poster": "https://m.media-amazon.com/images/M/MV5BYThjYzcyYzItNTVjNy00NDk0LTgwMWQtYjMwNmNlNWJhMzMyXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg"
  }]

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      resultList: ls.get('likeList') || INIT,
      likeList: ls.get('likeList', INIT) || INIT,
      movieInfo: ""
    };
    // preserve the initial state in a new object
    this.baseState = this.state.inputVal;
  }
  searchValue = (e) => {
    fetch(API + MOVIE + e.target.value + KEY)
      .then(response => response.json())
      .then(data => this.setState({ resultList: data.Search }));
  }
  searchInfo = (e) => {
    fetch(API + INFO + e + PLOT + KEY)
    .then(response => response.json())
    .then( data => {
      this.setState({ movieInfo: data })
      // console.log(data)
    })
  }

  handleSubmit = (e) => {
    e.preventDefault(); 
    this.setState({
      content: null
      })
  }

  componentDidMount() {
    // Auto initialize all the things!
    M.AutoInit();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} onClick={this.resetForm} >
          <input type="text" placeholder="Search.." onChange={this.searchValue}  />
        </form>

        <Lists lists={this.state} searchInfo={this.searchInfo}/>

      </div>
    );
  }
}

export default App;