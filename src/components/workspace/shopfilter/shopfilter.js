import React from 'react';
import './shopfilter.css';
// import TabShop from '../../shop/tabShop';
const Shopfilter = props => {
    return (
        <div className="shop-furniture">
            <div className="list-furniture">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h5>Products</h5>
                            <ul>
                                {/* {pieces.map(item => <li
                                onClick={() => onItemSelect(item)}
                                className={item.id === selectedItem ? 'disable active' : 'pointer'}
                                key={item.uuid} >
                                {item.name.toUpperCase()}
                            </li>
                            )} */}
                                <li>FURNITURE</li>
                                <li>DECOR</li>
                                <li>RUGS</li>
                                <li>BED &amp; BATH</li>
                                <li>LIGHTING</li>
                            </ul>
                            <hr />
                            <ul className="list-categroy-shop">
                                <li><button>Living Room</button></li>
                                <li><button>Dining Room</button></li>
                                <li><button>Bedroom</button></li>
                                <li><button>Office</button></li>
                                <li><button>Kitchen</button></li>
                                <li><button>Bathroom</button></li>
                                <li><button>Entryway</button></li>
                                <li><button>Outdoor</button></li>
                                <li><button>Kids’ Room</button></li>
                            </ul>
                            <hr />
                            <div className="range-slider">
                                <h5>Products</h5>
                                <p>input image Jessan </p>

                            </div>
                            <hr />
                            <div className="colorStyle">
                            <h5>Color</h5>
                                <ul>
                                    <li className="red"></li>
                                    <li className="green"></li>
                                    <li className="yellow"></li>
                                    <li className="black"></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Shopfilter;