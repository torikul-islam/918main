import React, { Component } from 'react';
import '../../common/socialicons/socialicons.css';
import { Link } from 'react-router-dom';

class SocialIcons extends Component {
    render() {
        return (
            <div>
                <div className="social-icons">
                    <ul>
                        <li><Link to="#"><img src={require('../../../Asset/Icons/facebook.png')} alt="facebook.png" /></Link></li>
                        <li><Link to="#"><img src={require('../../../Asset/Icons/instagram.png')} alt="instagram.png" /></Link></li>
                        <li><Link to="#"><img src={require('../../../Asset/Icons/pinterest.png')} alt="pinterest.png" /></Link></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default SocialIcons;