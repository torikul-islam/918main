import React from 'react';
import GoBtn from '../common/goBtn';
import './onboardQ2.css';



const OnboardQ3 = (props) => {
    const { openModal, filterRoom, openBoard, selectedPieces, clickPieces } = props;

    return (
        <div className='container'>
            <div className='onboard-q2'>
                <div className='onboard-q1-main'>
                    <div className="imageLeft" onClick={() => openBoard(2)}>
                        <img src={require('../../Asset/Icons/Arrow_right.png')} alt="Arrow_right.png" />
                    </div>
                    <div className="dotList mt-0 mb-4">
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className=""></span>
                    </div>
                    <div className='like-to-work'>
                        <h2>Are there specific pieces you're looking for?</h2>
                        <p>(Choose as many as you'd like.)</p>
                    </div>
                    <form className='q3-form'>
                        <div className='row my-4 width_fixed a-auto'>
                            {filterRoom.length === 0 ? <h5>No Pieces found</h5> : filterRoom.map((item, i) =>
                                <div className='onboard-q3 col-4 col-sm-3 col-md-3' key={i}>
                                    <div >
                                        <img onClick={() => clickPieces(item)} className='pointer' src={item.ref_img} alt="" />
                                    </div>
                                    <h6 className={`text-center ${selectedPieces.some(x => x === item.pk) ? 'active' : ''}`}>{item.name}</h6>
                                </div>
                            )}
                        </div>
                        <GoBtn text='Next' onClick={() => openModal('boardName')} />
                        <div className="text-center">
                            <span className="Skip-btn-style" onClick={() => openModal('boardName')}> Skip </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default OnboardQ3;

