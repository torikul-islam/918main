import React, { useState, useEffect } from 'react';
import projectServices from '../../services/projectService';
import GoBtn from '../common/goBtn';
import './inspirationTitle.css';




function InspirationTitle(props) {
    const { inspired, inspirationLike, clickInspirationLike, openModal } = props

    const [project, setProject] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null);
    const token = localStorage.getItem('token');
    const [gotoBoard, setGotoBoard] = useState(false);


    useEffect(() => {
        (async function () {
            if (token) {
                let { data } = await projectServices.getProject();
                const board = localStorage.getItem('boardName');
                if (board) {
                    data = [...data, { name: board }]
                }
                data = data.filter((x, i, a) => a.findIndex(t => (t.name.toLowerCase() === x.name.toLowerCase())) === i);
                setProject(data);
            }
        })()
    }, [token]);


    function addToBoard(product) {
        let data = new FormData();
        if (selectedValue) {
            data.append('name', selectedValue);
            data.append('room', product.rooms[0]);
            data.append('styles', product.styles[0]);
            data.append('inspirations', 4);
            data.append('pieces', 1);
        }
        projectServices.createProject(data);
        setGotoBoard(true);
    }

    function handleChange(event) {
        setSelectedValue(event.target.value)
    }

    if (inspired.length > 0) {
        const isLike = inspirationLike.some(el => el.inspiration.uuid === inspired[0].uuid);
        if (isLike) {
            inspired[0]['is_like'] = true;
        } else {
            inspired[0]['is_like'] = false
        }
    }


    return (
        <div className='container-fluid mb-5 marginnine'>
            <div className='container' >
                {inspired.map(item =>
                    <div className="row" key={item.uuid}>
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4">
                            <div className="image-fav">
                                <img src={item.ref_img} alt="" />
                                <span className='icon' >
                                    <i
                                        onClick={() => clickInspirationLike(item)}
                                        style={{ cursor: "pointer" }}
                                        className={`fa-2x ${item.is_like ? 'fa fa-heart' : 'fa fa-heart-o'}`}
                                        aria-hidden="true"
                                    />
                                </span>
                            </div>
                        </div>
                        <div className="col-sm-6 inspire-ttl">
                            {!token ? (<div className='text-fav text-center'>
                                <span>Designed by </span>
                                <h4>{item.designed_by}</h4>
                                <h6>Want to add this item to a moodboard ?</h6>
                                <GoBtn text="Sign Up" type='button' onClick={() => openModal('signup')} />
                            </div>) :
                                (<div className="text-fav text-center">
                                    <span>Designed by </span>
                                    <h4>{item.designed_by}</h4>
                                    {gotoBoard ? <ul className="menu-name">
                                        <li className="select_design">
                                            <select name="cars" id="cars">
                                                <option value="">Saved to {selectedValue}</option>
                                            </select>
                                        </li>
                                        <li className="saveSection">
                                            <GoBtn text='Go to Board' onClick={() => props.history.push('/workspace')} />
                                        </li>
                                    </ul> :
                                        <ul className="menu-name">
                                            <li className="select_design">
                                                <select name="cars" id="cars" onChange={handleChange}>
                                                    <option value="">Add to Board</option>
                                                    {project.map((item, i) =>
                                                        <option key={i} value={item.name}>{item.name}</option>
                                                    )}
                                                </select>
                                            </li>
                                            <li className="saveSection">
                                                <GoBtn text='Save' onClick={() => addToBoard(item)} />
                                            </li>
                                        </ul>}
                                </div>)
                            }

                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}


export default InspirationTitle;