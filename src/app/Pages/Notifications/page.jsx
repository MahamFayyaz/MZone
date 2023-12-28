import React from "react";
import Image from "next/image";
import Navbarone from "../../Essentials/Navbarone";
import i1 from "/img/Group 1171275867.png"
import i2 from "/img/Group 1171276127.png"
export default function Notifications() {
  return (
    <div>
      <Navbarone />
      <div style={{backgroundcolor:'#EBEBEB',paddingTop: '100px',height: '900px'}}>
          <div class="container">
            <div style={{backgroundColor: 'white',height: "600px"}}>
                <div  class="row">
                    <div class="col-lg-3 Notication">
                        <div class="saved">
                            <Image src={i1} alt=""/>
                            <p style={{fontSize: '15px',fontWeight: '500'}}>James Bond</p>
                            <p style={{fontSize: '13px',fontWeight: '400',marginTop: '-18px'}}>jamesbond007@gmail.com</p>
                        </div>
                        <div class="row">
                            <div class="col-lg-12">
                             <a style={{color: 'black'}} href="/Pages/MyAdvert">
                                 <div class="maniu active">
                                     <span><i class="fa-solid fa-house"></i></span>
                                      <p>My adverts</p>
                                  </div>
                             </a>
                            </div> 
                            <div class="col-lg-12">
                             <div class="maniu">
                                <span><i class="fa-solid fa-laptop-code"></i></span>
                                 <p>Feedback</p>
                             </div>
                            </div> 
                            <div class="col-lg-12">
                            <a style={{color: "black"}} href="/Pages/FAQ">
                             <div class="maniu">
                                 <span><i class="fa-regular fa-clock"></i></span>
                                  <p>FAQ’s</p>
                              </div>
                            </a>
                            </div> 
                            <div class="col-lg-12">
                             <a style={{color: 'black'}} href="/Pages/Settings">
                                 <div class="maniu">
                                     <span><i class="fa-solid fa-gear"></i></span>
                                      <p>Setting</p>
                                  </div>
                             </a>
                            </div> 
                            <div class="col-lg-12">
                                <a style={{color: 'black'}} href="/Pages/VerifyYourIdentity">
                                    <div class="maniu">
                                        <span><i class="fa-solid fa-arrow-right-from-bracket"></i></span>
                                         <p>Logout</p>
                                     </div>
                                </a>
                            </div> 
                         </div>
                            
                        </div>
                        <div class="col-lg-9">
                            <div class="my-saved">
                                <h2 style={{fontSize: '20px',fontWeight: '600'}}>Notification</h2>
                                    <button class="adverts3">Mark all as read</button>
                            </div>
                            <hr/>
                            <div style={{display: 'flex',justifyContent: 'center',alignItems: 'center',flexDirection: 'column',textAlign: 'center',paddingTop: '40px'}}>
                                <Image src={i2} alt=""/>
                                <div style={{fontWeight: '500',fontSize: '22px',paddingTop: '10px'}}>
                                <p >You don't have any <br/> notifications right now </p>
                                
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
        </div>
    </div>
  );
}
