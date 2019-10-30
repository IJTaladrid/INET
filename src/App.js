import React from 'react';
import './App.css';
import Home from './components/Home';
import Cities from './components/Cities';
import Login from "./components/Login";
import Account from "./components/Account";
import { BrowserRouter as Router, Route } from 'react-router-dom';

class App extends React.Component {
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