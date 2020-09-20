import React, { useState, useEffect } from 'react';
import { Route, Switch } from "react-router-dom";
import Home from './components/home';
import Workspace from './components/workspace/workspace';
import AboutUS from './components/aboutUs/AboutUs';
import ContactUs from './components/contactUs/ContactUs';
import Shop from './components/shop/Shop';
import LearnPage from './components/learnPage';
import Footer from './components/footer/footer';
import InspiredMore from './components/inspired/inspiredMore';
import Account from './components/account/account';
import Blog from './components/blog/blog';
import InspirationDetails from './components/InspirationDetails/inspirationDetails';
import Looks from './components/looks/looks';
import ProductDetails from './components/productDetails/productDetails';
import Card from './components/card/card';
import Modal from './components/common/modal/modal';
import Signup from './components/auth/signup';
import Login from './components/auth/login';
import LoginNext from './components/auth/loginNext';
import BoardName from './components/onboard/boardName';
import CreateBoard from './components/onboard/createBoard';
import Onboard from './components/onboard/onboard';
import { createProductCart, getUserProductCart } from './services/cartService';
import CartContext from './context/cartContext';
import './App.css';
import NavbarContext from './context/navbarContext';




function App(props) {
  const token = localStorage.getItem('token')
  const [modal, setModal] = useState({ isOpen: false, name: null, isMoodBoard: false });
  const [openMenu, setOpenMenu] = useState(false);
  const [openNavToggle, setOpenNavToggle] = useState(false);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [shoppingCard, setShoppingCard] = useState([]);


  function openModal(name, isMoodBoard = false) {
    setModal({ isOpen: true, name: name, isMoodBoard: isMoodBoard });
  };

  function closeModal() {
    setModal({ isOpen: false, name: null })
  };


  function clickCard() {
    setIsCardOpen(!isCardOpen);
  };

  function clickOutside() {
    if (isCardOpen) {
      setIsCardOpen(false);
    }
  }

  async function addShoppingCard(item) {
    let card = [...shoppingCard];
    item.quantity = 1;
    const index = card.findIndex(x => x.product.uuid === item.uuid);
    if (index === -1) {
      card.push({ uuid: card.length, quantity: 1, product: item });
      saveCart(item);
    }
    setIsCardOpen(true);
  }

  //fetch user product shopping cart
  useEffect(() => {
    (async function () {
      if (token) {
        const { data } = await getUserProductCart();
        data.forEach(el => {
          el.quantity = 1;
        });
        setShoppingCard(data);
      }
    })()
  }, [token]);


  // save user cart to backend
  async function saveCart(item) {
    let form = new FormData();
    form.set('product', item.uuid)
    await createProductCart(form);
    const { data } = await getUserProductCart();
    data.forEach(el => {
      el.quantity = 1;
    });
    setShoppingCard(data);
  }



  function itemControl(item, ops) {
    const card = [...shoppingCard];
    const index = card.findIndex(card => card.uuid === item.uuid);
    if (ops === '-' && card[index].quantity > 1) {
      card[index].quantity -= 1;
    } else if (ops === '+') {
      card[index].quantity += 1;
    }
    setShoppingCard(card)
  }

  function handleOpenMenu() {
    setOpenMenu(!openMenu)
  }
  function handleCloseMenu() {
    if (openMenu) {
      setOpenMenu(false);
    } else return;
  }

  const { name, isOpen, isMoodBoard } = modal;

  return (
    <NavbarContext.Provider value={{ openNavToggle, setOpenNavToggle, isCardOpen }}>
      <CartContext.Provider value={{ shoppingCard, setShoppingCard }}>
        <main>
          <Card
            clickOutside={clickOutside}
            isCardOpen={isCardOpen}
            clickCard={clickCard}
            shoppingCard={shoppingCard}
            itemControl={itemControl}
          />

          <Switch>
            <Route path="/" render={(props) => <Home {...props}
              openMenu={openMenu}
              openModal={openModal}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              shoppingCard={shoppingCard} isCardOpen={isCardOpen}
              itemControl={itemControl} clickCard={clickCard} />} exact />

            <Route path="/blog/:id/:roomId" render={(props) => <Blog {...props}
              openMenu={openMenu}
              openModal={openModal}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              clickCard={clickCard} />} exact />

            <Route path="/learn-more" render={(props) => <LearnPage {...props}
              openMenu={openMenu}
              openModal={openModal}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              clickCard={clickCard} />} exact />

            <Route path="/workspace" render={(props) => <Workspace {...props}
              openMenu={openMenu}
              openModal={openModal}
              addShoppingCard={addShoppingCard}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              clickCard={clickCard}
              shoppingCard={shoppingCard}
              isCardOpen={isCardOpen} itemControl={itemControl} exact />} />

            <Route path="/explore" render={(props) => <Home {...props}
              openMenu={openMenu}
              openModal={openModal}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              clickCard={clickCard}
              shoppingCard={shoppingCard}
              isCardOpen={isCardOpen} itemControl={itemControl} />} exact />

            <Route path="/about-us" render={(props) => <AboutUS {...props}
              openMenu={openMenu}
              openModal={openModal}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              clickCard={clickCard}
              shoppingCard={shoppingCard}
              isCardOpen={isCardOpen} itemControl={itemControl} />} exact />


            <Route path="/contact-us" render={(props) => <ContactUs {...props}
              openMenu={openMenu}
              openModal={openModal}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              clickCard={clickCard}
              shoppingCard={shoppingCard}
              isCardOpen={isCardOpen} itemControl={itemControl} />} exact />


            <Route path="/shop-more" render={(props) => <Shop {...props}
              openMenu={openMenu}
              openModal={openModal}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              clickCard={clickCard} />} exact />

            <Route path="/product-details/:id" render={(props) => <ProductDetails {...props}
              openMenu={openMenu}
              openModal={openModal}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              addShoppingCard={addShoppingCard}
              clickCard={clickCard} />} exact />

            <Route path="/account" render={(props) => <Account {...props}
              openMenu={openMenu}
              openModal={openModal}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              clickCard={clickCard} />} exact />

            <Route path="/inspired-more" render={(props) => <InspiredMore {...props}
              openMenu={openMenu}
              openModal={openModal}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              clickCard={clickCard} />} exact />

            <Route path="/inspired-details/:id/:roomId" render={(props) => <InspirationDetails
              {...props}
              openMenu={openMenu}
              openModal={openModal}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              clickCard={clickCard} />} exact />


            <Route path="/looks" render={() => <Looks {...props}
              openMenu={openMenu}
              openModal={openModal}
              handleCloseMenu={handleCloseMenu}
              handleOpenMenu={handleOpenMenu}
              clickCard={clickCard} />} exact />


          </Switch>

        </main>
        {name === 'signup' && <Modal isOpen={isOpen} childComp={<Signup isMoodBoard={isMoodBoard} openModal={openModal} closeModal={closeModal} />} />}
        {name === 'login' && <Modal isOpen={isOpen} childComp={<Login isMoodBoard={isMoodBoard} openModal={openModal} closeModal={closeModal} />} />}
        {name === 'loginNext' && <Modal isOpen={isOpen} childComp={<LoginNext openModal={openModal} closeModal={closeModal} />} />}
        {name === 'boardName' && <Modal isOpen={isOpen} childComp={<BoardName openModal={openModal} closeModal={closeModal} />} />}
        {name === 'createBoard' && <Modal isOpen={isOpen} childComp={<CreateBoard openModal={openModal} closeModal={closeModal} />} />}
        {name === 'onboard' && <Modal isOpen={isOpen} childComp={<Onboard openModal={openModal} closeModal={closeModal} />} />}
        <Footer />
      </CartContext.Provider>
    </NavbarContext.Provider>
  );
}


export default App;
