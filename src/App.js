// App.js

import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Create from "./components/Create";
import Index from "./components/Index";

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="container">
          <h2>Welcome to React Express Tutorial</h2>
          <ul>
            <button>
              <li>
                <Link to={"/create"}>Add Item</Link>
              </li>
            </button>
            <button>
              <li>
                <Link to={"/index"}>Cart List</Link>
              </li>
            </button>
          </ul>
          <hr />
          <Switch>
            <Route exact path="/home" component={Create} />
            <Route path="/create" component={Create} />
            <Route path="/index" component={Index} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
