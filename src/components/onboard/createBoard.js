import React, { useEffect, useState } from 'react';
import GoBtn from '../common/goBtn';
import Input from '../common/input';
import './createBoard.css';


function CreateBoard(props) {
    const { closeModal, openModal } = props;
    const [loginBoard, setLoginBoard] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
    };

    function clickLoginBoard() {
        setLoginBoard(true);
    }

    function clickSignup() {
        setLoginBoard(false);
    }
    return (
        <div className='container'>
            <div className='create-board'>
                <div className='boardPadding'>
                    <div className="imageLeft" onClick={() => openModal('boardName')}>
                        <img src={require('../../Asset/Icons/Arrow_right.png')} alt="Arrow_right.png" />
                    </div>
                    <div className="dotList mt-0 mb-4">
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                    </div>
                </div>
                <div className='form-cb-board'>
                    <h3>Sign up so we can save your boards!</h3>
                    {!loginBoard && <div className='cb-input-area'>
                        <form onSubmit={handleSubmit}>
                            <div className='cb-input'>
                                <Input name='name' id='name' placeholder='Name' />
                                <Input name='email' id='Email' placeholder='Email' />
                                <Input name='password' id='password' placeholder='Password' type='password' />

                            </div>
                            <div className='cb-btn'>
                                <GoBtn text='Create Board' />
                            </div>

                            <div className='have-account'>
                                <h4>Already have an account?</h4>
                                <h3 onClick={clickLoginBoard}>Login</h3>
                            </div>
                        </form>
                    </div>}
                    {loginBoard && <div className='cb-input-area'>
                        <form onSubmit={handleSubmit}>
                            <div className='cb-input'>
                                <Input name='email' id='Email' placeholder='Email' />
                                <Input name='password' id='password' placeholder='Password' type='password' />
                            </div>
                            <div className='cb-btn'>
                                <GoBtn text='Create Board' />
                            </div>

                            <div className='have-account'>
                                <h4>Don't have an account? </h4>
                                <h3 onClick={clickSignup}>Signup</h3>
                            </div>
                        </form>
                    </div>}
                </div>

            </div>
        </div>
    );
}

export default CreateBoard;
