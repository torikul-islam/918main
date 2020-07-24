import React, { useEffect, useState } from 'react';
import Pagination from '../common/pagination';
import paginate from '../../utils/paginate';




const ShopModal = ({ product, products, closeModal }) => {
    console.log(products);
    const [currentPage, setCurrentPage] = useState(0);
    const [pageSize, setPageSize] = useState(4);

    if (products.length > 0) {
        const paginateProd = paginate(products, currentPage, pageSize);
    }

    function onPageChange(val) {
        if (val === '-') {
            setCurrentPage(currentPage - 1)
        } else {
            setCurrentPage(currentPage + 1)
        }
    }


    useEffect(() => window.addEventListener("resize", handleResize));

    function handleResize() {
        const width = window.innerWidth;
        if (width <= '767') {
            setPageSize(1);
        } else {
            setPageSize(4)
        }
    }
    return (
        <div className='container'>
            <div className='cross-icon' onClick={closeModal}>
                <img src={require('../../Asset/Icons/cross.png')} alt="" />
            </div>
            <div className='container-fluid mb-5 bg-white'>
                <div className='container' >
                    {product &&
                        <div className="row" key={product.uuid}>
                            <div className="col-sm-4">
                                <div className="image-fav">
                                    <img src={product.ref_img} alt="" />
                                    <span className="icon">
                                        <img src={require('../../Asset/Images/fav.png')} alt="fav.png" />
                                    </span>
                                </div>
                            </div>
                            <div className="col-sm-8">
                                <div className="text-fav text-center">
                                    <span>Product Name </span>
                                    <h4>{product.name}</h4>
                                    <ul className="menu-name">
                                        <li className="select_design">
                                            <select name="cars" id="cars">
                                                <option value="Add to Board">Add to Board</option>
                                                <option value="saab">Saab</option>
                                                <option value="mercedes">Mercedes</option>
                                                <option value="audi">Audi</option>
                                            </select>
                                        </li>

                                    </ul>
                                </div>
                            </div>
                        </div>
                    }

                    <div className='row'>
                        <div className="account-slider">
                            <div className="col-sm-12">
                                <h3>You may also like.</h3>
                            </div>

                            <div className='tab-index'>
                                <div className='slider'>
                                    <div className='row'>
                                        {/* {paginateProd && paginateProd.map((item, i) =>
                                            <div className='col-xl-3 col-lg-3 col-md-3 col-sm-12' key={i}>
                                                <img src={item.ref_img} alt="" />
                                                <h2>{item.retailer}</h2>
                                                <h6>${item.price}</h6>
                                            </div>
                                        )} */}

                                        <Pagination
                                            itemsCount={products.length}
                                            pageSize={pageSize}
                                            currentPage={currentPage}
                                            onPageChange={onPageChange}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>I
        </div>
        </div>
    );
}

export default ShopModal;