import React from 'react';
import {addFav_action} from '../action';
import {connect} from 'react-redux';
const mapDispatchToProps = (dispatch) => ({
    addFav : (value) => dispatch(addFav_action(value))
});
class MovieList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Search: [],
            hits: null
           
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

    handleSubmit(event){
        event.preventDefault();
        const value = this.id;
        console.log(value);
        this.props.addToDo(value);
        //this.input.current.value = "";
    }

    onSearch = (e) => {
        e.preventDefault();
        const { value } = this.input;
        if (value === '') {
            return;
        }
        fetch(`http://www.omdbapi.com?s=${value}&apikey=b275eadc`)
            .then(response => response.json())
            .then(result => this.onSetResult(result));
            console.log(value);
    }
    onSetResult = (result) => {
        this.setState({ hits: result.hits });
       
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
                        <form className="form-inline" onSubmit={this.onSearch}>
                            <input className="form-control mr-sm-2" type="search" placeholder="Search"
                                aria-label="Search" ref={node => this.input = node} />
                            <button className="btn btn-outline-info my-2 my-sm-0"
                                id="btnSearch" type="submit">Search</button>
                        </form>
                    </div>
                    <div className="row">
                        {movie.map(list => (
                            <div class="col-md-4" key={list.imdbID}>

                                <img src={list.Poster} alt="..." class="img-thumbnail" />
                                <div class="caption center-block">Title: {list.Title}</div>
                                <div class="caption center-block">Year: {list.Year}</div>
                                <div class="caption center-block">Type: {list.Type}</div>
                                <div>
                                    <button type="button" onClick={this.handleFavourite} data-id={list.imdbID} className="btn btn-success">Favourite</button>
                                </div>

                            </div>

                        ))}
                    </div>
                   
                </React.Fragment>

            );
        }
    }
}

//export default MovieList;
export default connect(null,mapDispatchToProps)(MovieList);