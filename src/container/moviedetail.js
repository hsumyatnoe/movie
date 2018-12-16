import React, { Component } from 'react';


class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            Search: []
        }
    }

    componentDidMount() {

        fetch(`http://www.omdbapi.com?i=tt2273962&y=&plot=short&type=series&r=json&apikey=b275eadc`)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        movie: result,
                    });
                    console.log(movie);
                },
                
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, movie } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (

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
                        <div class="col-md-4">

                         
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
                
            );
        }
    }



    // render(){
    //     console.log(this.props.match.params.imdbID);
    //     return (
    //       <div>
    //         <h3>{this.props.match.params.imdbID}</h3>
    //       </div>
    //     );
    //   }
}

export default MovieDetail