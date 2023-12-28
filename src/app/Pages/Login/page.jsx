import React from 'react'
import Image from 'next/image'
import i1 from "/img/Group 1171276151.png"
import i2 from "/img/Group 1171276152.png"
import i3 from "/img/Group 1171276153.png"
import Navbarone from '../../Essentials/Navbarone'
export default function Login() {
  return (
    <section>
        <Navbarone/>
        <div className="Login">
            <div className="container">
                <div style={{display: 'flex',
                    justifyContent: 'center'}} className="row">
                    <div className="col-lg-6">
                        <div className="login-page">
                            <div>
                                <p className="wellcome">Welcome Back!</p>
                                <h1 className="Signup">Login with your email</h1>
                            </div>
                            <div className="container">
                                <div className="row forms">
                                    
                                    <div className="col-lg-11 ">
                                        <label className="name-ali" for="">Email</label>
                                        <input className="type-hers" type="text" placeholder="Type here..."/>
                                    </div>
                                    <div className="col-lg-11 ">
                                        <label className="name-ali" for="">Password</label>
                                        <input className="type-hers" type="Password" placeholder="**************"/>
                                    </div>
                                    <div className="col-lg-11">
                                        <button className="login-button-las">login</button>
                                    </div>
                                    <div className="Dont-have">
                                        <p>Don't have an account? <a href="/Pages/Login">Sign up</a></p>
                                    </div>
                                    <div className="three-imgs">
                                        <Image src={i1} alt=""/>
                                        <Image src={i2} alt=""/>
                                        <Image src={i3} alt=""/>
                                    </div>
                                    </div>
                                    
                                    
                                    </div>
                                   
                                    
                                    

                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </section>
     
  )
}
