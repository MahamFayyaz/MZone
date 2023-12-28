import React from 'react'
import Image from 'next/image'
import Navbarone from '../../Essentials/Navbarone'
import i1 from "/img/Group 1171275867.png"
import i2 from "/img/minus.png"
import i3 from "/img/minus.png"
import i4 from "/img/minus.png"
import i5 from "/img/minus.png"
import i6 from "/img/minus.png"

export default function FAQ() {
  return (
    <div>
    <Navbarone/>
    <div className="container">
    <div style={{backgroundColor: 'white',height: "700px"}}>
        <div  className="row">
            <div className="col-lg-3 Notication">
                <div className="saved">
                    <Image src={i1} alt=""/>
                    <p style={{fontSize: '15px',fontWeight: '500'}}>James Bond</p>
                    <p style={{fontSize: '13px',fontWeight: '400',marginTop: '-18px'}}>jamesbond007@gmail.com</p>
                </div>
                    <div className="row">
                       <div className="col-lg-12">
                        <a style={{color: 'black'}} href="/Pages/MyAdvert">
                            <div className="maniu">
                                <span><i className="fa-solid fa-house"></i></span>
                                 <p>My adverts</p>
                             </div>
                        </a>
                       </div> 
                       <div className="col-lg-12">
                        <div className="maniu">
                           <span><i className="fa-solid fa-laptop-code"></i></span>
                            <p>Feedback</p>
                        </div>
                       </div> 
                       <div className="col-lg-12">
                        <a style={{color: 'black'}} href="/Pages/FAQ">
                            <div className="maniu activen">
                                <span><i className="fa-regular fa-clock"></i></span>
                                 <p>FAQ’s</p>
                             </div>
                        </a>
                       </div> 
                       <div className="col-lg-12">
                       <a style={{color: 'black'}} href="/Pages/Settings">
                        <div className="maniu">
                            <span><i className="fa-solid fa-gear"></i></span>
                             <p>Setting</p>
                         </div>
                       </a>
                       </div> 
                       <div className="col-lg-12">
                        <a style={{color: 'black'}} href="/Pages/VerifyYourIdentity">
                            <div className="maniu">
                                <span><i className="fa-solid fa-arrow-right-from-bracket"></i></span>
                                 <p>Logout</p>
                             </div>
                        </a>
                       </div> 
                    </div>
                    
                </div>
                <div className="col-lg-9">
                    <div className="my-saved">
                        <h2 style={{fontSize: '20px',fontWeight: '600',marginLeft: '20px'}}>Frequently Ask Questions</h2>
                        </div>
                    <hr/>
                   <div className="row">
                    <div className="col-lg-10">
                        <div className="lorem-para">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           <span><Image src={i2} alt=""/></span>
                        </div>
                        <p style={{padding: "18px"}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </div>
                    <div className="col-lg-10">
                        <div className="lorem-para">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           <span><Image src={i3} alt=""/></span>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="lorem-para">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           <span><Image src={i4} alt=""/></span>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="lorem-para">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           <span><Image src={i5} alt=""/></span>
                        </div>
                    </div>
                    <div className="col-lg-10">
                        <div className="lorem-para">
                           <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                           <span><Image src={i6} alt=""/></span>
                        </div>
                    </div>
                   </div>
               
            </div>
    </div>
</div>
</div></div>
  )
}
