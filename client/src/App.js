import React from 'react';
import './App.css';
import Home from './components/Home';
import Cities from './components/Cities';
import Login from "./components/Login";
import Account from "./components/Account";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import store from './store';
import { Provider } from "react-redux";


class App extends React.Component {
  render()  {
    return  (
      <Provider store={store}>
          <div className="App">
              <Router>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/Account" component={Account} />
                  <Route exact path="/Login" component={Login} />
                  <Route exact path="/Cities" component={Cities} />
              </Router>
          </div>
      </Provider>
    );
  }
}

export default App;