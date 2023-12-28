import React from 'react'

export default function SignUp() {
  return (
    <section>
        <div className="Login">
            <div className="container">
                <div style={{display: 'flex',
                    justifyContent: 'center'}} className="row">
                    <div className="col-lg-11">
                        <div className="login-page ">
                            <div>
                                <p className="wellcome">Welcome Here!</p>
                                <h1 className="Signup">Signup with your Account</h1>
                            </div>
                            <div className="container ">
                                <div className="row forms">
                                    <div className="col-lg-5 ">
                                        <label className="name-ali" for="">First Name</label>
                                        <input className="type-hers" type="text" placeholder="Type here..."/>
                                    </div>
                                    <div className="col-lg-5 ">
                                        <label className="name-ali" for="">Last Name</label>
                                        <input className="type-hers" type="text" placeholder="Type here..."/>
                                    </div>
                                    <div className="col-lg-5 ">
                                        <label className="name-ali" for="">Phone Number</label>
                                        <input className="type-hers" type="text" placeholder="Type here..."/>
                                    </div>
                                    <div className="col-lg-5 ">
                                        <label className="name-ali" for="">Email</label>
                                        <input className="type-hers" type="text" placeholder="Type here..."/>
                                    </div>
                                    <div className="col-lg-5 ">
                                        <label className="name-ali" for="">Product Category</label>
                                        <select className="type-hers" id="exampleFormControlSelect1">
                                            <option>Lahore</option>
                                            <option>Islamabad</option>
                                            <option>faslabad</option>
                                            <option>shahadara</option>
                                        </select>
                                    </div>
                                    <div className="col-lg-5 ">
                                        <label className="name-ali" for="">Password</label>
                                        <input className="type-hers" type="Password" placeholder="**************"/>
                                    </div>
                                    <div className="col-lg-5 ">
                                        <label className="name-ali" for="">Confirm Password</label>
                                        <input className="type-hers " type="Password" placeholder="**************"/>
                                        <div className="loginse">
                                            <button className="logins">login</button>
                                            <p className="Already">Already have an account? <a href="/Pages/Login">Login</a>  </p>
                                        </div>
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
