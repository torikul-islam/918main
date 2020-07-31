import React from 'react';
import NavbarW from '../nav/navbarW';
import './headerShop.css';





const HeaderShop = (props) => {

    return (
        <>
            <div className="home-area-shop">
                <div className='container-fluid' >
                    <NavbarW  {...props} />
                </div>
                <div className="container">
                    <div className='home-text'>
                        <h2>Shop designer curated products!</h2>
                        <p>We know that decision paralysis is real,<br /> so we’ve made it easier by selecting the <br />
                             best of the best!  </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default HeaderShop;
