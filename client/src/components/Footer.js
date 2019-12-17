import React from 'react';
import logohome from "./img/homeIcon.png";

class Footer extends React.Component  {
    render()  {
      return  (
        <div>
          <nav className="nav-wrapper white">
             <a href="/" className="brand-logo center"><img src={logohome} className="App-home" alt="logo" /></a>
          </nav>
        </div>
      );
    }
  }

  export default Footer