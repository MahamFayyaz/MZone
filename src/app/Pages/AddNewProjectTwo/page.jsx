import React from 'react'
import Navbarone from '../../Essentials/Navbarone'
import Image from 'next/image'
import i1 from "/img/6.png"
export default function AddNewProjectTwo() {
  return (
    <div>
        <Navbarone/>
        <section>
    <div className="container">


        <div className="row d-flex justify-content-center">
            <div style={{marginTop: "100px"}} className="col-lg-7">
                <h1 className="Request">Add Product Details</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <label style={{fontSize: "16px",fontWeight: "500"}} for="">Title</label>
                        <select style={{backgroundColor: '#EBEBEB'
                        ,width: "100%",borderRadius: "8px",marginTop: "7px",Height:"60px"}} className="form-control " id="exampleFormControlSelect1">
                            <option>Add title of the product</option>
                            <option>Select product Category</option>
                            <option>3Select product Category</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        
                    </div>
                    <div className="col-lg-6">
                        <label style={{fontWeight: "500"}} for="">Location</label>
                        <select style={{backgroundColor: '#EBEBEB',
                        width: '100%',borderRadius: '8px',marginTop: '7px',fontSize: '16px',fontWeight: '400',Height:"60px"}} className="form-control " id="exampleFormControlSelect1">
                            <option>Add location</option>
                            <option>Select product Category</option>
                            <option>3Select product Category</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6  col-6">
                        <label style={{color: '#000000',marginTop: '10px',fontWeight: "500"}} for="">Brand</label>
                        <select style={{ backgroundColor: '#EBEBEB',
                        width: '100%',borderRadius: '8px',marginTop: '7px',fontSize: '16px',fontWeight: '400',Height:"60px"}} className="form-control " id="exampleFormControlSelect1">
                            <option>Select Brand </option>
                            <option>Samsung</option>
                            <option>Nokia</option>
                            <option>9</option>
                            <option>5</option>
                          </select>
                    </div>
                    
                    <div className="col-lg-6  col-6">
                        <label style={{color: '#000000',marginTop: '10px',fontWeight: "500"}} for="">Condition</label>
                        <select style={{ backgroundColor: '#EBEBEB',
                        width: '100%',borderRadius: '8px',marginTop: '7px',fontSize: '16px',fontWeight: '400',Height:"60px"}} className="form-control " id="exampleFormControlSelect1">
                            <option>Select condition  </option>
                            <option>Use</option>
                            <option>Part</option>
                            <option>9</option>
                            <option>5</option>
                          </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <label style={{color: '#000000',marginTop: '10px',fontWeight: "500"}} for="">Budget</label>
                        <div className="boxbu2">
                            <div className="plus-button">
                                <button className="plus"><i className="fa-solid fa-minus"></i></button>
                                <span style={{marginTop: '17px',fontWeight: "500"}}>$584</span>
                            <button className="plus"><i className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
                
                
                <div className="row">
                    <div className="col-lg-12">
                        <label style={{color: '#000000',marginTop: '10px',fontWeight: "500"}} for="">Description</label>
                        <div>
                            <textarea style={{backgroundColor: "#EBEBEB"}} className="massage" name="" id="" cols="30" rows="10"   placeholder="Let us know about product..."></textarea> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12 d-flex justify-content-center">
                        <a href="/Pages/AddNewProjectThree"><button className="Submit-button2">Next <Image src={i1} alt=""/></button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
   
</section>
    </div>
  )
}
