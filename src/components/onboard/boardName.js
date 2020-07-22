import React, { Component } from 'react';
import GoBtn from '../common/goBtn';
import Input from '../common/input';
import './boardName.css';


class BoardName extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }


    handleSubmit = (e) => {
        e.preventDefault();
    };
    clickBoardName = () => {
        this.props.openModal('createBoard')
    }

    render() {
        const { closeModal, openModal } = this.props;

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
                        <form onSubmit={this.handleSubmit}>
                            <Input name='name' id='name' placeholder='Enter Name' />

                            <div className='next-btn'>
                                <GoBtn text='Next' onClick={this.clickBoardName} />
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        );
    }
}

export default BoardName;