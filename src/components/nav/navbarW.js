import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import NavbarContext from '../../context/navbarContext';
import '../nav/navbar.css'




function NavbarW({ openModal, clickCard, handleCloseMenu, onChangeSearch, searchData, clickSearchItem }) {
    const [openSearch, setOpenSearch] = useState(false)
    const user = localStorage.getItem('token');

    const { openNavToggle, setOpenNavToggle, isCardOpen } = useContext(NavbarContext);

    function handleNavToggle() {
        if (isCardOpen) {
            console.log('cardopen');
            setOpenNavToggle(false);
            return;
        }
        setOpenNavToggle(!openNavToggle);
    }


    function clickLogout() {
        localStorage.removeItem('token');
        window.location = '/'
    }

    function handleSearch() {
        setOpenSearch(!openSearch);
    }


    return (
        <div className='container-menu' id='menu'>
            <div className="logo-width display-for-mobile">
                <li className='logo'>
                    <Link className="nav-link" to="/" >
                        <img onClick={() => handleCloseMenu()} src={require('../../Asset/Images/logo-white.png')} alt="logo-white.png" />
                    </Link>
                </li>
            </div>
            <nav className="navbar-expand-lg navbar-light">
                <button onClick={handleNavToggle} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div style={openNavToggle ? { display: 'block' } : { display: 'none' }} className={`collapse navbar-collapse bg-lights ${openNavToggle ? 'show' : ''}`} id="navbarNav">
                    <ul className="home-menu">
                        <div className="search-float">
                            <li className="searchHandle">
                                <img onClick={handleSearch} src={require('../../Asset/Images/search.png')} alt="search.png" />
                                <input className="btn-srachw" type="text" onChange={(e) => onChangeSearch(e)} placeholder='Search...' />
                            </li>
                        </div>
                        {searchData.length > 0 && <ul className='search-container'>
                            {searchData.map((s, i) =>
                                <li onClick={() => { clickSearchItem(s); handleNavToggle() }} className="search-item pointer" key={i}>{s.title || s.name || s.designed_by}</li>
                            )}
                        </ul>}
                        <div className="logo-width">
                            <li className='logo'>
                                <Link className="nav-link" to="/" >
                                    <img src={require('../../Asset/Images/logo-white.png')} alt="logo-white.png" />
                                </Link>
                            </li>
                        </div>
                        <div className="menu-float">
                            <li className="menu-item font-hel" onClick={handleNavToggle}>
                                <Link className="nav-link" to="/workspace"  >Workspace</Link>
                            </li>
                            <li className="menu-item font-hel">
                                <div className="dropdown">
                                    <button className="dropbtn">Explore</button>
                                    <div className="dropdown-content" onClick={handleNavToggle} >
                                        <Link className="nav-link" to="/explore"  >Explore</Link>
                                        <Link className="nav-link" to="/inspired-more" >Be Inspired</Link>
                                        <Link className="nav-link" to="/learn-more"  >Learn</Link>
                                        <Link className="nav-link" to="/shop-more"  >Shop</Link>

                                    </div>
                                </div>
                            </li>
                            {!user && <li className="menu-item signup" onClick={() => { openModal('signup'); handleNavToggle() }}>
                                <div className="nav-link">Sign Up</div>
                            </li>}
                            {user && <li className="menu-item signup" onClick={() => { clickLogout(); handleNavToggle() }}>
                                <div className="nav-link" >Logout</div>
                            </li>}
                            <span className="menu-icon">
                                <li className="menu-item man" onClick={handleNavToggle} >
                                    <Link className="nav-link" to="/account">
                                        <img src={require('../../Asset/Images/man.png')} alt="man.png" />
                                    </Link>
                                </li>
                                <li className="menu-item shop pointer" onClick={() => { clickCard(); handleNavToggle() }}>
                                    <img src={require('../../Asset/Images/black_shoping.png')} alt="black_shoping.png" />
                                </li>
                            </span>
                        </div>
                    </ul>
                </div>
            </nav>
        </div>
    )
}


export default NavbarW;