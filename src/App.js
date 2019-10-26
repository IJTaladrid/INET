import React from 'react';
import logo from "./MYtineraryLogo.png";
import logohome from "./homeIcon.png";
import logoarrow from "./circled-right-2.png";
import './App.css';

class Footer extends React.Component  {
  render()  {
    return  (
      <div className="App-footer">
      <a
        className="App-link-home"
        href="https://index.html"
        rel="noopener noreferrer"
      >
        <img src={logohome} className="App-home" alt="logo" />
      </a>
    </div>
    );
  }
}

export default class App extends React.Component {
  render()  {
    return  (
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
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