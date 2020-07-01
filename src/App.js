import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Workspace from './components/workspace';
import Explore from './components/explore';
import Navbar2 from './components/navbar2';
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
        <main>
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/workspace" component={Workspace} exact />
            <Route path="/explore" component={Explore} exact />
            {/* <Route path="/navbar2" component={Navbar2} exact /> */}
          </Switch>
        </main>
      </>
    );
  }
}

export default App;
