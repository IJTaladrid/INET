import React from 'react';
import './App.css';
import logo from "./img/MYtineraryLogo.png";
import logoarrow from "./img/circled-right-2.png";
import Footer from './components/Footer.js';

class App extends React.Component {
  render()  {
    return  (
      <div className="App">
        <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
        </div>
        <br></br>
        <div className="App-body">
            <p>
            Find your perfect trip, designed by insiders who know and love their cities.
            </p>
            <br></br>
            <h3>Start browsing</h3>
            <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
            >
            <img src={logoarrow} className="App-arrow" alt="logo" />
            </a>
            <br></br>
            <p>Want to build your own MYtinerary?</p>
            <div className="row">
                <div className="col-sm-6">
                    {<button type="button" className="btn btn-outline-primary">
                        <a className="Log-in-link" 
                            href="https://reactjs.org"
                            target="_blank"
                            rel="noopener noreferrer"
                        >Log in</a>
                    </button>}
                </div>
                <div className="col-sm-6">
                    {<button type="button" className="btn btn-outline-primary">
                    <a className="Create-account-link" 
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >Create account</a>
                    </button>}
                </div>
            </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App