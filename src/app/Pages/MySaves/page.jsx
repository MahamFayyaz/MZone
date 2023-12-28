import React from 'react'
import Image from "next/image";
import i1 from "/img/Group 1171275867.png" 
import i2 from "/img/Rectangle 23006 (5).png"
import i3 from "/img/ppp.png"
import i4 from "/img/Rectangle 23006 (5).png"
import i5 from "/img/ppp.png"
import Navbarone from '../../Essentials/Navbarone';
export default function MySaves() {
  return (
    <div>
        <Navbarone/>
    <div style={{backgroundColor:'#EBEBEB',paddingTop: '100px',height: '900px'}}>
          <div className="container">
            <div style={{backgroundColor:'white',height: '600px'}}>
                <div  className="row">
                    <div className="col-lg-3 block-mobile">
                        <div className="saved">
                            <Image src={i1} alt=""/>
                            <p style={{fontSize: '15px',fontWeight: '500'}}>James Bond</p>
                            <p style={{fontSize: '13px',fontWeight: '400',marginTop: '-18px'}}>jamesbond007@gmail.com</p>
                        </div>
                            <div className="row">
                               <div className="col-lg-12">
                                <a style={{color: "black"}} href="/Pages/MyAdvert">
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
                               <a style={{color: "black"}} href="/Pages/FAQ">
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
                                <h2 style={{fontSize: '20px',fontWeight: '600',paddingLeft: '10px'}}>My Saved</h2>
                                <div className="d-flex gap-2">
                                    <button className="adverts">Adverts (1)</button>
                                    <button className="adverts2">Search (0)</button>
                                </div>
                            </div>
                            <hr/>
                            <div className="container">
                                <div className="col-lg-12" style={{backgroundColor: '#FAFAFA',paddingRight: '10px',padding: "10px"}}>
                                  <div className="row">
                                    <div className="col-lg-3">
                                        <Image style={{width: '100%'}} src={i2} alt=""/>
                                      </div>
                                      <div className="col-lg-9">
                                        <div className="d-flex justify-content-between">
                                            <p style={{fontSize: '18px',fontWeight: '500'}}>iPhone 13pro Case / Fashion iPhone X Case</p>
                                            <h2 className="ninini Notication" >₦2,340</h2>
                                        </div>
                                        <p>Lörem ipsum backslick konskop i transitflykting <br/> spoilervarning pseudongar. Blinga tesk. J</p>
                                        <div className="d-flex">
                                            <div style={{width: '500px',display: 'flex',gap: '5px'}}>
                                                <span><Image src={i3} alt=""/></span><p>Abuja, Asokoro</p>
                                            </div>
                                            <div  className="d-flex w-100 gap-3 justify-content-end" >
                                                <p className="nononon ">₦2,340</p>
                                            </div>
                                        </div>
                                        <div style={{display:'flex',justifyContent:'end'}}>
                                            <button className="Chat"> Chat</button>
                                            <button className="Chat2">Show Contact</button>
                                        </div>
                                            
                                        
                                        
                                      </div>
                                  </div>
                                </div>
                            </div>
                            <div className="container">
                                <div className="col-lg-12 Notication" style={{backgroundColor: '#FAFAFA',paddingRight: '10px',marginTop: '20px'}}>
                                  <div className="row">
                                    <div className="col-lg-3">
                                        <Image style={{width: "100%"}} src={i4} alt=""/>
                                      </div>
                                      <div className="col-lg-9">
                                        <div className="d-flex justify-content-between">
                                            <p style={{fontSize: '18px',fontWeight: '500'}}>iPhone 13pro Case / Fashion iPhone X Case</p>
                                            <h2 style={{fontSize: '28px',fontWeight: '700',color: '#1F999A'}}>₦2,340</h2>
                                        </div>
                                        <p>Lörem ipsum backslick konskop i transitflykting <br/> spoilervarning pseudongar. Blinga tesk. J</p>
                                        <div className="d-flex">
                                            <div style={{width: '500px',display: 'flex',gap: '5px'}}>
                                                <span><Image src={i5} alt=""/></span><p>Abuja, Asokoro</p>
                                            </div>
                                            <div  className="d-flex  justify-content-end w-100 gap-3">
                                                <button className="Chat"> Chat</button>
                                            <button className="Chat2">Show Contact</button>
                                            </div>
                                        
                                        </div>
                                      </div>
                                  </div>
                                </div>
                            </div>
                        
                        </div>
                    </div>
               
            </div>
        </div>
        </div>
    </div>
  )
}
