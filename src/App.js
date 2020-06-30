import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Workspace from './components/workspace';
import Explore from './components/explore';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <>
        <Navbar />
        <main className="container">
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/workspace" component={Workspace} exact />
            <Route path="/explore" component={Explore} exact />
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
