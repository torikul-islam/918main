import React from 'react';
import '../card/card.css';
import LearMore from '../common/learnButton'




function Card({ isCardOpen, clickCard, shoppingCard, itemControl }) {

    function total() {
        return shoppingCard.reduce((total, cur) => {
            return total += cur.quantity * cur.price
        }, 0).toFixed(2)
    }

    return (
        <>
            <div className={`shopping-card ${isCardOpen ? 'card-show' : ''}`}>
                <div className="container">
                    <div className="shopincards">
                        <div className="heading_shop">
                            <div className="row">
                                <div className="col-md-1">
                                    <div className="arrowLeft" onClick={clickCard}>
                                        <img src={require('../../Asset/Icons/Arrow_right.png')} alt="Arrow_right.png" />
                                    </div>
                                </div>
                                <div className="col-md-9">
                                    <div className="shopping-head text-center">
                                        <h3>Your Shopping List</h3>
                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="arrowLayer">
                                        <img src={require('../../Asset/Icons/Layer3.png')} alt="Layer3.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {shoppingCard && shoppingCard.map((item, i) =>
                                <div key={i}>
                                    <div className="col-md-6 float-left" >
                                        <div className="shopping-img">
                                            <img src={item.ref_img} alt="" />
                                        </div>
                                    </div>

                                    <div className="col-md-6 float-right"  >
                                        <div className="Shopping-text">
                                            <p>{item.retailer}</p>
                                            <h5>{item.name}</h5>
                                            <div className="priceProduct">${item.price}</div>
                                            <div className="quantity">
                                                Quantity
                                            <span onClick={() => itemControl(item, '-')}>-</span>
                                                {item.quantity}
                                                <span onClick={() => itemControl(item, '+')}>+</span>
                                            </div>
                                            <LearMore />
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="estimateTotal"><h6>Estimate total: ${total()}</h6></div>

                    </div>
                </div>
            </div>
        </>
    );
}



export default Card;