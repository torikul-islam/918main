import React, { useEffect, useState } from 'react';
import projectService from '../../services/projectService';
import GoBtn from '../common/goBtn';
import Input from '../common/input';
import './boardName.css';




const BoardName = (props) => {
    const { openModal } = props;
    const [name, setName] = useState('');
    const [error, setError] = useState(null);

    function onChange(e) {
        setName(e.target.value);
        setError(null);
    }


    async function handleSubmit(e) {
        e.preventDefault();
        const { data } = await projectService.getProject();
        if (name.trim() === '') {
            setError("Name filed can't be empty!")
        } else {
            const exists = data.find(p => p.name.toLowerCase() === name.toLowerCase());
            if (exists) {
                setError("You have already created a board with the given name. Please choose a different one!.")
            } else {
                let form = new FormData();
                form.append('name', name);
                form.append('room', 1);
                form.append('styles', 1);
                form.append('inspirations', 1);
                form.append('pieces', 10);
                try {
                    const newProject = await projectService.createProject(form);
                    const token = localStorage.getItem('token');
                    if (!token) {
                        openModal('signup', true);
                    } else {
                        window.location = '/workspace';
                    }
                } catch (ex) {
                    if (ex.response && (ex.response.status >= 500 && ex.response.status < 600)) {
                        setError("Unfortunately! The server is not responding at this moment. Please try again later.")
                    } else {
                        setError('Something wrong happened! try with correct information.')
                    }
                }

            }
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

