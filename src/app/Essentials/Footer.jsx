import React from 'react'

export default function Footer () {
  return (
    <div>
    <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-6">
                        <div className="footer-col">
                           <ul>
                            <li>
                                <p style={{color: 'white'}}>About us</p>
                            </li>
                            <li><a href="#">About Mzone</a></li>
                            <li><a href="">Terms & Conditions</a></li>
                            <li><a href="">Privacy Policy </a></li>
                            <li><a href="">Billing Policy </a></li>
                            <li><a href="">Latest Ads</a></li>
                           </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="footer-col">
                            <ul>
                             <li>
                                 <p style={{color: 'white'}}>Support</p>
                             </li>
                             <li><a href="#">support@mzone.ug  </a></li>
                             <li><a href="">Safety tips  </a></li>
                             <li><a href="">Contact Us   </a></li>
                             <li><a href="/Pages/FAQ">FAQ </a></li>
                             
                            </ul>
                         </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="footer-col">
                            <ul>
                             <li>
                                 <p style={{color: 'white'}}>Our resources </p>
                             </li>
                             <li><a href="#">Mzone on FB </a></li>
                             <li><a href="">Our Instagram</a></li>
                             <li><a href="">Our YouTube </a></li>
                             <li><a href="">Our Twitter </a></li>
                            
                            </ul>
                         </div>
                    </div>
                    <div className="col-lg-3 col-6">
                        <div className="footer-col">
                            <ul>
                             <li>
                                 <p style={{color: 'white'}}> Hot links</p>
                             </li>
                             <li><a href="#">Mzone Products</a></li>
                             <li><a href="">Mzone Affiliate Program</a></li>
                             <li><a href="">Mzone Training </a></li>
                             <li><a href="Discover our blogs.html">Blog </a></li>
                            
                            </ul>
                         </div>
                    </div>
                </div>
            </div>
        </footer>
        <div style={{display: 'flex',justifyContent: 'center',marginTop: '10px'}}>
            <p>Copyrights 2023. All rights reserved</p>
        </div>
        </div>
        
  )
}
