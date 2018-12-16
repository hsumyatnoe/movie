import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieDetail from './moviedetail'
import list  from './list'


class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Search: []
        }
    }

 

    handleFavourite = event => {
        alert('Favorite');
    }

    render() {
     
       
            return (
                <Router>

                    <React.Fragment>
                        <Route exact path="/" component={list}/>    
               
                        
                        <Route path="/:imdbID" component={MovieDetail} />   
                    </React.Fragment>
                </Router>

            );
        }
    }




export default MovieList;