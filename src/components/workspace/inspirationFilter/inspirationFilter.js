import React, { useState } from 'react';
import './inspirationFilter.css';




const InspirationFilter = (props) => {
    const { closeModal } = props
    const [openTab, setOpenTab] = useState('room')
    function clickTab(name) {
        if (name === 'room') {
            setOpenTab('room');
        } else if (name === 'style') {
            setOpenTab('style');
        }
    }

    return (

        <div className='container'>
            <div className='inspired-fil'>
                <div className='cross-icon' onClick={closeModal}>
                    <img src={require('../../../Asset/Icons/cross.png')} alt="" />
                </div>
                <div className="container">
                    <ul className="nav nav-tabs" role="tablist">
                        <li className="nav-item">
                            <div className={`nav-link pointer ${openTab === 'room' ? 'active disable' : ''}`} data-toggle="tab" onClick={() => clickTab('room')}>Room</div>
                        </li>
                        <li className="nav-item">
                            <div className={`nav-link pointer ${openTab === 'style' ? 'active disable' : ''}`} data-toggle="tab" onClick={() => clickTab('style')}>Style</div>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <div id="home" className={`container tab-pane ${openTab === 'room' ? 'active' : 'fade'}`}><br />
                            <ul className="list-category">
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
                        <div id="menu1" className={`container tab-pane ${openTab === 'style' ? 'active' : 'fade'}`}>
                            <br />
                            <ul className="list-category">
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