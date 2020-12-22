import React, {useState} from "react";
import axios from "axios"
import SearchIcon from '@material-ui/icons/Search';
import "../styles/sell.css"
import dansImage from "../images/dansimage.PNG"
import dansImage1 from "../images/dansimage1.PNG"
import dansImage2 from "../images/dansimage2.PNG"
import dansImage5 from "../images/dansimage5.png"
import { useHistory } from "react-router-dom"

const Sell =()=>{
    const history = useHistory()
    const [usePhone, setUsePhone] = useState(false)
    const [email, setEmail] = useState("")
    const [phoneNo, setPhoneNo] = useState("")
    const [message, setMessage] = useState("")
   
    const handleSubmit = async(item) =>{              
        
        const API_URL = "https://dansun-server.herokuapp.com"  
        
        const itemBody =
            {   email: email,
                phoneNo: phoneNo
            }
            
        
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        
        try {                                                      
            
            const res = await axios.post(
                `${API_URL}/emailists`, itemBody, config)
            
            if (res.status === 200){
                history.push("/contact")       
            }
            
        } catch (error) {
            console.error(error)    
            setMessage(error.message)        
        }              
    }
    
    const handleEmailSubmit = (e) =>{
        e.preventDefault()
        handleSubmit("email")
    }
    
    const handlePhoneSubmit = (e) =>{
        e.preventDefault()
        handleSubmit("phoneNo")
    }
    
    
    return(
        
    <div className="sells">        
        <div className="topsell">    
            <div className="sell_with">
                <h2 className="sell__header">Sell with confidence</h2>
                <p> Dansun is making it simpler and safer to sell your home and move forward.
                </p>
            </div>      
        </div>    
                     
        <hr />
        
        <div className="sellsFirstD">
            <div className="sells__left" >
            <div className="sell_discover">
                <div className="message">
                    {message}                    
                </div>
            
                <h2>Discover how Dansun can help</h2>
                <p>Skip the hassle and sell your home directly</p>
            </div>
        
            <form 
                onSubmit={handleEmailSubmit}
                className="sell_form" 
                style={{display: usePhone ? "none" : "flex"}}
            >
                <input
                    className="valueSearch"
                    required
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email address" />
                
                <button 
                    type="submit" 
                    className="sell_button"
                >
                    Get Started
                </button>
      
            </form>
            
            
            <form 
                className="sell_form phone" 
                onSubmit={handlePhoneSubmit}
                style={{display: usePhone ? "flex" : "none"}}
            >
                <input
                    className="valueSearch"
                    required
                    type="tel"
                    value={phoneNo}
                    onChange={e => setPhoneNo(e.target.value)}
                    placeholder="Enter Phone No" />
                
                <button 
                    type="submit" 
                    className="sell_button"
                >
                    Get Started
                </button>      
            </form>
            
            <div onClick={()=> setUsePhone(!usePhone)} className="alternative">                
                Enter {usePhone ? "email"  : "phone"} instead
            </div>
        </div>
            <img className="sells__right" src={dansImage} alt="dansun property icon" />
      </div>
      <div className="sellsAgent">
            <div className="sell_withA">    
                <img className="dansagent__img" src={dansImage2} alt="dansun properties" />
                <div className="danAgent">
                    <h2>Work with an agent</h2>
                    <p>Dansun provides professional agents 
                    <a href="#"> pick the right one</a></p>
                    <div className="dansagent__button">
                        <button  
                            onClick={()=>history.push("/find-an-agent")}
                            className="sell_button dans">Search now</button>                  
                    </div>
                    
                </div>    
            </div>
        
            <div className="sell_yours">
                <h2>Sell it yourself</h2>
                <p>Dansun guides you on
                    <a href="#" > how to sell by owner</a>
                </p>
                <div className="dansagent__button">
                    <button  
                        onClick={()=>history.push("/contact")}
                        className="sell_button dans">
                        Start listing</button>
                </div>
            </div>
        </div>
        <hr></hr>
      <div className="sell_value">
        <img className="dansagent__img" src={dansImage2} alt="dans properties" />
      
        <div className="sell_explore danAgent">
            <h2>Explore your home’s value</h2>
            <p>Find out your home’s estimate, the best time to sell, and more.</p>
          
            <div className="dansagent__button">
                <button  
                    onClick={()=>history.push("/contact")}
                    className="sell_button dans">Explore</button>                  
            </div>
        </div>   
      </div>
      <div className="sell_acquaint">
        <img className="dans__thumb" src={dansImage5} alt="dansun properties thumbnail" />
        <div className="sell_get" >
            <h2>Get acquainted with the process</h2>
            <p>As you begin the 
                <a href="#" > steps to selling,</a> 
                learn what to expect with our Sellers Guide.
            </p>
            
            <div  className="sell_timing">
                <div>
                    <i className="fas fa-check-square"></i>
                    <a href="#" > Timing your selling</a>
                </div>
                
                <div>
                    <i className="fas fa-check-square"></i>
                    <a href="#" > Preparing to sell</a>
                </div>
                
                <div>
                    <i className="fas fa-check-square"></i>
                    <a href="#" > Getting noticed</a>
                </div>
                
                <div>
                    <i className="fas fa-check-square"></i>
                    <a href="#" > Pricing your home</a>
                </div>
                
                
                
          </div>
        </div>
      </div> 
      </div>


    )

}


export default Sell;