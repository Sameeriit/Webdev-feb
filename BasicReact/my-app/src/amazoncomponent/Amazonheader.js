/* eslint-disable jsx-a11y/alt-text */

import React from "react"



function Amazonheader() {
    return (
    
    <div className ="header">

        <img className = "img1"  src = "./image/logo.png" width={100} height={60} alt=""/>
         <div className="location">
         <span className="line1">Hello</span>
         <span className="line2"> <strong>select your address</strong></span>
         </div>
        <select className ="dropdown"></select>
        <input type = "text" id="search" className ="search_bar"></input>
        <span id ="search-bar__submitbtn"className ="search">
        <input className =" search2"></input>
        </span>
        
        
        
        </div>
    )
}
export default Amazonheader;