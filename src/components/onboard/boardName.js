import React, { Component } from 'react';
import GoBtn from '../common/goBtn';
import './boardName.css';
import Input from '../common/input';


class BoardName extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    handleSubmit = (e) => {
        e.preventDefault();
    };

    render() {
        return (
            <div className='container'>
                <div className='board-name'>
                    <div className='board-back'>
                        <img src={require('../../Asset/Icons/cross.png')} alt="" />
                    </div>
                    <div className='form-board'>
                        <h3>Name your board.</h3>
                        <form onSubmit={this.handleSubmit}>
                            <Input name='name' id='name' placeholder='Enter Name' />

                            <div className='next-btn'>
                                <GoBtn text='Next' />

                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default BoardName;