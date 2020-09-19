import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import GoBtn from './common/goBtn';
import Socailicon from './common/socialicons/socailicon';
import Subscribe from './common/socialicons/subscribe';
import NavbarW from './nav/navbarW';
import capitalize from '../utils/capitalize';
import './headerHome.css';



const HeaderHome = (props) => {
    const { data, openModal } = props;
    return (
        <>
            <div className="home-area">
                <div className='container-fluid' >
                    <NavbarW {...props} />
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
                        <div className="col-md-3 col-6">
                            <NavLink to='/inspired-more' style={styles.squre}>
                                <div className="icons-header-lights">
                                    <img src={require('../Asset/Images/light-bulb.png')} alt="light-bulb.png" />
                                    <h5>Be inspired.</h5>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md-3 col-6 padding-zero">
                            <NavLink to='/learn-more' style={styles.squre}>
                                <div className="learn icons-header-lights">
                                    <img src={require('../Asset/Images/learn.png')} alt="learn.png" />
                                    <h5>Learn.</h5>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md-3 col-6 padding-right-zero">
                            <NavLink to='/shop-more' style={styles.squre}>
                                <div className="shop icons-header-lights">
                                    <img src={require('../Asset/Images/shop.png')} alt="shop.png" />
                                    <h5>Shop.</h5>
                                </div>
                            </NavLink>
                        </div>
                        <div className="col-md-3 col-6">
                            <NavLink to='/workspace' style={styles.squre}>
                                <div className="icons-header-lights">
                                    <img src={require('../Asset/Images/design.png')} alt="design.png" />
                                    <h5>Design.</h5>
                                </div>
                            </NavLink>
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
                                <GoBtn text='Create a Moodboard' onClick={() => openModal('loginNext')} />
                            </div>
                        </div>
                    </div>

                    {data && data.map((item, i) =>
                        <div className="width-color-fill" key={i}>
                            <div className="row">
                                <div className="col-sm-8">
                                    <div className="image-bg">
                                        <Link to={`/blog/${item.uuid}/${item.rooms[0].id}`}>
                                            <img src={item.ref_img} alt="" />
                                        </Link>
                                    </div>
                                </div>
                                <div className="col-sm-4">
                                    <div className="text-furniture">
                                        <p>{item.source}</p>
                                        <Link to={`/blog/${item.uuid}/${item.rooms[0].id}`} className='remove-u-line'>
                                            <h4>{capitalize(item.title)}</h4>
                                        </Link>
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

const styles = {
    squre: {
        textDecoration: 'none'
    }

}

export default HeaderHome;
