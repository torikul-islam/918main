import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/home';
import Workspace from './components/workspace/workspace';
import AboutUS from './components/aboutUs/AboutUs';
import ContactUs from './components/contactUs/ContactUs';
import Shop from './components/shop/Shop';
import LearnPage from './components/learnpage';
import Footer from './components/footer/footer';
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
import Modal from './components/common/modal/modal';
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import LoginNext from './components/auth/loginNext';
import BoardName from './components/onboard/boardName';
import CreateBoard from './components/onboard/createBoard';
import Onboard from './components/onboard/onboard';
import './App.css';




function App(props) {
  const [modal, setModal] = useState({ isOpen: false, name: null });
  const [openMenu, setOpenMenu] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [shoppingCard, setShoppingCard] = useState([]);


  function openModal(name) {
    setModal({ isOpen: true, name: name })
  };

  function closeModal() {
    setModal({ isOpen: false, name: null })
  };


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

  function handleOpenMenu() {
    setOpenMenu(!openMenu)
  }

  const { name, isOpen } = modal;

  return (
    <>
      <main>
        <Card isCardOpen={isCardOpen}
          clickCard={clickCard} shoppingCard={shoppingCard} itemControl={itemControl} />
        <Switch>
          <Route path="/" render={(props) => <Home {...props}
            openMenu={openMenu}
            openModal={openModal}
            handleOpenMenu={handleOpenMenu}
            shoppingCard={shoppingCard} isCardOpen={isCardOpen}
            itemControl={itemControl} clickCard={clickCard} />} exact />

          <Route path="/learn-more" render={(props) => <LearnPage {...props}
            openMenu={openMenu}
            openModal={openModal}
            handleOpenMenu={handleOpenMenu} clickCard={clickCard} />} exact />

          <Route path="/workspace" render={(props) => <Workspace />}
            openMenu={openMenu}
            openModal={openModal}
            handleOpenMenu={handleOpenMenu}
            exact />

          <Route path="/explore" render={(props) => <Home {...props}
            openMenu={openMenu}
            openModal={openModal}
            handleOpenMenu={handleOpenMenu}
            clickCard={clickCard}
            shoppingCard={shoppingCard} isCardOpen={isCardOpen} itemControl={itemControl} />} exact />

          <Route path="/AboutUS" component={AboutUS} exact />

          <Route path="/ContactUs" component={ContactUs} exact />

          <Route path="/shop-more" render={(props) => <Shop {...props}
            openMenu={openMenu}
            openModal={openModal}
            handleOpenMenu={handleOpenMenu}
            clickCard={clickCard} />} exact />


          <Route path="/account" component={Account} exact />
          <Route path="/inspired-details" render={(props) => <InspirationDetails
            {...props}
            openMenu={openMenu}
            openModal={openModal}
            handleOpenMenu={handleOpenMenu}
            clickCard={clickCard} />} exact />
          <Route path="/product-details" render={(props) => <ProductDetails {...props}
            openMenu={openMenu}
            openModal={openModal}
            handleOpenMenu={handleOpenMenu}
            addShoppingCard={addShoppingCard} />} exact />
          <Route path="/inspired-more" render={(props) => <InspiredMore {...props}
            openMenu={openMenu}
            openModal={openModal}
            handleOpenMenu={handleOpenMenu}
            clickCard={clickCard} />} exact />
          <Route path="/blog" render={(props) => <Blog {...props}
            openMenu={openMenu}
            openModal={openModal}
            handleOpenMenu={handleOpenMenu}
            clickCard={clickCard} />} exact />
          {/* <Route path="/navbar2" component={Navbar2} exact /> */}
          <Route path="/looks" render={() => <Looks {...props}
            openMenu={openMenu}
            openModal={openModal}
            handleOpenMenu={handleOpenMenu}
            clickCard={clickCard} />} exact />
          <Route path='/admin' component={Adminhome} />


          {/* unnecessary file remove it later. */}
          {/* <Route path="/signup" component={Signup} exact />
          <Route path="/login-next" component={LoginNext} exact />
          <Route path="/board-name" component={BoardName} exact />
          <Route path="/create-board" component={CreateBoard} exact />
          <Route path="/onboard-q1" component={OnboardQ1} exact />
          <Route path="/onboard-q2" component={OnboardQ2} exact />
          <Route path="/onboard-q3" component={OnboardQ3} exact /> */}


        </Switch>


      </main>
      {name === 'signup' && <Modal isOpen={isOpen} childComp={<Signup openModal={openModal} closeModal={closeModal} />} />}
      {name === 'login' && <Modal isOpen={isOpen} childComp={<Login openModal={openModal} closeModal={closeModal} />} />}
      {name === 'loginNext' && <Modal isOpen={isOpen} childComp={<LoginNext {...props} openModal={openModal} closeModal={closeModal} />} />}
      {name === 'boardName' && <Modal isOpen={isOpen} childComp={<BoardName openModal={openModal} closeModal={closeModal} />} />}
      {name === 'createBoard' && <Modal isOpen={isOpen} childComp={<CreateBoard openModal={openModal} closeModal={closeModal} />} />}
      {name === 'onboard' && <Modal isOpen={isOpen} childComp={<Onboard openModal={openModal} closeModal={closeModal} />} />}
      <Footer />
    </>
  );
}


export default App;
