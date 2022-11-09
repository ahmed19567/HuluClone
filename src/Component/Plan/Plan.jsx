import React from 'react'
import { FaCheck } from 'react-icons/fa';
import { FaLine } from 'react-icons/fa';
import { FaArrowDown } from 'react-icons/fa';
 
import './plan.css'

function Plan() {
    return (
        <div className='plan'>
        <div className="plan_container">
            {/* start of header */}
            <div className="plan_header">
              <h1>Select Your Plan</h1>
              <div className="header_discription">
              No hidden fees, equipment rentals, or installation appointments.
              <br/>
              <strong>Switch plans or cancel anytime.^^</strong>
              </div>
            </div>
            {/* end of header */}
            {/* start of header container */}
            <div className="plan_header_container">
                <div className="header_container_div1">
                    <div className="header_container_div1_child">
                        <div className="bundle_header_with">
                            <div className="left_headline">
                                <div className="left_top_healdine"><span>BASE PLANS</span></div>
                                <div className="left_top_image">
                                <img src="https://www.hulu.com/static/hitch/static/logos/hulu-logo.svg" alt=""/>
                                </div>
                            </div>
                            <div className="toggle_container">
                                <div className="toggle_switch">
                                    <input type="text"/>
                                    <label htmlFor="" className='label'>
                                        <span></span>
                                    </label>
                                </div>
                            </div>
                            <div className="right_container">
                                    <div className="rightcontainer_div1">
                                        <p>Bundle / Save </p>
                                       <span>i</span>
                                    </div>
                                    <div className="rightcontainer_div2">
                                        <img src="https://www.hulu.com/static/hitch/static/logos/bundles-dark.svg" alt=""/>
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="header_container_div2">
                    <div className="hcdiv2_child1">
                        <div className="hcdiv2_child1_innerchild1">
                            <span>Most Popular</span>
                        </div>
                        <div className="hcdiv2_child1_innerchild2">
                            <p className='p'>30 DAY FREE TRIAL</p>
                        </div>
                        <div className="hcdiv2_child1_innerchild3">
                            <p className='hulu_p'>HULU</p>
                        </div>
                        <div className="hcdiv2_child1_innerchild4">
                            <button><span>$6.99 / Month</span></button>
                        </div>
                    </div>
                    <div className="hcdiv2_child2">
                    <div className="hcdiv2_child1_innerchild1 hidden">
                            {/* <span>Most Popular</span> */}
                        </div>
                        <div className="hcdiv2_child1_innerchild2">
                            <p className='p'>30 DAY FREE TRIAL</p>
                        </div>
                        <div className="hcdiv2_child1_innerchild3">
                            <p className='hulu_p'>HULU (No Ads)</p>
                        </div>
                        <div className="hcdiv2_child1_innerchild4">
                            <button><span>$12.99 / Month</span></button>
                        </div>
                    </div>
                </div>
            </div>
           {/* end of header container  1*/}
                <div className="plan_feature">
                    <div className="plan_feature_item">
                        <div className="plan_feature_item_one ch">
                            <span>Monthly Price</span>
                        </div>
                        <div className="plan_feature_item_two ch">
                            <span>$6.99/mo.</span>
                        </div>
                        <div className="plan_feature_item_three ch">
                        <span>$12.99/mo.</span>
                        </div>
                    </div>
                    {/* skjdjkdskjds     2*/}
                    <div className="plan_feature_item">
                        <div className="plan_feature_item_one ch">
                            <span>Streaming Library with thousands of TV episodes and movies </span>
                        </div>
                        <div className="plan_feature_item_two ch">
                            <p><FaCheck/> </p>
                        </div>
                        <div className="plan_feature_item_three ch ch2">
                        <p><FaCheck/></p>
                        </div>
                    </div>
                    {/* jkskhsdkds     3*/}
                    <div className="plan_feature_item">
                        <div className="plan_feature_item_one ch">
                            <span>Most new episodes the day after they air^</span>
                        </div>
                        <div className="plan_feature_item_two ch">
                            <p><FaCheck/></p>
                        </div>
                        <div className="plan_feature_item_three ch">
                        <p><FaCheck/></p>
                        </div>
                    </div>
                    {/* 44444444 */}
                    <div className="plan_feature_item">
                        <div className="plan_feature_item_one ch">
                            <span>Access to award-winning Hulu Originals</span>
                        </div>
                        <div className="plan_feature_item_two ch">
                            <p><FaCheck/></p>
                        </div>
                        <div className="plan_feature_item_three ch">
                        <p><FaCheck/></p>
                        </div>
                    </div>
                    {/*  dsdsghdshgdghs 55555*/}
                    <div className="plan_feature_item">
                        <div className="plan_feature_item_one ch">
                            <span>Watch on your TV, laptop, phone, or tablet</span>
                        </div>
                        <div className="plan_feature_item_two ch">
                            <p><FaCheck/></p>
                        </div>
                        <div className="plan_feature_item_three ch">
                        <p><FaCheck/></p>
                        </div>
                    </div>
                    {/*  dsdsghdshgdghs*/}
                    <div className="plan_feature_item">
                        <div className="plan_feature_item_one ch">
                            <span>Up to 6 user profiles</span>
                        </div>
                        <div className="plan_feature_item_two ch">
                            <p><FaCheck/></p>
                        </div>
                        <div className="plan_feature_item_three ch">
                        <p><FaCheck/></p>
                        </div>
                    </div>
                    {/*  dsdsghdshgdghs*/}
                    <div className="plan_feature_item">
                        <div className="plan_feature_item_one ch">
                            <span>Watch on 2 different screens at the same time</span>
                        </div>
                        <div className="plan_feature_item_two ch">
                            <p><FaCheck/></p>
                        </div>
                        <div className="plan_feature_item_three ch">
                        <p><FaCheck/></p>
                        </div>
                    </div>
                    {/*  dsdsghdshgdghs     6666*/}
                    <div className="plan_feature_item">
                        <div className="plan_feature_item_one ch">
                            <span>No ads in streaming library</span>
                        </div>
                        <div className="plan_feature_item_two ch">
                        <p className='pushinp'></p>

                        </div>
                        <div className="plan_feature_item_three ch">
                        <p><FaCheck/></p>
                        </div>
                    </div>
                    {/*  dsdsghdshgdghs 7777*/}
                    <div className="plan_feature_item">
                        <div className="plan_feature_item_one ch">
                            <span>Download and watch</span>
                        </div>
                        <div className="plan_feature_item_two ch">
                            <p className='pushinp'></p>
                        </div>
                        <div className="plan_feature_item_three ch">
                        <p><FaCheck/></p>
                        </div>
                    </div>
                    {/*  dsdsghdshgdghs 7777*/}
                    
                </div>
       
       
            <div className="dis_claimer">
                <span>^For current-season shows in the streaming library only</span>
            </div>
            <div className="dis_claimer_switches">
                <span>^^Switches from Live TV to Hulu take effect as of the next billing cycle</span>
            </div>

            <div className="show_add_on">
                <div className="show_add_on_child">
                    <span>Show Add-ons</span>
                    <p>
                    <FaArrowDown/>
                </p>
                </div>
              

            </div>
        </div>
      </div>
    )
}

export default Plan
