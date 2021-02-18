import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import './App.css';
import Home from './Home.js';
import Header from './Header.js';
import Search from './Search.js';
import Detail from './Detail.js';


export default class App extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Header />
          <Switch>
            <Route
              path="/"
              exact
              render={(routerProps) => <Home {...routerProps} />}
            />
            <Route
              path="/search"
              exact
              render={(routerProps) => <Search {...routerProps} />}
            />
            <Route
              path="/search/:specific"
              exact
              render={(routerProps) => <Detail {...routerProps} />}
            />
          </Switch>
        </Router>
        <footer>
        </footer>
      </div>

    );
  }
}
