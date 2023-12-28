import React from 'react'
import Image from "next/image";

import i1 from "/img/Screenshot_20230731-141901 1.png"
import i2 from "/img/dezain.png"
export default function Navbarone() {
  return (
    <header style={{backgroundColor: '#1F999A',zIndex: "9"}} class="navbar1">
    <nav class="navbar">
        <div class="container">
            <a href="/" class="navbar-brand"><Image src={i1} alt=""/></a>
            <form class="d-flex" role="search">

                <div style={{display: 'flex', gap: '15px'}}>
                    <a href="/Pages/MySaves"><div class="hoverfix"><i class="fa-regular fa-bookmark"></i></div></a>
                    <a href="/Pages/Notifications"><div class="hoverfix"><i class="fa-regular fa-bell"></i></div></a>
                    <a href="/Pages/BuyerRequest">
                        <div class="hoverfix "><i class="fa-solid fa-message"></i></div>
                    </a>
                    <div class="hoverfix"><Image src={i2} alt=""/></div>
                    <button class="home-button" style={{backgroundColor: 'white',color: 'black',borderColor: 'white',borderRadius: '10px'}}
                        type="submit">Start Selling</button>
                </div>
            </form>
        </div>
    </nav>
</header>
  )
}
