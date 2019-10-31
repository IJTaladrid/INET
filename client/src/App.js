import React from 'react';
import './App.css';
import Home from './components/Home';
import Cities from './components/Cities';
import Login from "./components/Login";
import Account from "./components/Account";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };
  
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  
  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    
    return body;
  };
  
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/api/world', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    
    this.setState({ responseToPost: body });
  };
  
  render()  {
    return  (
        <div className="App">
            <Router>
                <Route exact path="/" component={Home}>
                    <Home />
                </Route>
                    <Route exact path="/Account" component={Account} />
                    <Route exact path="/Login" component={Login} />
                    <Route exact path="/Cities" component={Cities} />
            </Router>
        </div>
    );
  }
}

export default App