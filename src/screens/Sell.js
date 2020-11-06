import React from "react";
import SearchIcon from '@material-ui/icons/Search';
import "../styles/sell.css"
import dansImage from "../images/dansimage.PNG"
import dansImage1 from "../images/dansimage1.PNG"
import dansImage2 from "../images/dansimage2.PNG"
import dansImage5 from "../images/dansimage5.png"

const Sell =()=>{
    return(
        
    <div className="sells">
    
        <div className="sell_with">
            <h1>Sell with confidence</h1>
            <p> Dansun is making it simpler and safer to sell your home and move forward.
            </p>
        </div>
        
        <hr />
        
        <div className="sellsFirstD">
        <div className="sells__left" >
            <div className="sell_discover">
                <h1>Discover how Dansun can help</h1>
                <p>Skip the hassle and sell your home directly</p>
            </div>
        
            <form className="sell_form">
                <input
                    className="valueSearch"
                    type="text"
                    placeholder="Enter full address" />
                
                <button className="sell_button">Get Started</button>
      
            </form>
      </div>
      <img src={dansImage} />
      </div>
      <div className="sellsAgent">
      <div className="sell_withA">
      
      <img src={dansImage2} />
      <div className="danAgent">
          <h2>Work with an agent</h2>
          <p>Dansun provides professional agents 
          <a href="#"> pick the right one</a></p>
          <button  className="sell_button">Search now</button>
          
      </div>    
      </div>
      <div className="sell_yours">
      <h2>Sell it yourself</h2>
          <p>Dansun guides you on
          <a href="#" > how to sell by owner</a></p>
          <button  className="sell_button">Start listing</button>
      </div>
      </div>
      <hr></hr>
      <div className="sell_value">
      <img src={dansImage2} />
      
      <div className="sell_explore">
          <h2>Explore your home’s value</h2>
          <p>Find out your home’s estimate, the best time to sell, and more.</p>
          
         <form className="valueForm">
         <input
              className="valueSearch"
              type="text"
              placeholder="Enter now" />
            <SearchIcon fontSize="large" className="valueSearch_Icon" />
         </form>
      </div>   
      </div>
      <div className="sell_acquaint">
      <img src={dansImage5} />
      <div className="sell_get" >
          <h2>Get acquainted with the process</h2>
          <p>As you begin the <a href="#" > steps to selling,</a> 
          learn what to expect with our Sellers Guide.</p>
          <div  className="sell_timing">
          <a href="#" > timing your selling</a><br />
          <a href="#" > preparing to sell</a><br />
          <a href="#" > getting noticed</a><br />
          <a href="#" > pricing your home</a>
          </div>
        </div>
      </div> 
      </div>


    )

}


export default Sell;