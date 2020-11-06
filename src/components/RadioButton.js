import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import styles from "../styles/propertiesitems.module.css"
import {useHistory, useLocation} from "react-router-dom"
import queryString from "query-string"

const RadioButton = ({status, setStatus}) => {
        
    // const searchObj = queryString.parse(location.search)
    // console.log(Object.keys(searchObj).includes('status') )            
    
    const handleBuy = () =>{     
        setStatus('sale')    
    }
    
    const handleSold = () =>{     
        setStatus('sold')    
    }
    
    const handleRent = (e) =>{ 
        setStatus('rent')           
    }
    const handleAll = (e) =>{ 
        setStatus('all')           
    }
    
    return (

        <div className={styles.ControlGroup}>

            <div className={styles.myContainer}  >
            
            
                
            
                <label className={styles.radioLabel}>

                    <div className={styles.radioFrame}>
                        <input 
                            className={styles.myInput}
                            type="radio"
                            name="radio"
                            value="sale"
                            checked={status === 'sale'}  
                            onChange={handleBuy}                            
                         />
                    </div>
                    <div className="control__indicator"></div>
                    <h3>Buy property?</h3>
                </label>
                
                <label className={styles.radioLabel}>

                    <div className={styles.radioFrame}>
                        <input 
                            className={styles.myInput} 
                            type="radio" 
                            name="radio"                                 
                            value="rent"
                            checked={status === 'rent'}   
                            onChange={handleRent}      
                        />
                    </div>
                    <div class="control__indicator"></div>
                    <h3>Rent property?</h3>
                </label>
                <label className={styles.radioLabel}>

                    <div className={styles.radioFrame}>
                        <input 
                            className={styles.myInput}
                            type="radio"
                            name="radio"
                            value="sale"
                            checked={status === 'sold'}  
                            onChange={handleSold}                            
                         />
                    </div>
                    <div className="control__indicator"></div>
                    <h3>Sold properties?</h3>
                </label>
            </div>
            

        </div>

    )
}
export default RadioButton;