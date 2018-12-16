

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
class list extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Search: [],
            movie:[]
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
                   
                    })    
        }
    
    render(){
        const movie=this.state.movie;
        console.log(movie);
        return(
            
            <React.Fragment>
                   <div className="float-right">
                            <form className="form-inline">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                    aria-label="Search" />
                                <button className="btn btn-outline-info my-2 my-sm-0" id="btnSearch" type="submit">Search</button>
                            </form>
                        </div>
                        <div className="row">
                        {movie.map(list => (
                                <div class="col-md-4" key={list.imdbID}>


                                    <Link
                                        to={"/" + list.imdbID}
                                        className="list-group-item"
                                        key={list.imdbID}>
                                        {list.Title}
                                    </Link>
                                 

                                            
                                    <img src={list.Poster} alt="..." class="img-thumbnail" />
                                    <div class="caption center-block">Year: {list.Year}</div>
                                    <div class="caption center-block">Type: {list.Type}</div>
                                    <div>
                                        <button type="button" onClick={this.handleFavourite} className="btn btn-success">Favourite</button>
                                    </div>

                                </div>

                            ))}</div>
            </React.Fragment>
        );
    }
    
}

export default list;