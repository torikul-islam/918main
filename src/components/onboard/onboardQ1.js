import React from 'react';
import Checkbox from '../common/checkbox';
import GoBtn from '../common/goBtn';
import chuckRooms from '../../utils/chunkRooms';
import './onboardQ1.css';




const OnboardQ1 = (props) => {
    const { rooms, submitCheckbox, onCheck, errors, checkBoxes } = props;
    const chunkRooms = chuckRooms(rooms);

    return (
        <div className='container'>
            <div className='onboard-q1'>
                <div className="text-center onborad-margin" style={{ marginBottom: 20 }}>
                    <img src={require('../../Asset/Images/Logo.png')} className="img-fluid" alt="" style={{ width: 160 }} />
                    <div className="dotList">
                        <span className="active"></span>
                        <span className=""></span>
                        <span className=""></span>
                        <span className=""></span>
                    </div>
                </div>

                <div className='onboard-q1-main'>
                    <div className='like-to-work'>
                        <h2>What room would you like to work on ?</h2>
                        <p>You'll create new boards for each room. so choose the room you'd like to start with!</p>
                    </div>

                    <form onSubmit={submitCheckbox}>
                        {errors['checkbox'] && <p className='ck-error'>{errors['checkbox']}</p>}
                        <div className='row my-5 q1-checkbox-area'>
                            {chunkRooms && chunkRooms.map((item, i) =>
                                <div className='col-sm-6' key={i} >
                                    {item.map(val =>
                                        <Checkbox
                                            checked={checkBoxes.some(x => x === String(val.pk))}
                                            onChange={onCheck}
                                            key={val.uuid}
                                            id={val.pk}
                                            name={val.pk}
                                            label={val.name} />
                                    )}
                                </div>
                            )}
                        </div>
                        <GoBtn text='Next' type='submit' />
                    </form>

                </div>
            </div>

        </div>
    );
}

export default OnboardQ1;