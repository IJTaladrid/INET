import React from 'react';
import { Link } from 'react-router-dom';
import logo from "./img/MYtineraryLogo.png";
import logoarrow from "./img/circled-right-2.png";
import Footer from './Footer.js';

class Home extends React.Component {
    render ()   {
        return  (

                <div className="container">
                <div className="Home">

                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo" />
                    </div>
                    <div className="App-body">
                        <p>
                        Find your perfect trip, designed by insiders who know and love their cities.
                        </p>

                        <h3>Start browsing</h3>
                        <Link to='/Cities'>
                            <img src={logoarrow} className="App-arrow" alt="logo" />
                        </Link>
                        <p>Want to build your own MYtinerary?</p>
                        <div className="row">
                            <div className="col-sm-6">
                                {<button type="button" className="btn btn-outline-primary">
                                    <Link to='/Login'className="Log-in-link">
                                    Log in</Link>                               
                                </button>}
                            </div>
                            <div className="col-sm-6">
                                {<button type="button" className="btn btn-outline-primary">
                                    <Link to="/Account" className="Create-account-link"> 
                                    Create account</Link>
                                </button>}
                            </div>
                        </div>
                    </div>
                    <Footer />
                </div>
                </div>
        )
    }
}

export default Home