import React from 'react';
import logohome from "./img/homeIcon.png";


class Footer extends React.Component  {
    render()  {
      return  (
        <div className="Footer">
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

  export default Footer