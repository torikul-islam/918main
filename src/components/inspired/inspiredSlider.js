import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';
import GoBtn from '../common/goBtn';
import roomServices from '../../services/roomServices';
import './inspiredSlider.css';




function InspiredSlider(props) {
    const [inspired, setInspired] = useState({ count: null, next: null, previous: null, results: [] });
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);
    const [rooms, setRooms] = useState([]);
    const [selectedItem, setSelectedItem] = useState(null);


    useEffect(() => {
        (async function () {
            const { data } = await roomServices.getAllRooms();
            setRooms(data.results);
            setSelectedItem(data.results[0].pk);
            getInspiredByPiecesId(data.results[0].pk)
        })()
    }, []);

    async function getInspiredByPiecesId(id) {
        const { data } = await roomServices.getRoomsByIds(id);
        setInspired({ count: data.count, next: data.next, previous: data.previous, results: data.results });
    }
    function onItemSelect(item) {
        setSelectedItem(item.pk);
        getInspiredByPiecesId(item.pk);
        setCurrentPage(0);
    }

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        window.addEventListener('load', handleResize);
        window.addEventListener("scroll", handleResize);
    });

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4);
        }
    }

    async function onPageChange(val) {
        const diff = inspired.results.length - (currentPage * pageSize * 2);
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            if (diff < pageSize && inspired.next !== null) {
                const { data } = await roomServices.getRoomByUrl(inspired.next.split('?')[1]);
                setInspired({ count: data.count, next: data.next, previous: data.previous, results: [...inspired.results, ...data.results] });
            }
            setCurrentPage(currentPage + 1)
        }
    }

    const inspiredPaginate = paginate(inspired.results, currentPage, pageSize);

    return (
        <div className="inspired-slider">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h4>Be Inspired</h4>
                        <ul >
                            {rooms.map(item =>
                                <li
                                    onClick={() => onItemSelect(item)}
                                    className={item.pk === selectedItem ? 'disable active' : 'pointer'}
                                    key={item.uuid}>
                                    {item.name.toUpperCase()}
                                </li>
                            )}
                        </ul>
                    </div>
                </div>

                {inspiredPaginate && <div className='slider-main'>
                    <div className='row'>
                        {inspiredPaginate.map(item =>
                            <div className="col-lg-3 col-md-3 col-sm-12" key={item.uuid} >
                                <div className="image-slide">
                                    <Link to={`/inspired-details/${item.uuid}/${item.rooms[0]}`} className='remove-u-line' >
                                        <img src={item.ref_img} alt="" />
                                        <h6>{item.designed_by}</h6>
                                    </Link>
                                </div>
                            </div>)}
                        <Pagination
                            itemsCount={inspired.count}
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