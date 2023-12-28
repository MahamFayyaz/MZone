import React from 'react'
import Navbarone from "../../Essentials/Navbarone";
import Image from "next/image";
import i1 from "/img/Group 1171275867.png"
import i2 from "/img/Group 1171275857.png"
import i3 from "/img/pincyle.png"
import i4 from "/img/pincyle.png"
import i5 from "/img/pincyle.png"
import i6 from "/img/pincyle.png"
import i7 from "/img/pincyle.png"
export default function Settings() {
  return (
    <div>
        <Navbarone/>
        <div style={{backgroundColor: '#EBEBEB',paddingTop: '100px',height: "900px"}}>
          <div className="container">
            <div style={{backgroundColor: 'white',height: "700px"}}>
                <div  className="row">
                    <div className="col-lg-3 Notication">
                        <div className="saved">
                            <Image src={i1} alt=""/>
                            <p style={{fontSize: '15px',fontWeight: "500"}}>James Bond</p>
                            <p style={{fonSize: '13px',fontWeight: '400',marginTop: "-18px"}}>jamesbond007@gmail.com</p>
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
                                <a style={{color: "black"}} href="/Pages/Settings">
                                    <div className="maniu activen">
                                        <span><i className="fa-solid fa-gear"></i></span>
                                         <p>Setting</p>
                                     </div>
                                </a>
                               </div> 
                               <div className="col-lg-12">
                                <a style={{color: "black"}} href="/Pages/VerifyYourIdentity">
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
                                <h2 style={{fontSize: '20px',fontWeight: '700',marginLeft: "20px"}}>Setting</h2>
                                </div>
                            <hr/>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="setting-fom">
                                        <span><Image src={i2} alt=""/></span>
                                    <div>
                                        <p style={{fontWeight: '600',paddingTop: "10px"}}>James Bond</p>
                                        <p style={{color:  '#666666',marginTop: "-15px"}}>jamesbond007@gmail.com</p>
                                    </div>
                                </div>
                                <hr/>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-4 d-flex justify-content-center flex-column align-items-center">
                                           <div style={{position: "relative"}} >
                                            <label className="label-type" for="">Full Name</label>
                                            <input className="in-type" type="text" placeholder="James Bond"/>
                                            <Image style={{position: 'absolute',right: '17px',top: "47px"}} src={i3} alt=""/>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 d-flex justify-content-center flex-column align-items-center">
                                           <div style={{position: "relative"}} >
                                            <label className="label-type" for="">Email</label>
                                            <input className="in-type" type="text" placeholder="johndeo245@gmail.com"/>
                                            <Image style={{position: 'absolute',right: '17px',top: "47px"}} src={i4} alt=""/>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 d-flex justify-content-center flex-column align-items-center">
                                           <div style={{position: "relative"}} >
                                            <label className="label-type" for="">Phone Number</label>
                                            <input className="in-type" type="text" placeholder="+1 *** 2982 4544"/>
                                            <Image style={{position: "absolute",right: '17px',top: "47px"}} src={i5} alt=""/>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 d-flex justify-content-center flex-column align-items-center">
                                           <div style={{position: 'relative',paddingTop: "20px"}} >
                                            <label className="label-type" for="">Government ID </label>
                                            <input className="in-type" type="text" placeholder="National ID Card"/>
                                            <Image style={{position: 'absolute',right: '17px',top: "66px"}} src={i6} alt=""/>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 d-flex justify-content-center flex-column align-items-center">
                                           <div style={{position: 'relative',paddingTop: "20px"}} >
                                            <label className="label-type" for="">Address</label>
                                            <input className="in-type" type="text" placeholder="Not Provided"/>
                                            <Image style={{position: 'absolute',right: '17px',top: "66px"}} src={i7} alt=""/>
                                        </div>
                                        </div>
                                        <div className="col-lg-4 d-flex justify-content-center flex-column align-items-center">
                                           <div style={{position: 'relative',paddingTop: "20px"}} >
                                            <label className="label-type" for="">Password</label>
                                            <input className="in-type" type="Password" placeholder="****************"/>
                                           <a style={{position: 'absolute',right: '17px',top: '66px',textDecoration: 'underline !important',color: "black"}} href="">change</a>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                    </div>
            </div>
           </div>
        </div></div>
    </div>
  )
}
