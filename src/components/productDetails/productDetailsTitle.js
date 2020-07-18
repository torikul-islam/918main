import React from 'react';
import inspiredSlide from '../../Asset/Images/inspired_slide_item.png'
import GoBtn from '../common/goBtn';




const ProductDetailsTitle = ({ addShoppingCard }) => {

    const item = {
        "uuid": "00a9f093-0aec-417f-be41-600adf2419c3",
        "name": "Moroccan Cross Rug",
        "ref_url": "https://www.anthropologie.com/shop/moroccan-cross-rug?category=rugs&color=003&quantity=1&size=8%E2%80%99%20X%2010%E2%80%99&type=STANDARD",
        "ref_img": "https://s7d5.scene7.com/is/image/Anthropologie/39424759_003_b?$a15-pdp-detail-shot$&hei=900&qlt=80&fit=constrain",
        "price": "1398.00",
        "retailer": "Anthropologie",
    }


    return (
        <div className='container-fluid mb-5'>
            <div className='container' >
                <div className="row">
                    <div className="col-sm-4">
                        <div className="image-fav">
                            <img src={inspiredSlide} alt="" />
                            <span className="icon">
                                <img src={require('../../Asset/Images/fav.png')} alt="fav.png" />
                            </span>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="text-fav text-center">
                            <span>Designed by</span>
                            <h4>Designer Name</h4>
                            <ul className="menu-name">
                                <li className="select_design"><select name="cars" id="cars">
                                    <option value="Add to Board">Add to Board</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                                </select></li>
                                <li className="saveSection">
                                    <GoBtn text='save' />
                                </li>
                            </ul>
                            <GoBtn text='Add to shopping List' onClick={() => addShoppingCard(item)} />
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductDetailsTitle;