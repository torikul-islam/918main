import React, { Component } from 'react';
import Checkbox from '../common/checkbox';
import GoBtn from '../common/goBtn';
import './onboardQ2.css';




class OnboardQ2 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='container'>
                <div className='onboard-q2'>
                    <div>logo</div>

                    <div className='onboard-q1-main'>
                        <div className='like-to-work'>
                            <h2>Which images best represent your style?</h2>
                            <p> (Choose up to 3. Don't get stuck here! If you're unsure, we can help you figure it out later!)</p>
                        </div>
                        <div className='row my-4'>
                            <div className='row'>
                                {Array(12).fill().map((_, i) => i + 1).map((item, i) =>
                                    <div className='col-sm-3' key={i}>
                                        <div className='onboard-item'>
                                            <img src={require('../../Asset/Images/onboard_item4.png')} alt="" />
                                            <h6>Farmhouse {i + 1}</h6>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>

                        <GoBtn text='Next' />
                    </div>



                </div>
            </div>
        );
    }
}

export default OnboardQ2;