import React from 'react'
import disneylogo from './Pics/disney.png'
 function Hero() {
    return (
        <div className="hero_wrapper">
             <div className='hero'>
          
           </div>
            <div className="herotopic_container">
                <div className="bundlewithanyplan">
                    BUNDLE WITH ANY HULU PLAN & SAVE
                </div>
                <h1 className='disneyimage'>
                <img src={disneylogo} alt=""/>
                </h1>
                <div className="endless_entertainment">
                    Get endless entertainment, live sports, and
                    the shows and movies you love
                </div>
                <div className="bundle_input">
                    <button>
                        GET THE DISNEY BUNDLE
                    </button>
                </div>

                <div className="disclaimer">
                    <button><strong>
                        What's Included?</strong>
                        </button>
                        <a href="#">
                            Bundle Items
                        </a>
                        <br/>
                        <div className="signuphulu">
                            <a href="#" className='signuphulu_atag'>
                                Sign up for Hulu only
                            </a>
                        </div>
                </div>

             </div>

        </div>
       
    )
}

export default Hero
