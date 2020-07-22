import React, { Component } from 'react';
import GoBtn from '../common/goBtn';
import './onboardQ2.css';




class OnboardQ2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    render() {
        const { submitStyle, styles } = this.props

        return (
            <div className='container'>
                <div className='onboard-q2'>
                    {/* <div>logo</div> */}

                    <div className='onboard-q1-main'>
                        <div className="imageLeft">
                            <img src={require('../../Asset/Icons/Arrow_right.png')} alt="Arrow_right.png" />
                        </div>
                        <div className="dotList mt-0 mb-4">
                            <span className="active"></span>
                            <span className=""></span>
                            <span className=""></span>
                            <span className=""></span>
                        </div>
                        <div className='like-to-work'>
                            <h2>Which images best represent your style?</h2>
                            <p> (Choose up to 3. Don't get stuck here! If you're unsure, we can help you figure it out later!)</p>
                        </div>

                        <form onSubmit={submitStyle}>
                            <div className='row my-4 width_fixed'>
                                <div className='row'>
                                    {styles && styles.map((item, i) =>
                                        <div className='col-sm-3' key={i}>
                                            <div className='onboard-item text-center'>
                                                <img src={item.ref_img} alt="" />
                                                <h6 className="text-center">{item.name}</h6>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <GoBtn text='Next' type='submit' />
                        </form>

                    </div>
                </div>
            </div>
        );
    }
}

export default OnboardQ2;