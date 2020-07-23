import React from 'react';
import { Link } from 'react-router-dom';
import './adminnav.css';


function NavbarAdmin() {

    return (
            <div className='container-menu' id='menu'>
                <div className="logo-width display-for-mobile">
                    <li className='logo'>
                        <Link className="nav-link" to="/" >
                            <img src={require('../../../Asset/Images/Logo.png')} alt="Logo.png" />
                        </Link>
                    </li>
                </div>

                <nav className="navbar-expand-lg navbar-light">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse bg-lights" id="navbarNav">
                        <ul className="home-menu">
                            <div className="logo-width logo-widthadmin">
                                <li className='logo'>
                                    <Link className="nav-link" to="/" >
                                        <img src={require('../../../Asset/Images/Logo.png')} alt="Logo.png" />
                                    </Link>
                                </li>
                            </div>
                            <div className="menu-float menu-floatadmin">
                                <li className="menu-item font-hel">
                                    <Link className="nav-link" to="/#"   >Workspace</Link>
                                </li>
                                <li className="menu-item font-hel">
                                    <Link className="nav-link" to="/#"   >Explore</Link>
                                </li>
                            </div>
                        </ul>
                    </div>
                </nav>
            </div>
    )
}

export default NavbarAdmin;