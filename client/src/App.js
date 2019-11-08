import React from 'react';
import './App.css';
import Home from './components/Home';
import Cities from './components/Cities';
import Login from "./components/Login";
import Account from "./components/Account";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from "react-redux";
import store from "./store";

class App extends React.Component {
  render()  {
    return  (
        <Provider store={store}>
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
        </Provider>
    );
  }
}

export default App