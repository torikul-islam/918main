import React, { Component } from 'react';
import Slider4 from '../common/slider/slider4';
import Pagination from '../common/pagination';
import './shopSlide.css';
import shopTestData from '../../testData/shop.json';
import paginate from '../../utils/paginate';



class ShopSlide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            pageSize: 4,
        }
    }

    componentDidMount() {
        window.addEventListener("resize", this.handleResize);
        this.setState({ shop: shopTestData })
    }

    onPageChange = (page) => {
        if (page === '-') {
            this.setState({ currentPage: this.state.currentPage - 1 })
        } else {
            this.setState({ currentPage: this.state.currentPage + 1 })
        }
    }

    handleResize = () => {
        const width = window.innerWidth;
        if (width <= '767') {
            this.setState({ pageSize: 1 });
        } else {
            this.setState({ pageSize: 4 });
        }
    }
    render() {
        const { shop, currentPage, pageSize } = this.state;
        const paginateShop = shop && paginate(shop.results, currentPage, pageSize);
        return (
            <div className="shop-slider bg_shop">
                <div className="container">
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


            </div>
        );
    }
}

export default ShopSlide;