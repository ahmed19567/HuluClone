import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';

import './footer.css'

function Footer() {
    return (
        <footer className='footer'>
         <div className="footer_width">
             <div className="hulu_footer">
                 <div className="rowone_footer">
                     <div className="rowone_child1">
                         <h3>BROWSE</h3>
                         <div className="rowone_child1_innercontainer">
                              <div className="div1">
                                  <a href="#">
                                    <p>Streaming Library</p>
                                  </a>
                                  <a href="#">
                                    <p>Live TV</p>
                                  </a>
                                  <a href="#">
                                    <p>Live News</p>
                                  </a>
                                  <a href="#">
                                    <p>Live Sports</p>
                                  </a>
                              </div>
                              <div className="div1">
                              <a href="#">
                                    <p>Tv Shows</p>
                                  </a>
                                  <a href="#">
                                    <p>Movies</p>
                                  </a>
                                  <a href="#">
                                    <p>Originals</p>
                                  </a>
                                  <a href="#">
                                    <p>Networks</p>
                                  </a>
                                  <a href="#">
                                    <p>Kids</p>
                                  </a>
                                  <a href="#">
                                    <p>FX</p>
                                  </a>
                              </div>
                              <div className="div1">
                              <a href="#">
                                    <p>HBO Max</p>
                                  </a>
                                  <a href="#">
                                    <p>Cinemax</p>
                                  </a>
                                  <a href="#">
                                    <p>Showtime</p>
                                  </a>
                                  <a href="#">
                                    <p>Starz</p>
                                  </a>
                              </div>
                              <div className="div1">
                              <a href="#">
                                    <p>Hulu, Disney+, and ESPN+</p>
                                  </a>
                                  <a href="#">
                                    <p>Hulu (No Ads), Disney+, and ESPN+</p>
                                  </a>
                                  <a href="#">
                                    <p>Student Discount</p>
                                  </a>
                                 
                              </div>
                         </div>
                     </div>

                     <div className="rowone_child2">
                         <h3>HELP</h3>
                         <div className="div2">
                             <a href="#">
                                 <p>Account & Billing</p>
                             </a>
                             <a href="#">
                                 <p> Plans & Pricing </p>
                             </a>
                             <a href="#">
                                 <p>Supported Devices</p>
                             </a>
                             <a href="#">
                                 <p>Accesibility</p>
                             </a>
                         </div>
                     </div>
                     <div className="rowone_child3">
                         <h3>ABOUT US</h3>
                         <div className="div3">
                             <a href="#">
                                 <p>Shop Hulu</p>
                             </a>
                             <a href="#">
                                 <p>Press</p>
                             </a>
                             <a href="#">
                                 <p>Jobs</p>
                             </a>
                             <a href="#">
                                 <p>Contact</p>
                             </a>
                         </div>
                     </div>
                 </div>
                 <div className="rowtwo_footer">
                     <div className="icon_container">
                         <div className="icon">
                             <a href="#">
                                 <p><FaFacebookF className='ic'/></p>
                             </a>
                             <a href="#">
                                 <p><FaTwitter className='ic'/></p>
                             </a>
                             <a href="#">
                                 <p><FaYoutube className='ic'/></p>
                             </a>
                             <a href="#">
                                 <p><FaInstagram className='ic'/></p>
                             </a>
                         </div>
                     </div>


                     <div className="legal_link">
                         <div className="link">
                             <p>2022 Hulu, LLC</p>
                         </div>
                         <div className="link">
                             <p>About Ads</p>
                         </div>
                         <div className="link">
                             <p>Terms of use</p>
                         </div>
                         <div className="link">
                             <p>Privacy Policy</p>
                         </div>
                         <div className="link">
                             <p>Do Not Sell My Personal Information</p>
                         </div>
                         <div className="link">
                             <p>Your California Privacy Right</p>
                         </div>
                         <div className="link">
                             <p>Tv Personal Guildelines</p>
                         </div>
                         <div className="link">
                             <p>Sitemap</p>
                         </div>
                     </div>
                     
                     </div>
             </div>
         </div>
        </footer>
       
    )
}

export default Footer
