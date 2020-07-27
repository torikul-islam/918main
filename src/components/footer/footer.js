import React from 'react';
import { Link } from 'react-router-dom';
import './footer.css'


function Footer() {

    return (
        <div id='footer'>
            <div className='container-fluid'>
                <div className='row footer-main'>
                    <div className='col-sm-3 footer-left'>
                        <h3>Quick Links</h3>
                        <ul className='footer-link'>
                            <li className='footer-item'><Link to='/workspace' style={{ textDecoration: 'none', color: "#4f4f4f" }}>Moodboard Creator</Link></li>
                            <li className='footer-item'><Link to='/shop-more' style={{ textDecoration: 'none', color: "#4f4f4f" }}>Shop</Link></li>
                            <li className='footer-item'><Link to='/Learn-more' style={{ textDecoration: 'none', color: "#4f4f4f" }}>Learn</Link></li>
                            <li className='footer-item'><Link to='/inspired-more' style={{ textDecoration: 'none', color: "#4f4f4f" }}>Be Inspired</Link></li>
                        </ul>
                    </div>

                    <div className='col-sm-6 footer-middle'>
                        <ul className="contact-menu">
                            <li><Link to='/contact-us' style={{ textDecoration: 'none', color: "#000" }}>Contact</Link></li>
                            <li><Link to='/about-us' style={{ textDecoration: 'none', color: "#000" }}>About Us</Link></li>
                        </ul>
                    </div>
                    <div className='col-sm-3 footer-right'>
                        <ul className="subscribe">
                            <li><img src={require('../../Asset/Images/mail.png')} alt="mail.png" /></li>
                            <li className="sublist">Subscribe</li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Footer;