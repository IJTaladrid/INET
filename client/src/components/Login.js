import React from 'react';
import "./Login.css";
import { Link } from 'react-router-dom';
import Footer from './Footer.js';

class Login extends React.Component {
    constructor(props)  {
        super(props);
        this.state = {
            data: []
        };
    }

    handleChange = ({ target }) => {
        this.setState({ [target.name]: target.value });
    };
    
    handleSubmit = event => {
        event.preventDefault();
        const info = this.state;
        console.log(info);
    };

    componentDidMount=()=>{
        (function() {
          var e = document.createElement("script");
          e.type = "text/javascript";
          e.async = true;
          e.src = "https://apis.google.com/js/client:platform.js?onload=gPOnLoad";
          var t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t)
      })();
    }

    render(){
        return (
            <div className="container center">
                <h4>Login</h4>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div>
                        <label>Username
                            <input 
                                type="text" 
                                name="username"
                                value={this.state.username}
                                onChange={this.handleChange} 
                            />
                        </label>
                    </div>
                    <div>
                        <label>Password
                            <input 
                                type="password" 
                                name="password"
                                value={this.state.password}
                                onChange={this.handleChange} 
                            />
                        </label>
                    </div>
                    <div>
                        <label>
                            <input type="checkbox" checked={this.state.checked} />
                            <span>Remember Me</span>
                        </label>
                    </div>
                    <div>
                        <input type="submit" value="OK" />
                    </div>
                </form>
                <div>
                    <p>Don't have a MYtinerary account yet? You should create one!
                        It's totally free and only takes a minute.
                    </p>
                </div>
                <div>
                    {<button type="button" className="btn btn-outline-primary">
                        <Link to="/Account" className="Create-account-link"> 
                        Create account</Link>
                    </button>}
                </div>
                <div className="g-signin2" data-onsuccess="onSignIn"></div>
            <Footer />
            </div>
        )
    }
} 

export default Login