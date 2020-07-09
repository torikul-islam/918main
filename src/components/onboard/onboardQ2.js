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
        const { submitFilterRoom, filterRoom } = this.props

        return (
            <div className='container'>
                <div className='onboard-q2'>
                    {/* <div>logo</div> */}

                    <div className='onboard-q1-main'>
                        <div className='like-to-work'>
                            <h2>Which images best represent your style?</h2>
                            <p> (Choose up to 3. Don't get stuck here! If you're unsure, we can help you figure it out later!)</p>
                        </div>

                        <form onSubmit={submitFilterRoom}>
                            <div className='row my-4'>
                                <div className='row'>
                                    {filterRoom && filterRoom.map((item, i) =>
                                        <div className='col-sm-3' key={i}>
                                            <div className='onboard-item text-center'>
                                                <img src={item.ref_img} alt="" />
                                                <h6 className="text-center">{item.designed_by}</h6>
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