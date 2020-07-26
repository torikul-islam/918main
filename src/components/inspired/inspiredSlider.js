import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import GoBtn from '../common/goBtn';
import inspiredServices from '../../services/inspiredService';
import piecesService from '../../services/piecesService';
import piecesGroup from '../../utils/piecesGroup';
import './inspiredSlider.css';




function InspiredSlider(props) {
    const [inspired, setInspired] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [pieces, setPieces] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);




    useEffect(() => {
        (async function () {
            const { data } = await piecesService.getAllPieces();
            const pieces = piecesGroup(data.results);
            setPieces(pieces);
            setSelectedItem(pieces[0].id);
            getInspiredByPiecesId(pieces[0].id)
        })()
    }, []);

    async function getInspiredByPiecesId(id) {
        const { data } = await inspiredServices.getInspiredByRoomOrStyleId(`/?room_ids=${id}`);
        setInspired(data.results);
    }
    function onItemSelect(item) {
        setSelectedItem(item.id);
        getInspiredByPiecesId(item.id);
        setCurrentPage(0);
    }

    useEffect(() => window.addEventListener("resize", handleResize), []);

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4);
        }
    }

    function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }


    const inspiredPaginate = inspired && paginate(inspired, currentPage, pageSize);

    return (
        <div className="inspired-slider">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>Be Inspired</h4>
                        <ul>
                            {pieces.map(item => <li
                                onClick={() => onItemSelect(item)}
                                className={item.id === selectedItem ? 'disable active' : 'pointer'}
                                key={item.uuid}>{item.name.toUpperCase()}
                            </li>)}
                        </ul>
                    </div>
                </div>

                {inspiredPaginate && <div className='slider-main'>
                    <div className='row'>
                        {inspiredPaginate.map(item =>
                            <div className="col-lg-3 col-md-3 col-sm-12" key={item.uuid} >
                                <div className="image-slide">
                                    <Link to={`/inspired-details/${item.uuid}/${item.rooms[0]}`}>
                                        <img src={item.ref_img} alt="" />
                                    </Link>
                                    <Link to={`/inspired-details/${item.uuid}/${item.rooms[0]}`} style={{ textDecoration: 'none',color:"#000" }}>
                                    <h6>{item.designed_by}</h6>
                                    </Link>
                                </div>
                            </div>)}
                        <Pagination
                            itemsCount={inspired.length}
                            currentPage={currentPage}
                            pageSize={pageSize}
                            onPageChange={onPageChange}
                        />
                    </div>
                </div>}
            </div>

            <div className="inspired-more">
                <Link to='/inspired-more'>
                    <GoBtn text="See More" />
                </Link>
            </div>
        </div >
    );
}

export default InspiredSlider;