import React from 'react'
import Navbarone from '../../Essentials/Navbarone'
import Image from "next/image";
import i1 from "/img/uplod.png"
export default function RequestPage() {
  return (
    <div>
        <Navbarone/>
   
    <div className="container">
        <div className="row d-flex justify-content-center">
            <div style={{marginTop: "100px"}} className="col-lg-7">
                <h1 className="Request">Request A Product</h1>
                <div className="row">
                    <div className="col-lg-6">
                        <label style={{fontSize: '16px',fontWeight: '500'}} for="">Product Category</label>
                        <select style={{backgroundColor: '#EBEBEB',
                        width: '100%',borderRadius: '8px',marginTop: '7px',Height:'60px'}} className="form-control " id="exampleFormControlSelect1">
                            <option>Select product Category</option>
                            <option>Select product Category</option>
                            <option>3Select product Category</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                        
                    </div>
                    <div className="col-lg-6">
                        <label style={{fontWeight: '500'}} for="">Product Type</label>
                        <select style={{backgroundColor: '#EBEBEB',
                        width: '100%',borderRadius: '8px',marginTop: '7px',fontSize: '16px',fontWeight: '400',Height:'60px'}} className="form-control " id="exampleFormControlSelect1">
                            <option>Select product Type</option>
                            <option>Select product Category</option>
                            <option>3Select product Category</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-6">
                        <label style={{color: '#000000',marginTop: '10px',fontWeight: '500'}} for="">Budget</label>
                        <div className="boxbu">
                            <div className="plus-button">
                                <button className="plus"><i className="fa-solid fa-minus"></i></button>
                                <span style={{marginTop: '17px',fontWeight: '500'}}>$584</span>
                            <button className="plus"><i className="fa-solid fa-plus"></i></button>
                            </div>
                        </div>
                    </div>
                    
                    <div className="col-lg-6 ">
                        <label style={{color: '#000000',marginTop: '10px',fontWeight: '500'}} for="">Location</label>
                        <select style={{backgroundColor: '#EBEBEB',
                        width: '100%',borderRadius: '8px',marginTop: '7px',fontSize: '16px',fontWeight: '400',Height:'60px'}} className="form-control " id="exampleFormControlSelect1">
                            <option>Select location </option>
                            <option>Pakistan</option>
                            <option>London</option>
                            <option>9</option>
                            <option>5</option>
                          </select>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <label style={{color: '#000000',marginTop: '10px',fontWeight: '500'}} for="">Condition</label>
                        <div className="Condition">
                            <button className="brand">Brand New</button>
                        <button className="second">Second Hand</button>
                        <button className="use">In Use</button>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <label style={{color: '#000000',marginTop: '10px',fontWeight: '500'}}for="">Upload image/Video</label>
                        <div className="box-uplod">
                            <span style={{paddingTop: '13px'}}><Image src={i1} alt=""/>Upload image/Video</span>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <label style={{color: '#000000',marginTop: '10px',fontWeight: '500'}} for="">Description</label>
                        <div className="">
                            <textarea className="massage" name="" id="" cols="30" rows="10"   placeholder="Let us know about product..."></textarea> 
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                        <a href="/Pages/AddNewProject"><button className="Submit-button">Submit</button></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
