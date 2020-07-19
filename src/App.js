import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/home';
import Workspace from './components/workspace/workspace';
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
import Card from './components/card/card';
import './App.css';




function App(props) {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [shoppingCard, setShoppingCard] = useState([]);


  function clickCard() {
    setIsCardOpen(!isCardOpen);
  };

  function addShoppingCard(item) {
    const card = [...shoppingCard]
    item.quantity = 1;
    setShoppingCard([item, ...card]);
  }

  function itemControl(item, ops) {
    const card = [...shoppingCard];
    const index = card.findIndex(card => card.uuid === item.uuid);
    if (ops === '-' && card[index].quantity > 0) {
      card[index].quantity -= 1;
    } else if (ops === '+') {
      card[index].quantity += 1;
    }
    setShoppingCard(card)
  }


  return (
    <>
      <main>
        <Card isCardOpen={isCardOpen} clickCard={clickCard} shoppingCard={shoppingCard} itemControl={itemControl} />
        <Switch>
          <Route path="/" render={(props) => <Home {...props}
            shoppingCard={shoppingCard} isCardOpen={isCardOpen} itemControl={itemControl} clickCard={clickCard} />} exact />
          {/* <Route path="/card" component={Card} exact /> */}
          <Route path="/learn-more" render={(props) => <LearnPage {...props} clickCard={clickCard} />} exact />
          <Route path="/workspace" component={Workspace} exact />
          <Route path="/explore" render={(props) => <Home {...props}
            shoppingCard={shoppingCard} isCardOpen={isCardOpen} itemControl={itemControl} clickCard={clickCard} />} exact />
          <Route path="/AboutUS" component={AboutUS} exact />
          <Route path="/ContactUs" component={ContactUs} exact />
          <Route path="/shop-more" render={(props) => <Shop {...props} clickCard={clickCard} />} exact />
          <Route path="/signup" component={Signup} exact />
          <Route path="/login-next" component={LoginNext} exact />
          <Route path="/board-name" component={BoardName} exact />
          <Route path="/create-board" component={CreateBoard} exact />
          <Route path="/onboard-q1" component={OnboardQ1} exact />
          <Route path="/onboard-q2" component={OnboardQ2} exact />
          <Route path="/onboard-q3" component={OnboardQ3} exact />
          <Route path="/account" component={Account} exact />
          <Route path="/inspired-details" render={(props) => <InspirationDetails {...props} clickCard={clickCard} />} exact />
          <Route path="/product-details" render={(props) => <ProductDetails {...props} addShoppingCard={addShoppingCard} />} exact />
          <Route path="/inspired-more" render={(props) => <InspiredMore {...props} clickCard={clickCard} />} exact />
          <Route path="/blog" render={(props) => <Blog {...props} clickCard={clickCard} />} exact />
          {/* <Route path="/navbar2" component={Navbar2} exact /> */}
          <Route path="/looks" render={() => <Looks {...props} clickCard={clickCard} />} exact />
          <Route path='/admin' component={Adminhome} />
        </Switch>
      </main>
      <Footer />
    </>
  );
}


export default App;
