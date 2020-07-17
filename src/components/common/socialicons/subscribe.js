import React, { Component } from 'react';
import '../../common/socialicons/subscribe.css';

class Subscribe extends Component {
    render() {
        return (
            <div>
                <div className="subs-icons">
                    <ul>
                        <li className="sbusc">Subscribe</li>
                        <li className="img_subs"><img src={require('../../../Asset/Icons/subscribe.png')} alt="subscribe.png"/></li>
                    </ul>
                </div>
            </div>
        );
    }
}

export default Subscribe;