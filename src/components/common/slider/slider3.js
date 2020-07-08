import React from 'react';
import './slider.css';



const Slider3 = ({ }) => {
    return (
        <section className="post-slide-main">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4">
                        <div className="image-post-slide">
                            <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                            <h3>How to Choose the <br /> Best White Paint for <br /> Your Space</h3>
                            <p>Such a great design rule! Do not <br /> buy all matching pieces!</p>
                            <span>Studio McGee</span>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="image-post-slide">
                            <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                            <h3>How to Choose the <br /> Best White Paint for <br /> Your Space</h3>
                            <p>Such a great design rule! Do not <br /> buy all matching pieces!</p>
                            <span>Studio McGee</span>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="image-post-slide">
                            <img src={require('../../Asset/Images/Color_Fill_10.png')} alt="Color_Fill_10.png" />
                            <h3>How to Choose the <br /> Best White Paint for <br /> Your Space</h3>
                            <p>Such a great design rule! Do not <br /> buy all matching pieces!</p>
                            <span>Studio McGee</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Slider3;