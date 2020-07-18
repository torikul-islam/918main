import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/home';
import Workspace from './components/workspace';
import AboutUS from './components/aboutUs/AboutUs';
import ContactUs from './components/contactUs/ContactUs';
import Shop from './components/shop/Shop';
import LearnPage from './components/learnpage';
import Footer from './components/footer/footer';
import Signup from './components/auth/signup';
import LoginNext from './components/auth/loginNext';
import BoardName from './components/onboard/boardName';
import CreateBoard from './components/onboard/createBoard';
import OnboardQ1 from './components/onboard/onboardQ1';
import OnboardQ2 from './components/onboard/onboardQ2';
import OnboardQ3 from './components/onboard/onboardQ3';
import InspiredMore from './components/inspired/inspiredMore';
import Account from './components/account/account';
import Blog from './components/blog/blog';
import InspirationDetails from './components/InspirationDetails/inspirationDetails';
import Looks from './components/looks/looks'
import Adminhome from './components/admin/adminhome';
import ProductDetails from './components/productDetails/productDetails';
import './App.css';
import Card from './components/card/card';




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
            <Route path="/card" component={Card} exact />
            <Route path="/Learn-more" component={LearnPage} exact />
            <Route path="/workspace" component={Workspace} exact />
            <Route path="/explore" component={Home} exact />
            <Route path="/AboutUS" component={AboutUS} exact />
            <Route path="/ContactUs" component={ContactUs} exact />
            <Route path="/shop-more" component={Shop} exact />
            <Route path="/signup" component={Signup} exact />
            <Route path="/login-next" component={LoginNext} exact />
            <Route path="/board-name" component={BoardName} exact />
            <Route path="/create-board" component={CreateBoard} exact />
            <Route path="/onboard-q1" component={OnboardQ1} exact />
            <Route path="/onboard-q2" component={OnboardQ2} exact />
            <Route path="/onboard-q3" component={OnboardQ3} exact />
            <Route path="/account" component={Account} exact />
            <Route path="/inspired-details" component={InspirationDetails} exact />
            <Route path="/product-details" component={ProductDetails} exact />
            <Route path="/inspired-more" component={InspiredMore} exact />
            <Route path="/blog" component={Blog} exact />
            {/* <Route path="/navbar2" component={Navbar2} exact /> */}
            <Route path="/looks" component={Looks} exact />
            <Route path='/admin' component={Adminhome} />
          </Switch>
        </main>
        <Footer />
      </>
    );
  }
}

export default App;
