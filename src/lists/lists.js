import React, { Component } from 'react';
import ls from 'local-storage'
import './lists.css';

class Lists extends Component {

  filtered(array, e, arr){
    if(!arr){
      return array.filter( v => {
        return v.imdbID === e.imdbID 
      })
    } else {
      return array.filter( v => {
        return v.imdbID !== e.imdbID 
      })
    }
  }

  handleClick(e) {
    let likeList = ls.get('likeList') || [];

    const fList = this.filtered(likeList, e, false);

    if(fList.length !== 1){
      likeList.push(e)
      ls.set('likeList', likeList)
      this.setState( likeList )
    } else {
      likeList = this.filtered(likeList, e, true);
      ls.set('likeList', likeList)
      this.setState( likeList )
    }

  }

  render(){
    const lists = this.props.lists;
    let likeList = ls.get('likeList') || [];
      return (
          <div className="Lists">
            <h4>Result</h4>
            <ul className="collapsible">
                {
                  (lists.resultList !== undefined ) 
                  ? 
                  lists.resultList.map(r =>{
                    // @tt return true or false if imdbID is finded on local storage
                    // const tt = likeList.filter( movie => {
                    //   return movie.imdbID !== r.imdbID
                    // }).length

                    // let favorite = (tt) ? "favorite":"favorite_border";
    
                    return(
                      <li key={r.imdbID} >
                        <div onClick= { () =>
                        this.props.searchInfo(r.imdbID)
                    }  className="movies-list collapsible-header">
                          <i className="material-icons " onClick={ () => this.handleClick(r)  } >favorite_border</i>
                          <div><img src={r.Poster} alt="poster" className="poster" /></div>
                          <div>{r.Title}</div>
                          <div>{r.Year}</div>
                        </div>
                        <div className="collapsible-body">
                          <div><strong>Awards: </strong>{ lists.movieInfo.Awards }</div>
                          <div><strong>BoxOffice: </strong>{ lists.movieInfo.BoxOffice }</div>
                          <div><strong>Country: </strong>{ lists.movieInfo.Country }</div>
                          <div><strong>Director: </strong>{ lists.movieInfo.Director }</div>
                          <div><strong>Genre: </strong>{ lists.movieInfo.Genre }</div>
                          <div><strong>Plot: </strong>{ lists.movieInfo.Plot }</div>
                        </div>
                      </li>
                    )
                  }) 
                  : 
                  likeList.map(r =>{
                    // @tt return true or false if imdbID is finded on local storage
                    // const tt = likeList.filter( movie => {
                    //   return movie.imdbID !== r.imdbID
                    // }).length

                    // let favorite = (tt) ? "favorite":"favorite_border";
    
                    return(
                      <li key={r.imdbID} >
                        <div onClick= { () =>
                        this.props.searchInfo(r.imdbID)
                    }  className="movies-list collapsible-header">
                          <i className="material-icons " onClick={ () => this.handleClick(r)  } >favorite</i>
                          <div><img src={r.Poster} alt="poster" className="poster" /></div>
                          <div>{r.Title}</div>
                          <div>{r.Year}</div>
                        </div>
                        <div className="collapsible-body">
                          <div><strong>Awards: </strong>{ lists.movieInfo.Awards }</div>
                          <div><strong>BoxOffice: </strong>{ lists.movieInfo.BoxOffice }</div>
                          <div><strong>Country: </strong>{ lists.movieInfo.Country }</div>
                          <div><strong>Director: </strong>{ lists.movieInfo.Director }</div>
                          <div><strong>Genre: </strong>{ lists.movieInfo.Genre }</div>
                          <div><strong>Plot: </strong>{ lists.movieInfo.Plot }</div>
                        </div>
                      </li>
                    )
                  }) 
                }
            </ul>
          </div>
      );
  }
}

export default Lists;
