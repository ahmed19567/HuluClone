import React from 'react'
import bobburger from './Pics/bobburger.jpg'
import nineperfectstranger from './Pics/nineperfectstranger.jpg'
import usvsbillie from './Pics/usvsbillie.jpg'
import billions from './Pics/billions.jpg'
import './lib.css'
function Library() {
    return (
        <div className='library'>
            <div className="library_header">
                <div className="library_content">
                   <span className="eyebrow">
                       INCLUDED IN ALL PLANS
                   </span>
                   <h2 className="library_title">
                       All The TV You Love
                   </h2>
                   <p className="library_discription">
                       Stream full seasons of exclusive series, current-season episodes, hit movies, Hulu
                       Originals, kids shows, and more
                   </p>
                </div>
            </div>
            <div className="library-grid-container">
                <div className="library_grid">
                    <div className="library_grid_item">
                        <button className='library-grid-btn'>
                            <div className="library_item_wrapper">
                                <div className="library_item-gradient"></div>
                                <img src={bobburger} alt="" className="library_item_background"/>
                                <div className="library_item-overlay">
                                    <span className="library_item-eyebrow">Past & Current Seasons</span>
                                    <h3 className="library-item-category">
                                        TV Shows
                                    </h3>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* div 2 */}
                    <div className="library_grid_item">
                        <button className='library-grid-btn'>
                            <div className="library_item_wrapper">
                                <div className="library_item-gradient"></div>
                                <img src={usvsbillie} alt="" className="library_item_background"/>
                                <div className="library_item-overlay">
                                    <span className="library_item-eyebrow">New & Classic</span>
                                    <h3 className="library-item-category">
                                        Movies
                                    </h3>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* div 3 */}
                    <div className="library_grid_item">
                        <button className='library-grid-btn'>
                            <div className="library_item_wrapper">
                                <div className="library_item-gradient"></div>
                                <img src={nineperfectstranger} alt="" className="library_item_background"/>
                                <div className="library_item-overlay">
                                    <span className="library_item-eyebrow">Groundbreaking</span>
                                    <h3 className="library-item-category">
                                        Hulu Originals
                                    </h3>
                                </div>
                            </div>
                        </button>
                    </div>

                    {/* div 4 */}

                    <div className="library_grid_item">
                        <button className='library-grid-btn'>
                            <div className="library_item_wrapper">
                                <div className="library_item-gradient"></div>
                                <img src={billions} alt="" className="library_item_background"/>
                                <div className="library_item-overlay">
                                    <span className="library_item-eyebrow">Add-on</span>
                                    <h3 className="library-item-category">
                                        Premiums
                                    </h3>
                                </div>
                            </div>
                        </button>
                        <span className='premium-library-items-legal'>
                            Premium network add-ons available for an additional cost
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Library
