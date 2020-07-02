import React, { Component } from 'react';
import './footer.css'
class footer extends Component {
    render() {
        return (
            <div className='footer'> 
                <div style={{marginLeft:40}}> <text className='quick-Link'>Quick Links</text>
                    <div> Links 1</div>
                    <div>Links 1</div>
                    <div>Links 1</div>
                </div>
                <div>
                    <div> Contact Us</div>
                    <div> About Us</div>
                </div>

                <div> Subscribe</div>
            </div>
        );
    }
}

export default footer;