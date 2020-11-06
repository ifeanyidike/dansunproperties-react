import React, {useEffect, useState} from "react";
import axios from 'axios'
import Button from '@material-ui/core/Button';
import styles from "../styles/propertiesitems.module.css"


const SelectPriceRange = ({minVal, setMinVal, maxVal, setMaxVal}) => {
    const [prices, setPrices ] = useState([])
    const API_URL = "https://dansun-server.herokuapp.com"
    useEffect(()=>{
        const getPrices = async() =>{
            const {data} = await axios.get(`${API_URL}/properties`)
            setPrices(data.map(datum => datum.price))
        }
        getPrices()
    },[])
    const priceSorted = prices.sort((a, b)=> a - b)
    const range = priceSorted[priceSorted.length - 1] - priceSorted[0]
    const startVal = priceSorted[0]
    const priceDiff = range/10
    
    const minOptions = [
                        startVal, 
                        startVal + priceDiff, 
                        startVal + 2*priceDiff, 
                        startVal + 3*priceDiff, 
                        startVal + 4*priceDiff
                        ]
    const maxOptions = [
                        startVal + 5*priceDiff, 
                        startVal + 6*priceDiff, 
                        startVal + 7*priceDiff, 
                        startVal + 8*priceDiff,
                        startVal + 9*priceDiff,
                        priceSorted[priceSorted.length - 1]  
                    ]
 
    return (
        <div>

            <div className={styles.totalsearchdropdown}>
                <label className={styles.labelRange}>

                    <select className={styles.uisearachdrwopdown} onChange={e => setMinVal(e.target.value)} >
                        {minOptions.map(option => {
                            return (
                                <option value={option}>
                                    {" "}
                                    {`₦${option}`}{" "}
                                </option>
                            );
                        })}
                    </select>
                    <h4>Min</h4>
                </label>

                <label className={styles.labelRange}>
                    <select className={styles.uisearachdrwopdown} onChange={e => setMaxVal(e.target.value)} >
                        {maxOptions.map(option => {
                            return (
                                <option value={option}>
                                    {" "}
                                    {`₦${option}`}{" "}
                                </option>
                            );
                        })}
                    </select>
                    <h4>Max</h4>
                </label>
            </div>
            
        </div>

    );
}
export default SelectPriceRange;
