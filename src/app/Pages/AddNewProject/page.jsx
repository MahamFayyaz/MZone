import React from 'react'
import Image from 'next/image'
import Navbarone from '../../Essentials/Navbarone'
import i1 from "/img/Group 1171276111.png"
import i2 from "/img/Group 1171276112.png"
import i3 from "/img/Group 1171276113.png"
import i4 from "/img/Group 1171276118 (1).png"
import i5 from "/img/Group 1171276115 (1).png"
import i6 from "/img/Group 1171276116.png"
import i7 from "/img/Group 1171276117.png"
import i8 from "/img/Group 1171276114.png"
import i9 from "/img/Group 1171276119.png"
import i10 from "/img/Group 1171276120.png"
import i11 from "/img/6.png"
export default function AddNewProject() {
  return (
    <div>
        <Navbarone/>
        <section>
    <div className="container ">
         {/* <!-- <div className="row d-flex justify-content-center">
            <div style="padding-top: 100px;" className="col-lg-10">
                <div>
                    <h1 style="font-size: 34px;font-weight: 500;display: flex;justify-content: center;">Add New Product</h1>
                </div>
                <div style="display: flex; margin-top: 10px;justify-content: center;">
                    <Image  src="img/Frame 1171276094.png" alt=""/>
                    <Image style="Width: 178px;Height: 6px;margin-top: 17px;" src="img/Rectangle 22978.png" alt=""/>
                    <Image style="Width: 78px;Height: 6px;margin-top: 17px;" src="img/Rectangle 22977.png" alt="">
                    <Image src="img/Frame 1171276095.png" alt="">
                    <Image style="Width: 198px;Height: 6px;margin-top: 17px;" src="img/Rectangle 22977.png" alt="">
                    <Image src="img/Frame 1171276096.png" alt="">
                    <Image style="Width: 198px;Height: 6px;margin-top: 17px;" src="img/Rectangle 22977.png" alt="">
                    <Image src="img/Frame 1171276096.png" alt=""></div>
            </div>
        </div> --> */}
        <div  className="row d-flex justify-content-center" >
            <div style={{paddingTop: "70px"}} className="col-lg-9">
                <p className="card-heading">Choose Category</p>
                <div className="row d-flex justify-content-center">
                    <div className="col-lg-2  col-2 card-sty">
                      <Image src={i1} alt=""/>
                      <p className="card-paragraph">Vehicles</p>
                    </div>
                    <div className="col-lg-2  col-2 card-sty">
                      <Image src={i2} alt=""/>
                      <p className="card-paragraph">Property</p>
                    </div>
                    <div className="col-lg-2  col-2 card-sty">
                      <Image src={i3} alt=""/>
                      <p className="card-paragraph">Mobiles/Tablets</p>
                    </div>
                    <div className="col-lg-2  col-2 card-sty">
                      <Image src={i4} alt=""/>
                      <p className="card-paragraph">Food</p>
                    </div>
                    <div className="col-lg-2  col-2 card-sty">
                      <Image src={i5} alt=""/>
                      <p className="card-paragraph">Services</p>
                    </div>
                </div>
                <div className="row d-flex justify-content-center">
                    
                    <div className="col-lg-2  col-2 card-sty2">
                      <Image src={i6} alt=""/>
                      <p className="card-paragraph">Jobs</p>
                    </div>
                    <div className="col-lg-2  col-2 card-sty2">
                      <Image src={i7} alt=""/>
                      <p className="card-paragraph">Pets</p>
                    </div>
                    <div className="col-lg-2  col-2 card-sty2">
                      <Image src={i8} alt=""/>
                      <p className="card-paragraph">Electronic items</p>
                    </div>
                    <div className="col-lg-2  col-2 card-sty2">
                      <Image src={i9} alt=""/>
                      <p className="card-paragraph">Furniture</p>
                    </div>
                    <div className="col-lg-2  col-2 card-sty2">
                      <Image src={i10} alt=""/>
                      <p className="card-paragraph">Tools</p>
                    </div>
                </div>
            </div>
        </div>
        <div style={{paddingTop: "40px"}} className="row d-flex justify-content-center">
            <div className="col-lg-4">
                <p style={{fontSize: "20px",fontWeight: "500",display: 'flex',justifyContent: "center"}}>Choose Sub-Category</p>
                <div className="row ">
                    <div className="col-lg-12">
                        <select style={{backgroundColor: '#EBEBEB',borderRadius: '8px',marginTop: '7px',Height:"60px"}} className="form-control " id="exampleFormControlSelect1">
                            <option>Select Sub-category</option>
                            <option>Select product Category</option>
                            <option>3Select product Category</option>
                            <option>4</option>
                            <option>5</option>
                          </select>
                          <div className="row d-flex justify-content-center">
                            <div className="col-lg-8">
                               <a href="/Pages/AddNewProjectTwo">
                                <button className="Next-button">Next <Image src={i11} alt=""/></button>
                               </a>
                            </div>
                          </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</section>
    </div>
  )
}
