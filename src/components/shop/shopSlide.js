import React, { Component } from 'react';
import Slider4 from '../common/slider/slider4';
import Pagination from '../common/pagination';
import './shopSlide.css';
import shopTestData from '../../testData/shop.json';
import paginate from '../../utils/paginate';
import GoBtn from '../common/goBtn';




class ShopSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            pageSize: 4,
        }
    }

    componentDidMount() {
        this.setState({ shop: shopTestData })
    }

    onPageChange = (page) => {
        if (page === '-') {
            this.setState({ currentPage: this.state.currentPage - 1 })
        } else {
            this.setState({ currentPage: this.state.currentPage + 1 })
        }
    }

    render() {
        const { shop, currentPage, pageSize } = this.state;
        const paginateShop = shop && paginate(shop.results, currentPage, pageSize);
        return (
            <div className="shop-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>Shop</h4>
                            <ul>
                                <li>FURNITURE</li>
                                <li>DECOR</li>
                                <li>RUGS</li>
                                <li>BED &amp; BATH</li>
                                <li>LIGHTING</li>
                            </ul>
                        </div>
                    </div>

                    <div className='slider-main'>
                        {shop && <div className='row'>
                            <Slider4 data={paginateShop} />
                            <Pagination
                                itemsCount={shop.results.length}
                                currentPage={currentPage}
                                pageSize={pageSize}
                                onPageChange={this.onPageChange}
                            />
                        </div>}
                    </div>

                </div>

                <div className="shop-more">
                    <GoBtn text="Shop More" />
                </div>
            </div>
        );
    }
}

export default ShopSlide;