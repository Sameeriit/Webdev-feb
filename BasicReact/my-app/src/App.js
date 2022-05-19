import React from 'react';
// import Header from "./component/Header";
// import Loginpage from './component/Loginpage';


// import './amazoncomponent/style/Body.css';
// import './amazoncomponent/style/Amazonheader.css';
// import './amazoncomponent/style/subheader.css';
// import Amazonheader from './amazoncomponent/Amazonheader';
// import Subheader from './amazoncomponent/Subheader';
// import Object from './amazoncomponent/Object'
// import Productlist from './amazoncomponent/Productlist';

import './airbnb/airbnb.css';
import Navbar from './airbnb/Navbar';
import Hero from './airbnb/Hero';
import Card from './airbnb/Card'
import Data from './airbnb/Data';

function App() {

  //  console.log(Object)
  //  useEffect(()=>{

  //  },[Object])

  const cards = Data.map((data)=>{
      return (
        <Card 
        key = {data.id}

        {...data} // it spread all of the property of  this data as separate props into my card component 


        // data = {data}  // we can use  props.data where i passed


        // img ={data.coverImg}
        // rating ={data.stats.rating}
        // reviewCount= {data.stats.reviewCount}
        // country = {data.location}
        // title ={data.title}
        // price = {data.price}
        // openSpots={data.openSpots}
        />
      )
  }) 

  
  return (
    <>
{/*   
      < Amazonheader /> 
      <Subheader/> 

     { Object.map((ele,idx) => {
       // console.log(ele)
          return (
    
         <Productlist info={ele} key={ele.id}/>
    
         )
        })
     } */}

     <Navbar/>
     <Hero/>
     <section className="cards-item">
         {cards}
     </section>
     {/* <Card img ="../image/airbnbImage/image 12.png"
          rating ={"5.0"}
          reviewCount= {6}
          country = "India"
          title ="Life Lessons with Katie Zaferes"
          price = {136}/>

      <Card img ="../image/airbnbImage/image 12.png"
          rating ={"5.0"}
          reviewCount= {6}
          country = "India"
          title ="Life Lessons with Katie Zaferes"
          price = {136}/>

      <Card img ="../image/airbnbImage/image 12.png"
          rating ={"5.0"}
          reviewCount= {6}
          country = "India"
          title ="Life Lessons with Katie Zaferes"
          price = {136}/>

      <Card img ="../image/airbnbImage/image 12.png"
          rating ={"5.0"}
          reviewCount= {6}
          country = "India"
          title ="Life Lessons with Katie Zaferes"
          price = {136}/>

      <Card img ="../image/airbnbImage/image 12.png"
          rating ={"5.0"}
          reviewCount= {6}
          country = "India"
          title ="Life Lessons with Katie Zaferes"
          price = {136}/> */}
     
      
   </>
  )
}

export default App;