import React, {useState, useEffect} from 'react'
import styles from "../styles/termsandpolicies.module.css"
import ReactMarkdown from "react-markdown"
import axios from "axios"

const PolicyAndTerms = ({type, id, caption}) => {
    const [details, setDetails] = useState([])
    const API_URL = "https://dansun-server.herokuapp.com"  
    
    useEffect(()=>{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const getDetails = async() =>{
            const {data} = await axios.get(`${API_URL}/${type}/${id}`, config)
            setDetails(data.content)
        }
        getDetails()
        
    }, [type, id])
    
    console.log(details)
    return (
        <>
            <div className={styles.termspolicies}>    
                <div>
                    <h2>{caption}</h2>
                    <hr />
                </div>                
            </div> 
            <div className={styles.content}>
                <ReactMarkdown
                    source={details}
                />
            </div>
            
        </>
    )
}

export default PolicyAndTerms
