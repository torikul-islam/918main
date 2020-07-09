import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
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
import Signup from './components/auth/signup';
import LoginNext from './components/auth/loginNext';
import BoardName from './components/onboard/boardName';
import CreateBoard from './components/onboard/createBoard';
import OnboardQ1 from './components/onboard/onboardQ1';
import OnboardQ2 from './components/onboard/onboardQ2';
import OnboardQ3 from './components/onboard/onboardQ3';
import Inspired from './components/inspired/inspired';
import Account from './components/account/account';
import InspirationDetails from './components/InspirationDetails/inspirationDetails'; 
import Blog from './components/blog/blog'




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
            <Route path="/" component={Home} exact />
            <Route path="/LearnPage" component={LearnPage} exact />
            <Route path="/workspace" component={Workspace} exact />
            <Route path="/explore" component={Explore} exact />
            <Route path="/AboutUS" component={AboutUS} exact />
            <Route path="/ContactUs" component={ContactUs} exact />
            <Route path="/Shop" component={Shop} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/login-next" component={LoginNext} exact />
            <Route path="/board-name" component={BoardName} exact />
            <Route path="/create-board" component={CreateBoard} exact />
            <Route path="/onboard-q1" component={OnboardQ1} exact />
            <Route path="/onboard-q2" component={OnboardQ2} exact />
            <Route path="/onboard-q3" component={OnboardQ3} exact />
            <Route path="/inspired" component={Inspired} exact />
            <Route path="/account" component={Account} exact />
            <Route path="/inspirationDetails" component={InspirationDetails} exact />
            <Route path="/blog" component={Blog} exact />
            {/* <Route path="/navbar2" component={Navbar2} exact /> */}
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
