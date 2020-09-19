import React, { useState, useEffect } from 'react';
import projectServices from '../../services/projectService';
import GoBtn from '../common/goBtn';
import './inspirationTitle.css';




function InspirationTitle(props) {
    const { inspired, inspirationLike, clickInspirationLike, openModal } = props

    const [project, setProject] = useState([]);
    const [selectedValue, setSelectedValue] = useState(null);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');
    const [gotoBoard, setGotoBoard] = useState(false);
    const [selectedProject, setSelectedProject] = useState(null);

    useEffect(() => {
        (async function () {
            if (token) {
                let { data } = await projectServices.getProject();
                if (data.length > 0) {
                    let findActive = data.find(a => a.is_active === true);
                    if (!findActive) {
                        findActive = { ...data[0], is_active: true };
                    }
                    data = data.filter((x, i, a) => (a.findIndex(t => (t.name.toLowerCase() === x.name.toLowerCase())) === i) && findActive.name.toLowerCase() !== x.name.toLowerCase());
                    setProject([{ ...findActive }, ...data]);
                }
            }
        }
        )()
    }, [token]);


    function addToBoard(inspiration) {
        let data = new FormData();
        if (selectedValue) {
            data.append('project', project.find(p => p.is_active === true).uuid);
            data.append('x_percent', .5);
            data.append('y_percent', .5);
            data.append('z', 0);
            data.append('width', 200);
            data.append('height', 150);
            data.append('inspiration', inspiration.uuid);
            projectServices.addedItemToWorkspace(data);
            setGotoBoard(true);
        } else {
            setError('Please! select one board.');
        }
    }

    function handleChange(e) {
        const found = project.find(x => x.uuid === e.target.value);
        if (found) {
            setSelectedProject(e.target.value);
            setSelectedValue(found.name);
            setError(null);
        }
        projectServices.activeProject(e.target.value);
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
                                                        <option key={i} value={item.uuid}>{item.name}</option>
                                                    )}
                                                </select>
                                            </li>
                                            <li className="saveSection">
                                                <GoBtn text='Save' onClick={() => addToBoard(item)} />
                                            </li>
                                            {error && <h6 className='board-error'>{error}</h6>}
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