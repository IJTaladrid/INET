import React from "react";
import logo from "./img/MYtineraryLogo.png";

class Header extends React.Component {
  render()  {
    return  (
      <div>
        <img src={logo} className="App-logo" alt="logo" />
      </div>
    )
  }
}

export default Header