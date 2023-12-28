import React from 'react'
import Navbarone from '../../Essentials/Navbarone'
import Image from "next/image";
import i1 from "/img/Group 1171275867.png"
import i2 from "/img/Rectangle 41974.png"
import i3 from "/img/hh (2).png"
import i4 from "/img/hh (1).png"
import i5 from "/img/Rectangle 41974.png"
import i6 from "/img/hh (2).png"
import i7 from "/img/hh (1).png"
import i8 from "/img/Rectangle 41974.png"
import i9 from "/img/hh (2).png"
import i10 from "/img/hh (1).png"
import i11 from "/img/Rectangle 41974.png"
import i12 from "/img/hh (2).png"
import i13 from "/img/hh (1).png"
import i14 from "/img/Rectangle 41974.png"
import i15 from "/img/hh (2).png"
import i16 from "/img/hh (1).png"
import i17 from "/img/Rectangle 41974.png"
import i18 from "/img/hh (2).png"
import i19 from "/img/hh (1).png"
import i20 from "/img/Rectangle 41974.png"
import i21 from "/img/hh (2).png"
import i22 from "/img/hh (1).png"
export default function MyAdvert() {
  return (
    <div>
        <Navbarone/>
        <div style={{backgroundColor: '#EBEBEB',paddingTop: '100px',height: '900px'}}>
          <div className="container">
            <div style={{backgroundColor: 'white',height: '670px'}}>
                <div  className="row">
                    <div className="col-lg-3 Notication">
                        <div className="saved">
                            <Image src={i1} alt=""/>
                            <p style={{fontSize:'15px',fontWeight: '500'}}>James Bond</p>
                            <p style={{fontSize: '13px',fontWeight: '400',marginTop: '-18px'}}>jamesbond007@gmail.com</p>
                        </div>
                            <div className="row">
                               <div className="col-lg-12">
                                <a style={{color: "black"}} href="/Pages/MyAdvert">
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
                                <h2 style={{fontSize: '20px',fontWeight: '600'}}>My Advert</h2>
                                    <div style={{position: 'absolute',right: '0px',top: "30px"}}>
                                        <button className="adverts4">All</button>
                                    <button className="adverts5 ">Active</button>
                                    <button className="adverts6">Reviewing</button>
                                    <button className="adverts7 Notication">Declined</button>
                                    <button className="adverts8 Notication">Draft</button>
                                    <button className="adverts9 Notication">Closed</button>
                                    </div>
                                </div>
                            <div className="col-lg-12">
                                <table>
                                    <tr>
                                      <th>Advert</th>
                                      <th>Date</th>
                                      <th>Location</th>
                                      <th>Price</th>
                                      <th>Total View</th>
                                      <th>Action</th>
                                    </tr>
                                    <tr>
                                      <td style={{display: "flex"}}><span><Image src={i2} alt=""/></span> <p style={{paddingTop: '10px',paddingLeft: '10px'}}>iPhone 13 Pro Max</p></td>
                                      <td>12 May, 2023</td>
                                      <td>Abuja, Asokoro</td>
                                      <td>₦2,340</td>
                                      <td>23,040</td>
                                      <td className="d-flex gap-3"><span><Image src={i3} alt=""/></span>
                                        <span><Image src={i4} alt=""/></span>
                                    </td>
                                    </tr>
                                    <tr>
                                        <td style={{display: 'flex'}}><span><Image src={i5} alt=""/></span> <p style={{paddingTop: '10px',paddingLeft: '10px'}}>iPhone 13 Pro Max</p></td>
                                        <td>12 May, 2023</td>
                                        <td>Abuja, Asokoro</td>
                                        <td>₦2,340</td>
                                        <td>23,040</td>
                                        <td className="d-flex gap-3"><span><Image src={i6} alt=""/></span>
                                          <span><Image src={i7} alt=""/></span>
                                      </td>
                                      </tr>
                                      <tr>
                                        <td style={{display: "flex"}}><span><Image src={i8} alt=""/></span> <p style={{paddingTop: '10px',paddingLeft: '10px'}}>iPhone 13 Pro Max</p></td>
                                        <td>12 May, 2023</td>
                                        <td>Abuja, Asokoro</td>
                                        <td>₦2,340</td>
                                        <td>23,040</td>
                                        <td className="d-flex gap-3"><span><Image src={i9} alt=""/></span>
                                          <span><Image src={i10} alt=""/></span>
                                      </td>
                                      </tr>
                                      <tr>
                                        <td style={{display: "flex"}}><span><Image src={i11} alt=""/></span> <p style={{paddingTop: '10px',paddingLeft: '10px'}}>iPhone 13 Pro Max</p></td>
                                        <td>12 May, 2023</td>
                                        <td>Abuja, Asokoro</td>
                                        <td>₦2,340</td>
                                        <td>23,040</td>
                                        <td className="d-flex gap-3"><span><Image src={i12} alt=""/></span>
                                          <span><Image src={i13} alt=""/></span>
                                      </td>
                                      </tr>
                                      <tr>
                                        <td style={{display: "flex"}}><span><Image src={i14} alt=""/></span> <p style={{paddingTop: '10px',paddingLeft: '10px'}}>iPhone 13 Pro Max</p></td>
                                        <td>12 May, 2023</td>
                                        <td>Abuja, Asokoro</td>
                                        <td>₦2,340</td>
                                        <td>23,040</td>
                                        <td className="d-flex gap-3"><span><Image src={i15} alt=""/></span>
                                          <span><Image src={i16} alt=""/></span>
                                      </td>
                                      </tr>
                                      <tr>
                                        <td style={{display: "flex"}}><span><Image src={i17} alt=""/></span> <p style={{paddingTop: '10px',paddingLeft: '10px'}}>iPhone 13 Pro Max</p></td>
                                        <td>12 May, 2023</td>
                                        <td>Abuja, Asokoro</td>
                                        <td>₦2,340</td>
                                        <td>23,040</td>
                                        <td className="d-flex gap-3"><span><Image src={i18} alt=""/></span>
                                          <span><Image src={i19} alt=""/></span>
                                      </td>
                                      </tr>
                                      <tr>
                                        <td style={{display: "flex"}}><span><Image src={i20} alt=""/></span> <p style={{paddingTop: '10px',paddingLeft: '10px'}}>iPhone 13 Pro Max</p></td>
                                        <td>12 May, 2023</td>
                                        <td>Abuja, Asokoro</td>
                                        <td>₦2,340</td>
                                        <td>23,040</td>
                                        <td className="d-flex gap-3"><span><Image src={i21} alt=""/></span>
                                          <span><Image src={i22} alt=""/></span>
                                      </td>
                                      </tr>
                                  </table>
                            </div>
                                  
                       
                    </div>
            </div>
        </div>
        </div></div>
    </div>
  )
}
