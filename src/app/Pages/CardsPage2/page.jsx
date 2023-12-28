import React from 'react'
import Image from "next/image";
import Navbarone from "../../Essentials/Navbarone";
import i1 from "/img/google-play 1.png"
import i2 from "/img/lll.png"
import i3 from "/img/lll.png"
import i4 from "/img/iPhone XR.png"
import i5 from "/img/tik.png"
import i6 from "/img/loca.png"
import i7 from "/img/ali123 (1).png"
import i8 from "/img/Frame 1321315163.png"
import i9 from "/img/Frame 1321315167.png"
import i10 from "/img/ggg.png"
import i11 from "/img/Rectangle 23006 (4).png"
import i12 from "/img/Rectangle 23006 (5).png"
import i13 from "/img/Rectangle 23006 (6).png"
import i14  from "/img/ali123 (1).png"
import i15 from "/img/ali123 (2).png"
export default function CardPageTwo() {
  return (
    <div>
        <Navbarone />
        <section style={{paddingTop: "7%"}}>
        <div className="container">
            <div className="row">
                <div style={{position: "relative"}} className="col-lg-3">
                  <div className="col-back">
                    <p className="text-dark">Categories</p>
                </div>
                <p style={{fontWeight: "600",marginTop: "10px",marginLeft: "10px"}}>Price</p>
                <input className="input" type="range"/>
                <div style={{display: 'flex',gap: '20px',paddingTop: "30px"}}>
                  <div className="box">
                    <p className="parag-color">₦340</p>
                  </div>
                  <div className="box">
                    <p className="parag-color">₦2,340</p>
                  </div>
                </div>
                <div className="dropdown ">
                    <button style={{border: 'none',width: '100%',height: '50px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "white"}}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <span style={{display: 'flex',gap: "10px"}}>
                        Vehicles</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  <div className="dropdown ">
                    <button style={{border: 'none',width: '100%',height: '50px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "white"}}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <span style={{display: 'flex',gap: "10px"}}>
                        Property</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  <div className="dropdown ">
                    <button style={{border: 'none',width: '100%',height: '50px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "white"}}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <span style={{display: 'flex',gap: "10px"}}>
                        Mobiles & Tablets</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  <div className="dropdown ">
                    <button style={{border: 'none',width: '100%',height: '50px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "white"}}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <span style={{display: 'flex',gap: "10px"}}>
                        iPhone</span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#"><div className="d-flex gap-2">
                        <Image style={{width: '16px',height: '16px',marginTop: '5px',marginLeft: "10px"}} src={i5} alt=""/><p>Android</p>
                       </div></a></li>
                      <li><a className="dropdown-item" href="#"> <div className="d-flex gap-2">
                        <Image style={{width: '16px',height: '16px',marginTop: '5px',marginLeft: "10px"}} src={i5} alt=""/><p>IOS</p>
                       </div></a></li>
                      <li><a className="dropdown-item" href="#"><div className="d-flex gap-2">
                        <Image style={{width: '16px',height: '16px',marginTop: '5px',marginLeft: "10px"}} src={i5} alt=""/><p>Microsoft</p>
                       </div></a></li>
                    </ul>
                  </div>
                  <div className="dropdown ">
                    <button style={{border: 'none',width: '100%',height: '50px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "white"}}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <span style={{display: 'flex',gap: "10px"}}>
                      Electronics  </span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  <div className="dropdown ">
                    <button style={{border: 'none',width: '100%',height: '50px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "white"}}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <span style={{display: 'flex',gap: "10px"}}>
                      Furniture & Appliances  </span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  <div className="dropdown ">
                    <button style={{border: 'none',width: '100%',height: '50px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "white"}}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <span style={{display: 'flex',gap: "10px"}}>
                      Services  </span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  <div className="dropdown ">
                    <button style={{border: 'none',width: '100%',height: '50px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "white"}}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <span style={{display: 'flex',gap: "10px"}}>
                      Jobs  </span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  <div className="dropdown ">
                    <button style={{border: 'none',width: '100%',height: '50px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "white"}}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <span style={{display: 'flex',gap: "10px"}}>
                      Equipments & Tools  </span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  <div className="dropdown ">
                    <button style={{border: 'none',width: '100%',height: '50px',display: 'flex',alignItems: 'center',justifyContent: 'space-between',backgroundColor: "white"}}  className="dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                       <span style={{display: 'flex',gap: "10px"}}>
                      Repair & Construction  </span>
                    </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </div>
                  
               
            </div>
            <div className="col-lg-9">
                <h2>Found 32353 ads in Nigeria</h2>
               <div style={{display: 'flex',gap: "20px"}}>
                <div className="box-mobile">
                    <Image src={i8} alt=""/>
                </div>
                <div className="box-mobile">
                    <Image src={i9} alt=""/>
                </div>
               </div>
             
               <div className="row">
                <div style={{marginTop: "50px"}} className="col-lg-4  col-6">
                    <a href="/Pages/Page3"><div className="card">
                        <Image style={{position: "relative" ,width:"auto",width:"auto"}} src={i7} alt=""/>
                       <Image style={{position: "absolute",top: "15px",right: "10px;"}} src={i10} alt=""/>
                       
                       <div style={{padding: "10px"}}>
                        <h4 style={{fontWeight: "500",fontSize: "18px"}}>Canon Camera</h4>
                       <Image className="" src={i6} alt=""/><span style={{color:"#666666",marginLeft: "10px"}}>Umuahia, Nigeria</span>
                      <div style={{display: 'flex', justifyContent: 'space-between',alignItems: "center"}}> <p className="paragraph2">₦2,340</p> <p >View: 2,349</p></div>
                       </div>
                    </div></a>
                </div>
                <div style={{marginTop: "50px"}} className="col-lg-4  col-6">
                    <a href="/Pages/Page3"><div className="card">
                        <Image style={{position: "relative" ,width:"auto"}} src={i15} alt=""/>
                       <Image style={{position: "absolute",top: "15px",right: "10px"}} src={i10} alt=""/>
                       
                       <div style={{padding: "10px"}}>
                        <h4 style={{fontWeight: "500",fontSize: "18px"}}>Canon Camera</h4>
                       <Image className="loca" src={i6} alt=""/><span style={{color:"#666666",marginLeft: "10px"}}>Umuahia, Nigeria</span>
                      <div style={{display: 'flex', justifyContent: 'space-between',alignItems: "center"}}> <p className="paragraph2">₦2,340</p> <p >View: 2,349</p></div>
                       </div>
                    </div></a>
                </div>
                <div style={{marginTop: "50px"}} className="col-lg-4  col-6">
                    <a href="/Pages/Page3"><div className="card">
                        <Image style={{position: "relative" ,width:"auto"}} src={i12} alt=""/>
                       <Image style={{position: "absolute",top: "15px",right: "10px"}} src={i10} alt=""/>
                       
                       <div style={{padding: "10px"}}>
                        <h4 style={{fontWeight: "500",fontSize: "18px"}}>Canon Camera</h4>
                       <Image className="loca" src={i6} alt=""/><span style={{color:"#666666",marginLeft: "10px"}}>Umuahia, Nigeria</span>
                      <div style={{display: 'flex', justifyContent: 'space-between',alignItems: "center"}}> <p className="paragraph2">₦2,340</p> <p >View: 2,349</p></div>
                       </div>
                    </div></a>
                </div>
                <div style={{marginTop: "50px"}} className="col-lg-4  col-6">
                    <a href="/Pages/Page3"><div className="card">
                        <Image style={{position: "relative" ,width:"auto"}} src={i11} alt=""/>
                       <Image style={{position: "absolute",top: "15px",right: "10px"}} src={i10} alt=""/>
                       
                       <div style={{padding: "10px"}}>
                        <h4 style={{fontWeight: "500",fontSize: "18px"}}>Canon Camera</h4>
                       <Image className="loca" src={i6} alt=""/><span style={{color:"#666666",marginLeft: "10px"}}>Umuahia, Nigeria</span>
                      <div style={{display: 'flex', justifyContent: 'space-between',alignItems: "center"}}> <p className="paragraph2">₦2,340</p> <p >View: 2,349</p></div>
                       </div>
                    </div></a>
                </div>
                <div style={{marginTop: "50px"}} className="col-lg-4  col-6">
                    <a href="/Pages/Page3"><div className="card">
                        <Image style={{position: "relative" ,width:"auto"}} src={i12} alt=""/>
                       <Image style={{position: "absolute",top: "15px",right: "10px"}} src={i10} alt=""/>
                       
                       <div style={{padding: "10px"}}>
                        <h4 style={{fontWeight: "500",fontSize: "18px"}}>Canon Camera</h4>
                       <Image className="loca" src={i6} alt=""/><span style={{color:"#666666",marginLeft: "10px"}}>Umuahia, Nigeria</span>
                      <div style={{display: 'flex', justifyContent: 'space-between',alignItems: "center"}}> <p className="paragraph2">₦2,340</p> <p >View: 2,349</p></div>
                       </div>
                    </div></a>
                </div>
                <div style={{marginTop: "50px"}} className="col-lg-4 col-6">
                    <a href="/Pages/Page3"><div className="card">
                        <Image style={{position: "relative" ,width:"auto"}} src={i13} alt=""/>
                       <Image style={{position: "absolute",top: "15px",right: "10px"}} src={i10} alt=""/>
                       
                       <div style={{padding: "10px"}}>
                        <h4 style={{fontWeight: "500",fontSize: "18px"}}>Canon Camera</h4>
                       <Image className="loca" src={i6} alt=""/><span style={{color:"#666666",marginLeft: "10px"}}>Umuahia, Nigeria</span>
                      <div style={{display: 'flex', justifyContent: 'space-between',alignItems: "center"}}> <p className="paragraph2">₦2,340</p> <p >View: 2,349</p></div>
                       </div>
                    </div></a>
                </div>
                <div style={{marginTop: "50px"}} className="col-lg-4 col-6">
                    <a href="/Pages/Page3"><div className="card">
                        <Image style={{position: "relative" ,width:"auto"}} src={i14} alt=""/>
                       <Image style={{position: "absolute",top: "15px",right: "10px"}} src={i10} alt=""/>
                       
                       <div style={{padding: "10px"}}>
                        <h4 style={{fontWeight: "500",fontSize: "18px"}}>Canon Camera</h4>
                       <Image className="loca" src={i6} alt=""/><span style={{color:"#666666",marginLeft: "10px"}}>Umuahia, Nigeria</span>
                      <div style={{display: 'flex', justifyContent: 'space-between',alignItems: "center"}}> <p className="paragraph2">₦2,340</p> <p >View: 2,349</p></div>
                       </div>
                    </div></a>
                </div>
                <div style={{marginTop: "50px"}} className="col-lg-4 col-6">
                    <a href="/Pages/Page3"><div className="card">
                        <Image style={{position: "relative" ,width:"auto"}} src={i12} alt=""/>
                       <Image style={{position: "absolute",top: "15px",right: "10px"}} src={i10} alt=""/>
                       
                       <div style={{padding: "10px"}}>
                        <h4 style={{fontWeight: "500",fontSize: "18px"}}>Canon Camera</h4>
                       <Image className="loca" src={i6} alt=""/><span style={{color:"#666666",marginLeft: "10px"}}>Umuahia, Nigeria</span>
                      <div style={{display: 'flex', justifyContent: 'space-between',alignItems: "center"}}> <p className="paragraph2">₦2,340</p> <p >View: 2,349</p></div>
                       </div>
                    </div></a>
                </div>
                <div style={{marginTop: "50px"}} className="col-lg-4 col-6 ">
                    <a href="/Pages/Page3">
                        <div className="card">
                        <Image style={{position: "relative" ,width:"auto"}} src={i11} alt=""/>
                       <Image style={{position: "absolute",top: "15px",right: "10px"}} src={i10} alt=""/>
                       
                       <div style={{padding: "10px"}}>
                        <h4 style={{fontWeight: "500",fontSize: "18px"}}>Canon Camera</h4>
                       <Image className="loca" src={i6} alt=""/><span style={{color:"#666666",marginLeft: "10px"}}>Umuahia, Nigeria</span>
                      <div style={{display: 'flex', justifyContent: 'space-between',alignItems: "center"}}> <p className="paragraph2">₦2,340</p> <p >View: 2,349</p></div>
                       </div>
                    </div></a>
                </div>
               </div>
                
            </div>
        </div>
        </div>
    </section>
    </div>
  )
}
