import React, { Component } from 'react';
import Slider4 from '../common/slider/slider4';
import Pagination from '../common/pagination';
import shopTestData from '../../testData/shop.json';
import paginate from '../../utils/paginate';
import './shopSlide.css';
import GoBtn from '../common/goBtn';
import { Link } from 'react-router-dom';




const ShopSlide = ({ data, currentPage, pageSize, onPageChange }) => {
    const paginateShop = data && paginate(data, currentPage, pageSize);
    return (
        <div className="shop-slider bg_shop">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>Shop</h4>
                        <ul>
                            <li>SOFA</li>
                            <li>CHAIR</li>
                            <li>RUGS</li>
                            <li>ACCESSORIES</li>
                            <li>LIGHTING</li>
                            <li>ART</li>
                        </ul>
                    </div>
                </div>
                <div className='slider-main'>
                    {data && <div className='row'>
                        <Slider4 data={paginateShop} />
                        <Pagination
                            itemsCount={data.length}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={onPageChange}
                        />
                    </div>}
                </div>

            </div>
            <div className="shop-more">
                <Link to='/shop-more'>
                    <GoBtn text="Shop More" />
                </Link>
            </div>

        </div>
    );
}

export default ShopSlide;




// class ShopSlide extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             currentPage: 0,
//             pageSize: 4,
//         }
//     }

//     componentDidMount() {
//         window.addEventListener("resize", this.handleResize);
//         this.setState({ shop: shopTestData })
//     }

//     onPageChange = (page) => {
//         if (page === '-') {
//             this.setState({ currentPage: this.state.currentPage - 1 })
//         } else {
//             this.setState({ currentPage: this.state.currentPage + 1 })
//         }
//     }

//     handleResize = () => {
//         const width = window.innerWidth;
//         if (width <= '767') {
//             this.setState({ pageSize: 1 });
//         } else {
//             this.setState({ pageSize: 4 });
//         }
//     }
//     render() {
//         const { shop, currentPage, pageSize } = this.state;
//         const paginateShop = shop && paginate(shop.results, currentPage, pageSize);
//         return (

//         );
//     }
// }

// export default ShopSlide;