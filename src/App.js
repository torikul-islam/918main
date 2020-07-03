import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Navbar from './components/navbar';
import Home from './components/home';
import Workspace from './components/workspace';
import Explore from './components/explore';
import Navbar2 from './components/navbar2';
import AboutUS from './components/about_us/AboutUs';
import ContactUs from './components/contact_us/ContactUs';
import Shop from './components/shop/Shop';
import LearnPage from './components/learnpage';
import Footer from './components/footer/footer';
import './App.css';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  render() {
    return (
      <>
        <main>
          <Switch>
            <Route path="/" component={LearnPage} exact />
            <Route path="/" component={Home} exact />
            <Route path="/workspace" component={Workspace} exact />
            <Route path="/explore" component={Explore} exact />
            <Route path="/AboutUS" component={AboutUS} exact />
            <Route path="/ContactUs" component={ContactUs} exact />
            <Route path="/Shop" component={Shop} exact />
            {/* <Route path="/navbar2" component={Navbar2} exact /> */}
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
