import React from 'react';
import { Link } from "react-router-dom";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Footer from './Footer.js';

class Account extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          data: [],
          status: ""
        }
      }

    handleChange = ({target}) => {
        this.setState({ [target.name]: target.value});
    };

    handleSubmit = event => {
        event.preventDefault();
        const info = this.state;
        /*const data = [...this.state.data, info];
        this.setState({
            data: data
        })
        alert('An essay was submitted: ' + this.state.data);*/
        console.log(info);
        axios
            .post('api/users', info)
            .then(res =>    {
                console.log(res);
                this.setState({ status: res.data.statusText })
            })
    };

    render () {
        if (this.state.status !== "") {
            return (<Redirect to="/Login"></Redirect>)
        } else {
            return (
                <div className="container">
                <h4 className="center">Create Account</h4>
                <form className="form center" onSubmit={this.handleSubmit}>
                    <div>
                    <label>Add Photo
                        <input 
                            type="url" 
                            name="profile_picture"
                            value={this.state.profile_picture}
                            onChange={this.handleChange}
                        />
                    </label>
                    </div>
                    <div>
                    <label>First Name
                        <input 
                            type="text" 
                            name="first_name"
                            value={this.state.first_name}
                            onChange={this.handleChange}
                        />
                    </label>
                    </div>
                    <div>
                    <label>Last Name
                        <input 
                            type="text" 
                            name="last_name"
                            value={this.state.last_name}
                            onChange={this.handleChange} 
                        />
                    </label>
                    </div>
                    <div>
                    <label>Email
                        <input 
                            type="email" 
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                    </label>
                    </div>
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
                    <label>Country
                    <select 
                        name="country" 
                        value={this.state.country} 
                        onChange={this.handleChange} 
                        className="browser-default">
                            <option>Choose...</option>
                            <option value="england">England</option>
                            <option value="france">France</option>
                            <option value="germany">Germany</option>
                            <option value="holland">Holland</option>
                            <option value="ireland">Ireland</option>
                            <option value="spain">Spain</option>
                            <option value="united_states">United States</option>
                    </select>
                    </label>
                    </div>
                    <div>
                    <label>
                    <input type="checkbox" checked={this.state.checked} />
                    <span>I agree to MYtinerary's <Link to="">Terms & Conditions</Link></span>
                    </label>
                    </div>
                    <div>
                    <input type="submit" value="OK" />
                    </div>
                </form>
                <Footer />
                </div>
                )
            }
        }
    }

export default Account