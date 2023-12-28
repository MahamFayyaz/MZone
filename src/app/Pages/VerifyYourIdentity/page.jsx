"use client"
import React,{ useEffect } from 'react'
import Image from "next/image";
import Navbarone from "../../Essentials/Navbarone";
import i1 from "/img/wite plus.png"
export default function VerifyYourIdentity() {
    const openTab = (evt, tabName) => {
        // Remove "active" class from tabcontent elements
        const tabcontent = document.getElementsByClassName("tabcontent");
        for (let i = 0; i < tabcontent.length; i++) {
          tabcontent[i].classList.remove("active");
        }
    
        // Remove "active" class from tablink elements
        const tablinks = document.getElementsByClassName("tablink");
        for (let i = 0; i < tablinks.length; i++) {
          tablinks[i].classList.remove("active");
        }
    
        // Add "active" class to the clicked tab and tablink
        document.getElementById(tabName).classList.add("active");
        evt.currentTarget.classList.add("active");
      };
    
      useEffect(() => {
        // Attach event handlers after component is mounted
        const personalButton = document.getElementById('personalButton');
        const companyButton = document.getElementById('companyButton');
    
        if (personalButton && companyButton) {
          personalButton.addEventListener('click', (event) => openTab(event, 'Tab1'));
          companyButton.addEventListener('click', (event) => openTab(event, 'Tab2'));
        }
    
        // Cleanup event handlers when component is unmounted
        return () => {
          if (personalButton && companyButton) {
            personalButton.removeEventListener('click', (event) => openTab(event, 'Tab1'));
            companyButton.removeEventListener('click', (event) => openTab(event, 'Tab2'));
          }
        };
      }, []);

      useEffect(() => {
        const modal = document.getElementById("myModal");
        const openModalBtn = document.getElementById("openModalBtn");
        const closeBtn = document.getElementsByClassName("close")[0];
    
        const openModal = () => {
          modal.style.display = "block";
        };
    
        const closeModal = () => {
          modal.style.display = "none";
        };
    
        const handleOutsideClick = (event) => {
          if (event.target === modal) {
            closeModal();
          }
        };
    
        openModalBtn.addEventListener('click', openModal);
        closeBtn.addEventListener('click', closeModal);
        window.addEventListener('click', handleOutsideClick);
    
        // Cleanup event listeners when component is unmounted
        return () => {
          openModalBtn.removeEventListener('click', openModal);
          closeBtn.removeEventListener('click', closeModal);
          window.removeEventListener('click', handleOutsideClick);
        };
      }, []);
  return (
    <div>
<Navbarone/>
            <div className="container">
        <div style={{display: 'flex',justifyContent: 'center',paddingTop: '100px'}} className="row">
            <div style={{display: 'flex',justifyContent: 'center'}} className="col-lg-12">
                <h1>Verify your identity</h1>
            </div>
            <div className="col-lg-8">
                <div className="upload-drop-your-file">
                    <h1 className="Drop">Drop your files here!</h1>
                </div>
                <div className="add-button-cla">
                    <button className= "add-buttonc"> <span><Image src={i1} alt=""/></span> Add files</button>
                </div>
            </div>
            <div className="col-lg-8">
                <div className="tab-container">
                <button id="personalButton" className="tablink">
        Personal seller verification
      </button>
      <button id="companyButton" className="tablink">
        Company seller verification
      </button>

                    <div id="Tab1" className="tabcontent">
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="mail" for="">Phone verification </label>
                                <input className="Type-hear" type="text" placeholder="Type here..."/>
                            </div>
                            <div className="col-lg-6">
                                <label className="mail" for="">Mail verification </label>
                                <input className="Type-hear" type="text" placeholder="Type here..."/>
                            </div>
                            <div className="col-lg-6">
                                <label className="mail" for="">ID verification </label>
                                <input className="Type-hear" type="text" placeholder="Type here..."/>
                            </div>
                            <div className="col-lg-6">
                                <label className="mail" for="">Bvn verification </label>
                                <input className="Type-hear" type="text" placeholder="Type here..."/>
                            </div>
                            <div style={{display: 'flex',justifyContent:'center',alignItems:'center',marginTop: '20px'}}
                                className="col-lg-12">
                                <button className="tsbs-button">Submit</button>

                            </div>
                        </div>
                    </div>
                    <div id="Tab2" className="tabcontent">
                        <div className="row">
                            <div className="col-lg-6">
                                <label className="mail" for="">Phone verification </label>
                                <input className="Type-hear" type="text" placeholder="Type here..."/>
                            </div>
                            <div className="col-lg-6">
                                <label className="mail" for="">Mail verification </label>
                                <input className="Type-hear" type="text" placeholder="Type here..."/>
                            </div>
                            <div className="col-lg-6">
                                <label className="mail" for="">CAC documents verification </label>
                                <input className="Type-hear" type="text" placeholder="Type here..."/>
                            </div>
                            <div className="col-lg-6">
                                <label className="mail" for="">Bvn verification </label>
                                <input className="Type-hear" type="text" placeholder="Type here..."/>
                            </div>

                            <div style={{display: 'flex',justifyContent:'center',alignItems:'center',marginTop: '20px'}}
                                className="col-lg-12">

<button className="tsbs-button" id="openModalBtn">Submit</button>
      <div id="myModal" className="modal">
        <div style={{ width: '50%' }} className="modal-content">
          <span className="close">&times;</span>
          <h1>Enter verification code</h1>
          <p>Enter 4 Digit verification code sent to your mobile number ******6354</p>
          <meta charSet="UTF-8" />

          <form>
            <input type="text" maxLength="1" className="verification-input" id="digit1" />
            <input type="text" maxLength="1" className="verification-input" id="digit2" />
            <input type="text" maxLength="1" className="verification-input" id="digit3" />
            <input type="text" maxLength="1" className="verification-input" id="digit4" />
          </form>

          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}
            className="col-lg-12">
            <button className="tsbs-button">Submit</button>
          </div>
        </div>
      </div>
<script src="script.js"></script>
</div>
</div>
</div>
</div>
</div>
</div></div>
    </div>
  )
}
