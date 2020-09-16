import React from 'react';
import GoBtn from '../common/goBtn';
import './onboardQ2.css';



const OnboardQ2 = (props) => {
    const { submitStyle, styles, openBoard, clickImage, selectedImage, errors } = props

    return (
        <div className='container'>
            <div className='onboard-q2'>

                <div className='onboard-q1-main'>
                    <div className="imageLeft" onClick={() => openBoard(1)}>
                        <img src={require('../../Asset/Icons/Arrow_right.png')} alt="Arrow_right.png" />
                    </div>
                    <div className="dotList mt-0 mb-4">
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className=""></span>
                        <span className=""></span>
                    </div>
                    <div className='like-to-work'>
                        <h2>Which images best represent your style?</h2>
                        <p> (Choose up to 3. Don't get stuck here! If you're unsure, we can help you figure it out later!)</p>
                    </div>
                    {errors['styles'] && <p className='ck-error'>{errors['styles']}</p>}
                    <form onSubmit={submitStyle} className='q2-form'>
                        <div className='row my-4 width_fixed'>
                            <div className='row'>
                                {styles.map((item, i) =>
                                    <div className='onboard-item text-center col-4 col-sm-3 col-md-3' key={i}>
                                        <div>
                                            <img src={item.ref_img} className="pointer" alt="" onClick={() => clickImage(item)} />
                                        </div>
                                        <h6 className={`text-center ${selectedImage.some(x => x === item.pk) ? 'active' : ''}`}>{item.name}</h6>
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

export default OnboardQ2;
