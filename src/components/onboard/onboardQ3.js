import React, { Component } from 'react';
import GoBtn from '../common/goBtn';
import './onboardQ2.css';




class OnboardQ3 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    submitOnboardQ3 = () => {
        this.props.openModal('boardName');
    };


    render() {
        return (
            <div className='container'>
                <div className='onboard-q2'>
                    <div className='onboard-q1-main'>
                        <div className='like-to-work'>
                            <h2>Are there specific pieces you're looking for?</h2>
                            <p>(Choose as many as you'd like.)</p>
                        </div>
                        <div className='row my-4'>
                            <div className='row'>
                                {Array(12).fill().map((_, i) => i + 1).map((item, i) =>
                                    <div className='col-sm-3' key={i}>
                                        <div className='onboard-item'>
                                            <img src={require('../../Asset/Images/onboard_item4.png')} alt="" />
                                            <h6>Diving table {i + 1}</h6>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                        <GoBtn text='Next' onClick={this.submitOnboardQ3} />
                        <div className="text-center"><span className="Skip-btn-style"> Skip </span></div>
                    </div>
                </div>
            </div>
        );
    }
}

export default OnboardQ3;