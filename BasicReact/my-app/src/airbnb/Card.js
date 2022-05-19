import React from 'react'

export default function Card(props) {
    let badgeText
    if(props.openSpots === 0){
      badgeText = "SOLD OUT"
    }else if (props.location === "Online"){
      badgeText = "ONLINE"
    }


  return (
    <div className="card">
       
        {badgeText && <div className='card--badge'>{badgeText}</div>}
        <img src={props.coverImg} className='card--image' alt="" />
        <div className='card--state'>
            <img src="../image/airbnbImage/star 1.png" className="card--star" alt="" />
            <spane className="rating"><strong>{props.stats.rating}</strong></spane>
            
            <spane className="grey">({props.stats.reviewCount})</spane>
            <spane className="grey">{props.location}</spane>
        </div>
        <p>{props.title}</p>
        <p><strong>From ${props.price} </strong>/person</p>
        
    </div>
  )
}
