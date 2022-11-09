import React,{useState} from 'react'
import './spot.css'
function Spotlight() {
    const [value, setValue] = useState(true)
    const[name, setNames] = useState('spotlight_span')

    function setName(e){
    //    setNames((prev)=>prev=)
    console.log(e.target)
    }
    return (
        <div className='spotlight'>
            <div className="spotlight_outtercontainer">
                <div className="spotlight_innercontainer">
                    <div className="tab_button">
                        <button className="spotlight_btn active">
                            <span className={name} onClick={setName}>
                                Live sports
                            </span>
                        </button>
                        <button className="spotlight_btn">
                        <span className="active ">
                                Breaking News
                            </span>
                        </button>
                        <button className="spotlight_btn">
                        <span className="active">
                                Biggest Events
                            </span>
                        </button>
                    </div>
                    {/* This is the tab content */}
                    <div className="tab_content">
                       <div className="tab_content_container">
                           <div className="tab_content_headline">
                               <span>Live Sports</span>
                           </div>
                           <div className="tab_content_subheadline">
                               <span className='tab_content_subheadline_span' >Catch your games at home or on the go. Stream live games
                                   from major college and pro leagues including the NCAA, NBA, NHL,
                                   NFL, and more.
                               </span>
                           </div>
                       </div>
                    </div>

                    {/* logo content */}
                    <div className="tabcontent_logorow">
                        <div className="logorowchild">
                            <div className="wall">
                                <img src="https://www.hulu.com/static/hitch/s3/attachments/cka35rzv205t90wgfxa4wz4q5-cbs-sports-network-logo-1.png" alt=""/>
                            </div>
                        </div>
                        <div className="logorowchild">
                        <div className="wall">
                            <img src="https://www.hulu.com/static/hitch/s3/attachments/cka358szb054x0whh8qejv0m9-espn-network-logo.png" alt=""/>
                        </div>
                        </div>
                        <div className="logorowchild">
                        <div className="wall">
                            <img src="https://www.hulu.com/static/hitch/s3/attachments/cka359jx805870wfx5lh6g69s-foxsports1-network-logo-0.svg" alt=""/>
                        </div>
                        </div>
                        <div className="logorowchild">
                        <div className="wall">
                            <img src="https://www.hulu.com/static/hitch/s3/attachments/ckrp67fa801rn1u0tr0tnice2-nfl140x80.png" alt=""/>
                        </div>
                        </div>

                    </div>
                    <div className="tvplanrequired">
                        <p>Live Tv plan required. Regional restrictions,
                            blackouts and additional terms apply. 
                             <a href="#">See details</a>
                        </p>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default Spotlight
