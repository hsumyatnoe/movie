import React, { Component } from 'react';


class MovieDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            movie:[]
        }
    }

    componentDidMount() {

        fetch(`http://www.omdbapi.com?i=tt2273962&y=&plot=short&type=series&r=json&apikey=b275eadc`)
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
                           
             
                <div className="row">     afdsgg                                                                    
                        <h1>{this.state.movie.Title}</h1>
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


export default MovieDetail