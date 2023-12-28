import React from "react";
import i1 from "/img/Screenshot_20230731-141901 1.png";
import logo from "/img/Frame.png";
import Image from "next/image";
export default function Navbar() {
  return (
    <header className="navbar1">
        <nav className="navbar">
            <div className="container">
                <a href="/" className="navbar-brand"><Image src={i1} alt=""/></a>
              <form className="d-flex" role="search">
                <div style={{display: "flex", gap: "10px"}}>
                  <Image style={{width: "15px",height: "15px", marginTop: "5px"}} src={logo} alt=""/><span style={{color: "white",paddingTop: "8px"}}><a className="anker" href="/Pages/Login">Login</a> / <a className="anker" href="/Pages/Signup">Signup</a></span>
                  <button style={{backgroundColor: "white",color: "black",borderColor: "white",borderRadius: "10px",height: "42px"}} type="submit">Start Selling</button>
                  </div>
              </form>
            </div>
          </nav>
    </header>
  );
}
