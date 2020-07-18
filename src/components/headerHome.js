import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import GoBtn from './common/goBtn';
import Socailicon from './common/socialicons/socailicon';
import Subscribe from './common/socialicons/subscribe';
import NavbarW from './nav/navbarW';
import './headerHome.css';





const HeaderHome = ({ openModal, data, openMenu, handleOpenMenu }) => {
    return (
        <>
            <div className="home-area">
                <div className='container-fluid' >
                    <NavbarW openMenu={openMenu} handleOpenMenu={handleOpenMenu} openModal={openModal}/>
                </div>

                <div className="container">
                    <div className='home-text'>
                        <h2>Your Home Decorating Hub</h2>
                        <p>Here, you’ll find all of the resources <br />
                            you need to make decorating not only <br /> easier, but also fun! </p>
                    </div>
                </div>
            </div>

            <div className="icon-books">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="icons-header-lights">
                                <img src={require('../Asset/Images/light-bulb.png')} alt="light-bulb.png" />
                                <h5>Be inspired.</h5>
                            </div>
                        </div>
                        <div className="col-sm-3 padding-zero">
                            <div className="learn icons-header-lights">
                                <img src={require('../Asset/Images/learn.png')} alt="learn.png" />
                                <h5>Learn.</h5>
                            </div>
                        </div>
                        <div className="col-sm-3 padding-right-zero">
                            <div className="shop icons-header-lights">
                                <img src={require('../Asset/Images/shop.png')} alt="shop.png" />
                                <h5>Shop.</h5>
                            </div>
                        </div>
                        <div className="col-sm-3">
                            <div className="icons-header-lights">
                                <img src={require('../Asset/Images/design.png')} alt="design.png" />
                                <h5>Design.</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="own-design">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className='readytocreate'>
                                <h5>Ready to create <br /> your own design?!</h5>
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className='moodboard'>

                                <Link to='/workspace'> <GoBtn text='Create a Moodboard' /></Link>
                            </div>
                        </div>
                    </div>

                    {data && data.map((item, i) =>
                        <div className="width-color-fill" key={i}>
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="image-bg">
                                        <img src={item.ref_img} alt="" />
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="text-furniture">
                                        <p>{item.source}</p>
                                        <h4>{item.title}</h4>
                                        <span>{item.content}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
                <Socailicon />
                <Subscribe />
            </div>
        </>
    );
}

export default HeaderHome;
