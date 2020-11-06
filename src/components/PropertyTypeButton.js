import React from 'react'
import "../styles/propertyType.css";

const PropertyType = () => {
    return (
       
    <div>
        <div className="boxLabelandInput">
            <div className="FirstLabelandBox">
               <label className="boxLabel">Houses</label>
                    <input type="checkbox" className="CheckBoxButton" />
            </div>
         
     
            <div className="FirstLabelandBox">
                <label className="boxLabel">Estate</label>
                    <input type="checkbox" className="CheckBoxButton"/>
           </div>

           <div className="FirstLabelandBox">
                <label className="boxLabel">Plazas and Malls</label>
                    <input type="checkbox" className="CheckBoxButton"/>
           </div>
           <div className="FirstLabelandBox">
               <label className="boxLabel">Multi-family</label>
                    <input type="checkbox" className="CheckBoxButton"/>
           </div>
           <div className="FirstLabelandBox">
               <label className="boxLabel">Apartment</label>
                    <input type="checkbox" className="CheckBoxButton"/>
           </div>
           <div className="FirstLabelandBox"> 
               <label className="boxLabel">Lots/Land</label>
           <input type="checkbox" className="CheckBoxButton"/>
           </div>
           
        </div>
    </div>
       
    )
}

export default PropertyType;
