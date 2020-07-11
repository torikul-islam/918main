import React, { Component } from 'react';
import GoBtn from '../common/goBtn';
import './onboardQ2.css';




class OnboardQ3 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }



    render() {
        const { openModal, filterRoom } = this.props;
        return (
            <div className='container'>
                <div className='onboard-q2'>
                    <div className='onboard-q1-main'>
                        <div className='like-to-work'>
                            <h2>Are there specific pieces you're looking for?</h2>
                            <p>(Choose as many as you'd like.)</p>
                        </div>
                        <form>
                            <div className='row my-4 width_fixed'>
                                <div className='row'>
                                    {filterRoom && filterRoom.map((item, i) =>
                                        <div className='col-sm-3' key={i}>
                                            <div className='onboard-item'>
                                                <img src={item.ref_img} alt="" />
                                                <h6>{item.designed_by}</h6>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <GoBtn text='Next' onClick={() => openModal('boardName')} />
                            <div className="text-center"><span className="Skip-btn-style"> Skip </span></div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default OnboardQ3;