import React, { useRef, useEffect } from 'react';
import GoBtn from '../common/goBtn';
import '../card/card.css';




function Card({ isCardOpen, clickCard, shoppingCard, itemControl, clickOutside }) {
    let wrapperRef = useRef(null);

    function total() {
        return shoppingCard.reduce((total, cur) => {
            return total += cur.quantity * cur.price
        }, 0).toFixed(2)
    }

    useEffect(() => {
        document.addEventListener("click", handleClickOutside, false);
        return () => {
            document.removeEventListener("click", handleClickOutside, false);
        };
    }, [isCardOpen]);

    function handleClickOutside(event) {
        if (!wrapperRef.current.contains(event.target)) {
            clickOutside();
        }
    };

    return (
        <>
            <div ref={wrapperRef} className={`${isCardOpen ? 'shopping-card card-show' : 'shopping-card'}`}>
                <div className="container">
                    <div className="shopincards">
                        <div className="heading_shop">
                            <div className="row">
                                <div className="col-md-1 col-1">
                                    <div className="arrowLeft" onClick={clickCard}>
                                        <img src={require('../../Asset/Icons/Arrow_right.png')} alt="Arrow_right.png" />
                                    </div>
                                </div>
                                <div className="col-md-9 col-7">
                                    <div className="shopping-head text-center">
                                        <h3>Your Shopping List</h3>
                                    </div>
                                </div>
                                <div className="col-md-2 col-2">
                                    <div className="arrowLayer">
                                        <img src={require('../../Asset/Icons/Layer3.png')} alt="Layer3.png" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            {shoppingCard && shoppingCard.map((item, i) =>
                                <div className="cart-item" key={i}>
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
                                            <div onClick={() => window.open(item.ref_url, '_blank')} className="visit-retailer">
                                                <GoBtn text='Visit retailer' />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            <hr />
                        </div>
                    </div>
                </div>
                <div className="estimateTotal">
                    <div className='row margin-custom'>
                        <div className="col-sm-6"> <h6>Estimated Subtotal:</h6></div>
                        <div className="col-sm-6"><h6 className="text-right">${total()}</h6></div>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Card;