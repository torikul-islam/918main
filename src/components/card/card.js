import React, { useRef, useEffect, useContext } from 'react';
import GoBtn from '../common/goBtn';
import CartContext from '../../context/cartContext';
import { deleteProductCart } from '../../services/cartService';
import '../card/card.css';




function Card({ isCardOpen, clickCard, itemControl, clickOutside }) {
    let wrapperRef = useRef(null);
    const { shoppingCard, setShoppingCard } = useContext(CartContext);

    function total() {
        return shoppingCard.reduce((total, cur) => {
            return total += cur.quantity * cur.product.price
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

    async function handleDeleteCartItem(item) {
        const filterCart = shoppingCard.filter(p => p.uuid !== item.uuid);
        setShoppingCard(filterCart);

        // call backend server for delete cart item
        await deleteProductCart(item.uuid);
    }

    return (
        <>
            <div ref={wrapperRef} className={`${isCardOpen ? 'shopping-card card-show' : 'shopping-card'}`}>
                <div className="container">
                    <div className="shopincards shopingpostion">
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
                                            <img src={item.product.ref_img} alt="" />
                                        </div>
                                    </div>

                                    <div className="col-md-6 float-right"  >
                                        <div className="Shopping-text">
                                            <p>{item.product.retailer}</p>
                                            <h5>{item.product.name}</h5>
                                            <div className="priceProduct">${item.product.price}</div>
                                            <div className="quantity">
                                                Quantity
                                            <span onClick={() => itemControl(item, '-')}>
                                                    -
                                            </span>
                                                {item.quantity}
                                                <span onClick={() => itemControl(item, '+')}>
                                                    +
                                                </span>
                                                <span onClick={() => handleDeleteCartItem(item)}>
                                                    <i className="fa fa-trash" aria-hidden="true"></i>
                                                </span>
                                            </div>
                                            <div onClick={() => window.open(item.product.ref_url, '_blank')} className="visit-retailer">
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
                        <div className="col-sm-8 col-md-8 col-8"> <h6>Estimated Subtotal:</h6></div>
                        <div className="col-sm-4 col-md-4 col-4" ><h6 className="text-right totalHeading">${total()}</h6></div>
                    </div>
                </div>
            </div>
        </>
    );
}



export default Card;