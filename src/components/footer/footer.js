import React, { Component } from 'react';
import './footer.css'
class footer extends Component {
    render() {
        return (

            <div className='container-fluid' id='footer'>
                <div className='container'>
                    <div className='row footer-main'>
                        <div className='col-lg-4 footer-left'>
                            <h3>Quick Links</h3>
                            <ul className='footer-link'>
                                <li className='footer-item'>Moodboard Creator</li>
                                <li className='footer-item'>Shop</li>
                                <li className='footer-item'>Learn</li>
                                <li className='footer-item'>Be Inspired</li>
                            </ul>
                        </div>

                        <div className='col-lg-4'>
                            <ul className="contact-menu">
                                <li>Contact</li>
                                <li>About Us</li>
                            </ul>
                        </div>
                        <div className='col-lg-4'>
                            <ul className="subscribe">
                                <li><img src={require('../../Asset/Images/mail.png')} alt="mail.png" /></li>
                                <li className="subslist">Subscribe</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
}

export default footer;