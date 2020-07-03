import React, { Component } from 'react';
import inspiredSlide from '../Asset/Images/inspired_slide_item.png'
import './homeCreate.css';


class HomeCreate extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='homecreate'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6">
                            <div className="craete-img">
                                <img src={inspiredSlide} alt="inspiredSlide" />
                            </div>
                        </div>
                        <div className="col-sm-6">
                            <div className="craete-text">
                                <h5>Studio McGee</h5>
                                <h2>The beautiful homes<br />and how to create <br />them.</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit, sed do se ultrices gravida</p>
                                <div className="read-more">
                                    <button>Read More</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeCreate;