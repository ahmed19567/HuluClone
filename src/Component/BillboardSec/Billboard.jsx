import React from 'react'
import { FaAmilia } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';

import './billboar.css'

function Billboard() {
    return (
        <div className='billboard'>
            <div className="">
                <div className="billboard_container">
                     <div className="billboaed_eyebrow">
                         HULU + LIVE TV,NOW WITH DISNEY+ AND ESPN+
                     </div>
                     <h2 className='billboard_headline'>Live TV Makes It Better</h2>
                     <h3 className='billboard_subheadline'>
                     Make the switch from cable. Get 75+ top channels on Hulu 
                     with your favorite live sports, news, and events - plus 
                     the entire Hulu streaming library. With Unlimited DVR, store 
                     Live TV recordings for up to nine months and fast-forward through 
                     your DVR content. Access endless entertainment with Disney+ and live 
                     sports with ESPN+. All three for a new price of $69.99/month.
                     </h3>
                     <p className='billboard_disclaimer'>
                     18+ only. Regional restrictions, blackouts and <a href="#"> Live TV terms apply. </a>
                     Access content from each service <br/> separately and access ESPN+ content via Hulu. 
                     Location data required to watch certain content. Offer valid for eligible subscribers only. 
                     Unlimited DVR recording is not available for on-demand shows.

                     </p>
                     <button className="billboard-modalink">
                        VIEW CHANNELS IN YOUR AREA  <FaArrowRight/>
                     </button>
                     <button className='arrow-down'>
                         <FaArrowDown className='icon'/>
                     </button>
                </div>
            </div>
            
        </div>
    )
}

export default Billboard
