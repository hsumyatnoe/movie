import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import MovieList from '../container/movielist';



class Header extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand" href="#">Movie Project</a>
                       <div className="collapse navbar-collapse">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-link active">Movies</Link>
                               
                            </div>
                        </div>
                    </nav>
                    <Route exact path="/" component={MovieList} />
                   
                </div>
            </Router>
        );
    }
}

export default Header;