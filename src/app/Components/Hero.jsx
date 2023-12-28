import React from "react";
import i1 from "/img/Group 1171276072.png";
import i2 from "/img/Group 1171276073.png";
import i3 from "/img/Group 1171276076.png";
import i4 from "/img/Group 1171276074.png";
import i5 from "/img/Group 1171276075.png";
import search from "/img/search-normal.png";
import Image from "next/image";
import Navbar from "../Essentials/Navbar";
// import i1 from "/img/bg.png";
export default function Hero() {
  return (
    <>
      <Navbar />
<section className="hero-section" style={{ backgroundImage: `url(${i1})` }}>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-lg-6">
              <h1 style={{ color: "white" }}>
                Find <span style={{ color: "#F0D340" }}>Anything</span> from
                your Favorite Buyer In{" "}
                <span style={{ color: "#F0D340" }}>Nigeria</span>
              </h1>
              <div className="input">
                <input
                  style={{
                    marginTop: "8px",
                    marginBottom: "8px",
                    borderRadius: "10px",
                    width: "243px",
                    height: "45px",
                    borderColor: "#FFFFFF",
                  }}
                  type="text"
                  placeholder="Search anything..."
                />

                <input
                  style={{
                    height: "45px",
                    borderColor: "#FFFFFF",
                    borderRadius: "10px",
                    width: "31%",
                    marginTop: "8px",
                    marginBottom: "8px",
                    paddingLeft: "10px",
                  }}
                  type="text"
                  placeholder="Umuahia"
                />

                <button
                  style={{
                    backgroundColor: "black",
                    height: "45px",
                    marginTop: "8px",
                    marginBottom: "8px",
                    borderRadius: "8px 60px 60px 8px",
                    width: "50px",
                  }}
                >
                  <Image src={search} alt="" />
                </button>
              </div>
              <div className="icon">
                <div className="icons">
                  <Image src={i1} alt="" />
                  <p className="color">Jobs</p>
                </div>
                <div className="icons">
                  <Image src={i2} alt="" />
                  <p className="color">Cars</p>
                </div>
                <div className="icons">
                  <Image src={i3} alt="" />
                  <p className="color">Electronics</p>
                </div>
                <div className="icons">
                  <Image src={i4} alt="" />
                  <p className="color">Perfume</p>
                </div>
                <div className="icons">
                  <Image src={i5} alt="" />
                  <p className="color">Property</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
