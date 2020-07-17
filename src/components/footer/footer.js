import React, { Component } from 'react';
import './footer.css'

import {Link} from 'react-router-dom';



class footer extends Component {
    render() {
        return (

            <div id='footer'>
                <div className='container-fluid'>
                    <div className='row footer-main'>
                        <div className='col-sm-2 footer-left'>
                            <h3>Quick Links</h3>
                            <ul className='footer-link'>
                                <li className='footer-item'><Link to='/workspace' style={{ textDecoration: 'none', color:"#4f4f4f" }}>Moodboard Creator</Link></li>
                                <li className='footer-item'><Link to='/shop-more' style={{ textDecoration: 'none', color:"#4f4f4f" }}>Shop</Link></li>
                                <li className='footer-item'><Link to='/Learn-more' style={{ textDecoration: 'none', color:"#4f4f4f" }}>Learn</Link></li>
                                <li className='footer-item'><Link to='/inspired-more' style={{ textDecoration: 'none', color:"#4f4f4f" }}>Be Inspired</Link></li>
                            </ul>
                        </div>

                        <div className='col-sm-8 footer-middle'>
                            <ul className="contact-menu">
                                <li><Link to='/ContactUs' style={{ textDecoration: 'none', color:"#000" }}>Contact</Link></li>
                                <li><Link to='/AboutUS' style={{ textDecoration: 'none', color:"#000" }}>About Us</Link></li>
                            </ul>
                        </div>
                        <div className='col-sm-2 footer-right'>
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
}

export default footer;