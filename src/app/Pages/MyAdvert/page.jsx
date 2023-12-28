import React from 'react'
import Navbarone from '../../Essentials/Navbarone'
import Image from "next/image";
import i1 from "/img/Group 1171275867.png"
import i2 from "/img/No data-pana 1.png"
export default function MyAdvert() {
  return (
    <div>
        <Navbarone/>
        <div style={{backgroundColor: '#EBEBEB',paddingTop: '100px',height: '900px'}}>
          <div className="container">
            <div style={{backgroundColor: 'white',height: '600px',position: 'relative'}}>
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
                                    <div className="maniu activen">
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
                                <div className="maniu">
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
                                <h2 style={{fontSize: '20px',fontWeight: '600'}}>My Advert</h2>
                                    <div>
                                        <a href=""><button className="adverts4">All</button></a>
                                    <button className="adverts5 ">Active</button>
                                    <button className="adverts6 Notication">Reviewing</button>
                                    <button className="adverts7 ">Declined</button>
                                    <button className="adverts8 Notication">Draft</button>
                                    <button className="adverts9 Notication">Closed</button>
                                    </div>
                                </div>
                            <hr/>
                            <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',textAlign: 'center',paddingTop: '40px'}}>
                                <Image src={i2} alt=""/>
                                <div style={{fontWeight: '500',fontSize: '22px',paddingTop: '10px'}}>
                                <p >There are no adverts yet. <br/>
                                    Create new one now! </p>
                                
                            </div>
                            <a href="/Pages/MyAdvert">
                                <button style={{width: '126px',height: '48px',backgroundColor: 
                            '#1F999A',borderRadius: '6px',color: 'white',border: '1px solid #1F999A'}}>Create Now</button>
                            
                            </a>
                       
                    </div>
            </div>
        </div>
        </div></div></div>
    </div>
  )
}
