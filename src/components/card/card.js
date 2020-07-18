import React, { Component } from 'react';
import '../card/card.css';
import LearMore from '../common/learnButton'




function Card({ isCardOpen, clickCard, shoppingCard, itemControl }) {
    return (
        <>
            <div className={`shopping-card ${isCardOpen ? 'card-show' : ''}`}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-1">
                            <div className="arrowLeft" onClick={clickCard}>
                                <img src={require('../../Asset/Icons/Arrow_right.png')} alt="Arrow_right.png" />
                            </div>
                        </div>
                        <div className="col-md-10">
                            <div className="shopping-head text-center">
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
                            <div className="shopping-Img">
                                <img src={require('../../Asset/Images/inspired_slide_item.png')} alt="inspired_slide_item.png" />
                            </div>
                        </div>
                        {shoppingCard && shoppingCard.map((item, i) =>
                            <div className="col-md-6" key={i}>
                                <div className="Shopping-text">
                                    <p>{item.retailer}</p>
                                    <h5>{item.name}</h5>
                                    <span>${item.price}</span>
                                    <div className="quantity">
                                        Quantity
                                         <span onClick={() => itemControl(item, '+')}>+</span>
                                        {item.quantity}
                                        <span onClick={() => itemControl(item, '-')}>-</span>
                                    </div>
                                    <LearMore />
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}



export default Card;