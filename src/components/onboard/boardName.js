import React, { useState } from 'react';
import GoBtn from '../common/goBtn';
import Input from '../common/input';
import './boardName.css';




const BoardName = (props) => {
    const { closeModal, openModal } = props;
    const [name, setName] = useState('');
    const [error, setError] = useState(null);


    function onChange(e) {
        setName(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (name.trim() === '') {
            setError("Name filed can't be empty!")
        } else {
            localStorage.setItem('boardName', name)
            props.openModal('createBoard')
        }
    };


    return (
        <div className='container'>
            <div className='board-name'>
                <div className='boardPadding'>
                    <div className="imageLeft" onClick={() => openModal('loginNext')}>
                        <img src={require('../../Asset/Icons/Arrow_right.png')} alt="Arrow_right.png" />
                    </div>
                    <div className="dotList mt-0 mb-4">
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className="active"></span>
                        <span className=""></span>
                    </div>
                </div>
                <div className='form-board'>
                    <h3>Name your board.</h3>
                    <form onSubmit={handleSubmit}>
                        <Input
                            onChange={onChange}
                            value={name || ''}
                            name='name'
                            id='name'
                            placeholder='Enter Name'
                            error={error}
                        />

                        <div className='next-btn'>
                            <GoBtn text='Next' type='submit' />
                        </div>
                    </form>
                </div>

            </div>
        </div>
    );
}

export default BoardName;

