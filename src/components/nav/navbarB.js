import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './navbar.css';


function NavbarB() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" to="/">
                {/* here imported black color logo */}
                918 main
                </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/" exact >Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink className="nav-link" to="/workspace" exact>workspace</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink className="nav-link" to="/explore" exact>explore</NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavbarB;