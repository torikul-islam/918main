import React, { Component } from 'react';
import '../../common/socialicons/socialicons.css';

class SocialIcons extends Component {
    render() {
        return (
            <div>
                <div className="social-icons">
                    <ul>
                        <li><a href="#"><img src={require('../../../Asset/Icons/facebook.png')} alt="facebook.png"/></a></li>
                        <li><a href="#"><img src={require('../../../Asset/Icons/instagram.png')} alt="instagram.png"/></a></li>
                        <li><a href="#"><img src={require('../../../Asset/Icons/pinterest.png')} alt="pinterest.png"/></a></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SocialIcons;