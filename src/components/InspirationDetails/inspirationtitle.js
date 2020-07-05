import React, { Component } from 'react';
import inspiredSlide from '../../Asset/Images/inspired_slide_item.png';
import SaveBtn from '../common/learnButton'
import './inspirationtitle.css';


class Inspirationtitle extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div className='container-fluid'>
                <div className='container' >
                    <div className="row">
                        <div className="col-sm-3">
                            <div className="image-fav">
                                <img src={inspiredSlide} alt="" />
                                <span className="icon"><img src={require('../../Asset/Images/favicon.png')} alt="favicon.png" /></span>
                            </div>
                        </div>
                        <div className="col-sm-9">
                            <div className="text-fav text-center">
                                <span>Designed by</span>
                                <h4>Designer Name</h4>
                                <ul className="menu-name">
                                    <li className="select_design"><select name="cars" id="cars">
                                        <option value="Add to Board">Add to Board</option>
                                        <option value="saab">Saab</option>
                                        <option value="mercedes">Mercedes</option>
                                        <option value="audi">Audi</option>
                                    </select></li>
                                    <li><SaveBtn /></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Inspirationtitle;