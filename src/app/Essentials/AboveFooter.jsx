import React from 'react'
import Image from 'next/image'
import i1 from "/img/lll.png"
import i2 from "/img/lll.png"
import i3 from "/img/iPhone XR.png"
import google from "/img/google-play 1.png"
export default function AboveFooter() {
  return (
    <section className="backcolor">
            <div className="container">
               <div className="row">
                <div className="col-lg-6">
                    <h1 style={{fontSize: '40px',fontWeight: '700'}}>Try our mobile app for better user experience</h1>
                    <p style={{color: '#666666',fontSize: '21px',fontWeight: '400'}}>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit molli.</p>
                    <div style={{display: 'flex',gap: '20px'}} >
                        <button className="logo-button">
                            <div><i style={{color: 'white',fontSize: '30px',marginLeft: '7px',marginTop: '3px'}} className="fa-brands fa-apple"></i></div>
                        <div style={{display:'flex',flexDirection: 'column'}}>
                            <span style={{color: 'lightgray',fontSize:"10px"}}>Download to the </span>
                         <span style={{color: '#FFFFFF'}}>App Store</span>
                        </div>
                        </button>
                        <button className="logo-button">
                            <div><Image style={{fontSize: "30px",marginLeft: "5px",marginTop: "5px"}} src={google} alt=""/></div>
                        <div style={{display: 'flex',flexDirection: 'column'}}>
                            <span style={{color: 'lightgray',fontSize: "10px"}}>Get it on  </span>
                         <span style={{color: '#FFFFFF'}}>Google Play</span>
                        </div>
                        </button>
                    </div>
                    <div className="footer-icon">
                       <Image src={i1} alt=""/><span style={{marginLeft: '10px',color: '#666666'}}>Access the full kit from mobile app</span>
                    </div>
                    <div className="footer-icon">
                       <Image src={i2} alt=""/><span style={{marginLeft: '10px',color: '#666666'}}>Unlimited bandwidth</span>
                    </div>
                    
                </div>
                <div className="col-lg-6">
                   <Image  src={i3} alt="" style={{width:"100%"}}/>
                </div>
               </div> 
            </div>
        </section>
  )
}
