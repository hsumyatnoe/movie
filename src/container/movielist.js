import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieDetail from './moviedetail'


class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Search: []
        }
    }

    componentDidMount() {

        fetch(`http://www.omdbapi.com?s=spider man&apikey=b275eadc`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        movie: result.Search
                    });
                },
                
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    handleFavourite = event => {
        alert('Favorite');
    }

    render() {
        const { error, isLoaded, movie } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <Router>

                <React.Fragment>              
                <div className="float-right">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search"
                           aria-label="Search"/>
                    <button className="btn btn-outline-info my-2 my-sm-0"id="btnSearch" type="submit">Search</button>
                </form>
            </div>
                <div className="row">
                    {movie.map(list => (
                        <div class="col-md-4" key={list.imdbID}>

                                    {/* <Link to="/imdbID">{list.imdbID}</Link> */}
                                      <Link
                    to={"/"+list.imdbID}
                    className="list-group-item"
                    key={list.imdbID}>
                    {list.imdbID}
                </Link>
                                    {/* <Link to="/netflix">Netflix</Link>
                                    <Link to="/zillow-group">Zillow Group</Link> */}


  <Route path="/:imdbID" component={MovieDetail} />
{/*
   It's possible to use regular expressions to control what param values should be matched.
      * "/order/asc"  - matched
      * "/order/desc" - matched
      * "/order/foo"  - not matched
*/}
{/* <Route
  path="/order/:direction(asc|desc)"
  component={ComponentWithRegex}
/> */}


                {/* <Link
                    to={"/moviedetail/"+list.imdbID}
                    className="list-group-item"
                    key={list.imdbID}>
                    {list.imdbID}
                </Link> */}
                        {/* <Route path="imdbID" component={MovieDetail}/> */}


                            <img src={list.Poster} alt="..." class="img-thumbnail" />
                            <div class="caption center-block">Title: {list.Title}</div>
                            <div class="caption center-block">Year: {list.Year}</div>
                            <div class="caption center-block">Type: {list.Type}</div>
                            <div>
                                <button type="button" onClick={this.handleFavourite} className="btn btn-success">Favourite</button>
                            </div>
                                                     
                        </div>

                    ) )}
                </div>
                            
                </React.Fragment>  
                </Router>   
                
            );
        }
    }
}

// function Child({ match }) {
// console.log(match);
//     return (
       
//       <div>
//         <h3>ID: {match.params.imdbID}</h3>
//       </div>
//     );
//   }

//   class Child extends Component {
//     render(){
//         return (<h1>{match.params.imdbID}</h1>);
//     }
// }
  
//   function ComponentWithRegex({ match }) {
//     return (
//       <div>
//         <h3>Only asc/desc are allowed: {match.params.direction}</h3>
//       </div>
//     );
//   }

export default MovieList;