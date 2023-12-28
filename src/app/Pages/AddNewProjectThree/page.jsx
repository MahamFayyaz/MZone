import React from 'react'
import Navbarone from '../../Essentials/Navbarone'
import Image from "next/image";
import i1 from "/img/Group 37155.png"
import i2 from "/img/Medicine_Bottle_v01_02 2.png"
import i3 from "/img/Rectangle 23006 (6).png"
import i4 from "/img/Rectangle 23006 (4).png"
import i5 from "/img/Rectangle 23006 (5).png"
import i6 from "/img/6.png"
export default function AddNewProjectThree() {
  return (
    <div>
        <Navbarone/>
        <section>
   <div className="container">
    <div className="row d-flex justify-content-center">
        <div style={{paddingTop: "100px"}} className="col-lg-8">
            <div>
                <h1 className="add-new-head">Add Product Images</h1>
            </div>
            <div className="add-new">
               <Image src={i1} alt=""/>
               <p style={{fontSize: '20px',fontWeight: "500"}}>Drag photos or Video</p>
               <p style={{fontSize: '16px',fontWeight: "400"}}>Choose at least 3 photos</p>
               <p style={{fontSize: '14px',fontWeight: "400"}}>Upload from your device</p>
            </div>
            <div style={{paddingTop: '20px', justifyContent:'center'}} className="row">
                <div  className="col-lg-2  col-3">
              <Image  style={{width: "100%"}} src={i4} alt=""/>
                </div>
                <div className="col-lg-2  col-3">
                    <Image style={{width: "100%"}} src={i3} alt=""/>
                </div>
                <div className="col-lg-2  col-3">
                    <Image style={{width: "100%"}} src={i4} alt=""/>
                </div>
                <div className="col-lg-2  col-3">
                    <Image style={{width: "100%"}} src={i5} alt=""/>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 d-flex justify-content-center">
                <a href="/Pages/AddNewProjectFour"> <button className="Submit-button2">Next <Image src={i6} alt=""/></button></a>
                    </div>
                </div>
        </div>
    </div>
   </div>
</section>
    </div>
  )
}
