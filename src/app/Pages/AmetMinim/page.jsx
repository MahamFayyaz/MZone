import React from 'react'
import Navbarone from '../../Essentials/Navbarone'
import Image from 'next/image'
import i1 from "/img/Ellipse 5.png"
import i2 from "/img/facebook-app-symbol.png"
import i3 from "/img/linkedin 1.png"
import i4 from "/img/bird.png"
import i5 from "/img/shar.png"
import i6 from "/img/pc cpu.png"
import i7 from "/img/facebook-app-symbol.png"
import i8 from "/img/linkedin 1.png"
import i9 from "/img/bird.png"
import i10 from "/img/Rectangle 23041.png"
import i11 from "/img/shar.png"
import i12 from "/img/Group 1171275857.png"
import i13 from "/img/tik icon.png"
import i14 from "/img/location.png"
import i15 from "/img/call (4).png"
import i16 from "/img/call (3).png"
import i17 from "/img/call (2).png"
import i18 from "/img/call (1).png"
import i19 from "/img/masg.png"
import i20 from "/img/call.png"
import i21 from "/img/linkedin.png"
import i22 from "/img/whatsapp.png"
import i23 from "/img/twitter.png"
import i24 from "/img/facebook-logo-2019.png"
import i25 from "/img/product-svgrepo-com 1.png"
import i26 from "/img/Group 2.png"
import i27 from "/img/Group 2.png"
import i28 from "/img/Group 2.png"
export default function AmetMinim() {
  return (
    <div>
        <Navbarone/>
        <div className="container">
        <div className="row">
            <div className="col-lg-12">
                <h1 style={{paddingTop: '100px',fontSize: '31px',fontWeight: "700"}}>Amet minim mollit no deserunt est sit
                    aliqua dolor do amet sint. </h1>
            </div>
            <div className="col-lg-12">
                <div className="img-chat-icon">
                    <div className="d-flex gap-2">
                        <span><Image src={i1} alt=""/></span>
                        <div>
                            <p className="benz">Benz Marco</p>
                            <p className="Technology">Technology & Ads <strong> . </strong> May 23, 2023</p>
                        </div>
                    </div>
                    <div className="is-ko-block i4-imgs">
                        <span><Image src={i2} alt=""/></span>
                        <span><Image src={i3} alt=""/></span>
                        <span><Image src={i4} alt=""/></span>
                        <span><Image src={i5} alt=""/></span>
                    </div>
                </div>
            </div>
            <div className="col-lg-12">
                <Image style={{width: "100%"}} src={i6} alt=""/>
            </div>
            <div className="col-lg-9">
                
                <div className="head-4">
                    <h1 style={{fontWeight: '700',fontSize: "24px"}}>Nostrud exercitation</h1>
                   <div className="and4img  i4-imgs-block" >
                    <span><Image src={i7} alt=""/></span>
                    <span><Image src={i8} alt=""/></span>
                    <span><Image src={i9} alt=""/></span>
                    <span><Image src={i11} alt=""/></span>
                   </div>
                </div>
                <p className="ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident.</p>
                <p className="ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <Image style={{width: "100%"}} src={i10} alt=""/>
                <p className="ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident.</p>
                <p className="ipsum">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
            </div>
            <div className="col-lg-3">

                <div className="col4">
                    <div className="col3">
                        <Image style={{width:"70px"}} src={i12} alt=""/>
                        <div><span style={{fontSize: '16px',fontWeight: "500"}}>James Bond</span><Image
                                style={{marginLeft: "10px"}} src={i13} alt=""/>
                            <p style={{color: "#666666"}}>Memer since: 2018</p>
                        </div>

                    </div>

                    <div style={{marginLeft: "20px"}}>
                        <Image src={i14} alt=""/><span style={{marginLeft: '10px',color: "#3B3B3B"}}>Nigeria,
                            Nigeria</span>
                    </div>
                    <div className="col5">
                        <Image src={i15} alt=""/><span style={{marginLeft: '10px',color: "#3B3B3B"}}>Verified
                            Seller</span>
                    </div>
                    <div className="col5">
                        <Image src={i16} alt=""/><span style={{marginLeft: '10px',color: "#3B3B3B"}}>Last Seen: 4
                            hours ago</span>
                    </div>
                    <div className="col5">
                        <Image src={i17} alt=""/><span
                            style={{marginLeft: '10px',color: "#3B3B3B"}}>Jamesbond45@gmail.com</span>
                    </div>
                    <div className="col5">
                        <Image src={i18} alt=""/><span style={{marginLeft: '10px',color: "#3B3B3B"}}>+1 478 343
                            987</span>
                    </div>
                    <a href="/Pages/ChatPageFour"> <button className="col-button2"><Image src={i19} alt=""/>Start
                            Chat</button></a>
                    <button className="col-button3"><Image src={i20} alt=""/>Show Contact</button>
                </div>
                <div className="share-it">
                    <div>
                        <p style={{fontSize: '16px',fontWeight: '500',marginLeft: '20px',paddingTop: "10px"}}>Share it</p>
                    </div>
                    <div className="share-app ">
                        <Image src={i21} alt=""/>
                        <Image src={i22} alt=""/>
                        <Image src={i23} alt=""/>
                        <Image src={i24} alt=""/>
                    </div>
                </div>
                <div className="Safety">
                    <div>
                        <p style={{fontSize: '16px',fontWeight: '500',marginLeft: '20px',paddingTop: "10px"}}>Safety Tips</p>
                    </div>
                    <div className="tips">
                        <p>1. Lorem ipsum dolor sit amet</p>
                        <p>2. Lorem ipsum dolor sit amet</p>
                        <p>3. Lorem ipsum dolor sit amet</p>
                        <p>4. Lorem ipsum dolor sit amet</p>
                        <p>5. Lorem ipsum dolor sit amet</p>
                    </div>
                </div>
                <div className="tips-button">
                    <a href="/Page/RequstPage">
                        <button className="col-button3"><Image src={i25} alt=""/>Request a
                            product</button>
                    </a>
                </div>
            </div>
            <div className="col-lg-12">
                <h1 className="nastrud">Similar Blogs</h1>
            </div>
            <div style={{marginTop: "20px"}} className="col-lg-4">
                <div className="camra-black2">
                    <div className="container">
                        <div style={{display: 'flex', justifyContent: 'end',paddingTop: "20px"}}>
                            <Image src={i26} alt=""/></div>
                        
                      <div style={{marginTop: "160px"}}>
                        <div className="bar-date" >
                            <p>May 23, 2023</p></div>
                        <p style={{color:  "#FFFFFF",fontSize: "14px",fontWeight: "400"}}>Technology & Ads</p>
                        <div className="para1-para2">
                            <p style={{fontSize: "18px",fontWeight: "500",color: "white"}}>Amet minim mollit no deserunt <br/>
                                est sit aliqua dolor do amet sint. </p>
                           
                        </div>
                    
                      </div>
                        
                    </div>
                </div>
            </div>
            <div style={{marginTop: "20px"}} className="col-lg-4">
                <div className="yellow-t2">
                    <div className="container">
                        <div style={{display: 'flex', justifyContent: 'end',paddingTop: "20px"}}>
                            <Image src={i27} alt=""/></div>
                        
                      <div style={{marginTop: "160px"}}>
                        <div className="bar-date" >
                            <p>May 23, 2023</p></div>
                        <p style={{color:  "#FFFFFF",fontSize: "14px",fontWeight: "400"}}>Technology & Ads</p>
                        <div className="para1-para2">
                            <p style={{fontSize: "18px",fontWeight: "500",color: "white"}}>Amet minim mollit no deserunt <br/>
                                est sit aliqua dolor do amet sint. </p>
                           
                        </div>
                    
                      </div>
                        
                    </div>
                </div>
            </div>
            <div  className="col-lg-4">
                 <div className="two-dogs2">
                    <div className="container">
                        <div style={{display: 'flex', justifyContent: 'end',paddingTop: "20px"}}>
                            <Image src={i28} alt=""/></div>
                        
                      <div style={{marginTop: "160px"}}>
                        <div className="bar-date" >
                            <p>May 23, 2023</p></div>
                        <p style={{color:  "#FFFFFF",fontSize: "14px",fontWeight: "400"}}>Technology & Ads</p>
                        <div className="para1-para2">
                            <p style={{fontSize: "18px",fontWeight: "500",color: "white"}}>Amet minim mollit no deserunt <br/>
                                est sit aliqua dolor do amet sint. </p>
                           
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
