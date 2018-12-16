import React, { Component } from 'react';


class MovieDetail extends Component {

    
    constructor(props) {
        super(props);
        this.state = {
            movie:[]
        }
    }

    componentDidMount() {

        fetch(`http://www.omdbapi.com?i=${this.props.match.params.imdbID}&y=&plot=short&type=series&r=json&apikey=b275eadc`)
        .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        movie: result
                    });
                },
                
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });            
               
                })    
    }

    render() {
       // const data= this.state;
        
                 return (
                  
                <React.Fragment>     
                           
                           <div className="row">
                      
                                <div class="col-md-4" >
                                Detail
                                            
                                    <img src={this.state.movie.Poster} alt="..." class="img-thumbnail" />
                                    <div class="caption center-block">Year: {this.state.movie.Year}</div>
                                    <div class="caption center-block">Runtime: {this.state.movie.Runtime}</div>
                                    <div class="caption center-block">Genre: {this.state.movie.Genre}</div>
                                    <div class="caption center-block">Actors: {this.state.movie.Actors}</div>
                                    <div class="caption center-block">Language: {this.state.movie.Language}</div>
                                    <div class="caption center-block">Type: { this.state.movie.Type}</div>
                                   

                                </div>

                           </div>
{/*              
                <div className="row">
                                                                                         
                        <h1>{this.state.movie.Title}</h1>
                </div> */}
                   
              
                            
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


export default MovieDetail