import React, { useState } from 'react';
import './shopFilter.css';



function ShopFilter(props) {
    const { openModal, closeModal } = props;
    let min = 0, max = 500
    let [val1, setVal1] = useState(100);
    let [val2, setVal2] = useState(300);


    function onChange(e, slider) {

        if (slider === 'one') {
            setVal1(e.target.value);
        } else {
            setVal2(e.target.value);
        }

        if (slider === 'one') {
            val1 = parseInt(e.target.value);
            val2 = parseInt(val2);

            if (val1 >= val2 && val2 < val2 - 3) {
                setVal1(val1);
                setVal2(val2 + 3);
            } else if (val1 >= val2 - 3) {
                setVal1(val1);
                setVal2(val2 + 3);

            } else if (val1 <= val2) {
                setVal1(val1);
                setVal2(val2);

            } else {
                setVal1(val1);
                setVal2(val2);

            }
        } else if (slider === 'two') {
            val1 = parseInt(val1);
            val2 = parseInt(e.target.value);
            if (val2 <= val1 && val1 < 3) {
                setVal1(0);
                setVal2(val2 + 3);

            } else if (val2 <= 3) {
                setVal1(0);
                setVal2(3);

            } else if (val2 <= val1) {
                setVal1(val2 - 3);
                setVal2(val2);

            } else {
                setVal1(val1);
                setVal2(val2);

            }
        }
    }

    const removeIcon = <img className="removeIcon" src={require('../../../Asset/Icons/cross.png')} alt="cross.png" />
    return (

        <div className='container'>
            <div className='shop-furniture'>
                <div className='cross-icon' onClick={closeModal}>
                    <img src={require('../../../Asset/Icons/cross.png')} alt="" />
                </div>
                <div className="list-furniture">
                    <div className="container">
                        <div className="row">
                            <div className="removeIcons float-left">
                                <ul>
                                    <li>{removeIcon}Bedroom</li>
                                    <li>{removeIcon}Office</li>
                                    <li>{removeIcon}Kitchen</li>
                                    <li>{removeIcon}Black</li>
                                </ul>
                            </div>
                            <div className="col-sm-12">
                                <div className="productfurniture">
                                    <h5>Products</h5>
                                    <ul>
                                        <li>FURNITURE</li>
                                        <li>DECOR</li>
                                        <li>RUGS</li>
                                        <li>BED &amp; BATH</li>
                                        <li>LIGHTING</li>
                                    </ul>
                                </div>
                                <hr />
                            </div>
                            <div className="category-list">
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
                            </div>

                            <div>
                                <div className="range-slider">
                                    <h5>Price</h5>
                                    <div className="slidecontainer"
                                    >
                                        <input
                                            onChange={(e) => onChange(e, 'one')}
                                            type="range"
                                            min={min}
                                            max={max}
                                            step='1'
                                            value={val1}
                                            className="sliderRange"
                                            id="myRange"
                                        />
                                    </div>
                                    <div className="slidecontainer"
                                    >
                                        <input
                                            onChange={(e) => onChange(e, 'two')}
                                            type="range"
                                            min={min}
                                            max={max}
                                            step='1'
                                            value={val2}
                                            className="sliderRange"
                                            id="myRange"
                                        />
                                    </div>
                                </div>
                                <hr />
                                <div className="colorStyle">
                                    <h5>Color</h5>
                                    <ul>
                                        <li className="red"></li>
                                        <li className="green"></li>
                                        <li className="yellow"></li>
                                        <li className="green"></li>
                                        <li className="blue"></li>
                                        <li className="purple"></li>
                                        <li className="pink"></li>
                                        <li className="black"></li>
                                        <li className="brown"></li>
                                        <li className="grey"></li>
                                        <li className="offwhite"></li>
                                        <li className="white"></li>
                                        <li className="golden"></li>
                                        <li className="silver"></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ShopFilter;