import React, { Component } from 'react';
import Pagination from '../common/pagination';
import './inspiredSlider.css';
import inspiredTestDate from '../../testData/inspired.json';
import Slider4 from '../common/slider/slider4';
import paginate from '../../utils/paginate';
import GoBtn from '../common/goBtn';



class InspiredSlider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentPage: 0,
            pageSize: 4,
        }
    }

    componentDidMount() {
        this.setState({ inspired: inspiredTestDate.results })
    }

    onPageChange = (page) => {
        if (page === '-') {
            this.setState({ currentPage: this.state.currentPage - 1 })
        } else {
            this.setState({ currentPage: this.state.currentPage + 1 })
        }
    }


    render() {
        const { inspired, currentPage, pageSize } = this.state;
        const inspiredPaginate = inspired && paginate(inspired, currentPage, pageSize);

        return (
            <div className="inspired-slider">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <h4>Be Inspired</h4>
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
                        {inspired && <div className='row'>

                            <Slider4 data={inspiredPaginate} />

                            <Pagination
                                itemsCount={inspired.length}
                                currentPage={currentPage}
                                pageSize={pageSize}
                                onPageChange={this.onPageChange}
                            />
                        </div>}
                    </div>


                </div>

                <div className="inspired-more">
                    <GoBtn text="See More" />
                </div>
            </div>
        );
    }
}

export default InspiredSlider;