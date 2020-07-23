import React from 'react';
import './inspirationFilter.css';




const InspirationFilter = (props) => {
    const { openModal, closeModal } = props
    return (

        <div className='container'>
            <div className='inspired-fil'>
                <div className='cross-icon' onClick={closeModal}>
                    <img src={require('../../../Asset/Icons/cross.png')} alt="" />
                </div>
                <div className="container">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#home">Room</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#menu1">Style</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="home" className="container tab-pane active"><br />
                            <ul className="list-categroy">
                                <li><button>Living Room</button></li>
                                <li><button>Dining Room</button></li>
                                <li><button>Bedroom</button></li>
                                <li><button>Office</button></li>
                                <li><button>Kitchen</button></li>
                                <li><button>Bathroom</button></li>
                                <li><button>Entryway</button></li>
                                <li><button>Outdoor</button></li>
                                <li><button>Kids’ Room</button></li>
                            </ul>
                        </div>
                        <div id="menu1" className="container tab-pane fade"><br />
                            <ul className="list-categroy">
                                <li><button>Farmhouse</button></li>
                                <li><button>Casual</button></li>
                                <li><button>Traditional</button></li>
                                <li><button>Modern</button></li>
                                <li><button>Bohemian</button></li>
                                <li><button>Eclectic</button></li>
                                <li><button>Glam</button></li>
                                <li><button>Rustic</button></li>
                                <li><button>Transitional</button></li>
                                <li><button>Midcentury Modern</button></li>
                                <li><button>Vintage</button></li>
                                <li><button>Masculine</button></li>
                            </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default InspirationFilter;