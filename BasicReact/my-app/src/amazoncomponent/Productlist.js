import React from 'react'

function Productlist({info})  {
  // console.log(info.length);
  return (
    <div className ="product">
    {/* // <div style = {{backgroundColor:"red"}}>   */}
    {/* <img src="./image/logo.png" alt="" /> */}
         <h3>{info.id}</h3>
         <h4>{info.name}</h4>
        <h5>{info.age}</h5> 
    </div>
  )
}
export default Productlist;
