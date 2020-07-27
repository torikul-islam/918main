import React from 'react';
import NavbarB from '../nav/navbarB';
import './contactheader.css';




const Contactheader = (props) => {
    return (
        <div className="contact-area">

            <NavbarB  {...props} />

            <div className="container">
                <div className='contact-text'>
                    <h2>Contact</h2>
                    <hr />
                </div>
            </div>

        </div>
    );
};


export default Contactheader;