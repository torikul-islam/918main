import React, { Component } from 'react';
import '../card/card.css';
import LearMore from '../common/learnButton'

class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <>
                <div className="ShopingCard">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-1">
                                <div className="arrowLeft">
                                    <img src={require('../../Asset/Icons/Arrow_right.png')} alt="Arrow_right.png" />
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="ShopingHead text-center">
                                    <h3>Your Shopping List</h3>
                                </div>
                            </div>
                            <div className="col-md-1">
                                <div className="arrowLayer">
                                    <img src={require('../../Asset/Icons/Layer3.png')} alt="Layer3.png" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <div className="ShopingImg">
                                    <img src={require('../../Asset/Images/inspired_slide_item.png')} alt="inspired_slide_item.png" />
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="ShopingText">
                                    <p>Retailer</p>
                                    <h5>Really Awesome Product Name</h5>
                                    <span>$523</span>
                                    <div className="quantity">Quantity <span>+</span>1<span>-</span></div>
                                    <LearMore />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Card;