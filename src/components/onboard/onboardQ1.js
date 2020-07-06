import React, { Component } from 'react';
import Checkbox from '../common/checkbox';
import './onboardQ1.css';
import GoBtn from '../common/goBtn';




class OnboardQ1 extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    submitOnboardQ1 = () => {
        this.props.openModal('onboardQ2')
    };

    render() {

        return (
            <div className='container'>
                <div className='onboard-q1'>
                    <div className="text-center" style={{ marginBottom: 100 }}>
                        <img src={require('../../Asset/Images/Logo.png')} className="img-fluid" alt="Responsive image" style={{ width: 160 }} />
                    </div>


                    <div className='onboard-q1-main'>
                        <div className='like-to-work'>
                            <h2>What room would you like to work on ?</h2>
                            <p>You'll create new boards for each room. so choose the room you'd like to start with!</p>
                        </div>
                        <div className='row my-5 q1-checkbox-area'>
                            <div className='col-sm-6'>
                                <div className='q1-check-left'>
                                    <Checkbox id="l_room" name="l_room" label='Living Room' />
                                    <Checkbox id="d_room" name="d_room" label='Dining Room' />
                                    <Checkbox id="kitchen" name="kitchen" label='Kitchen' />
                                    <Checkbox id="bedroom" name="bedroom" label='Bedroom' />
                                    <Checkbox id="bathroom" name="bathroom" label='Bathroom' />
                                </div>
                            </div>
                            <div className='col-sm-6'>
                                <Checkbox id="office" name="office" label='Office' />
                                <Checkbox id="kid_room" name="kid_room" label="Kid's Room" />
                                <Checkbox id="entryway" name="entryway" label='Entryway' />
                                <Checkbox id="outdoor" name="outdoor" label='Outdoor' />

                            </div>
                        </div>

                        <GoBtn text='Next' onClick={this.submitOnboardQ1} />
                    </div>



                </div>
            </div>
        );
    }
}

export default OnboardQ1;