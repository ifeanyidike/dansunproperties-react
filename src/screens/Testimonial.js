import React, {useEffect, useState} from 'react'
import "../styles/testimonial.css";
import TestimonialSlide from "../components/TestimonialSlide"
import {useLocation} from "react-router-dom"
import queryString from 'query-string'
import axios from 'axios'
import CircularProgress from "../components/ProgressCircle"

const Testimonial = () => {
    const location = useLocation()
    const {id} = queryString.parse(location.search)  
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [testimonialItem, setTestimonialItem] = useState([])
    const API_URL = "https://dansun-server.herokuapp.com"  
    
    useEffect(()=>{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const getTestimonials = async() =>{
            try {
                setLoading(true)
                const {data} = await axios.get(`${API_URL}/testimonials/${id}`, config)
                setTestimonialItem(data)
                setLoading(false)
            } catch (error) {
                setError(error.message)
            }
        }
        getTestimonials()
        
    }, [id])
    
    return (
        <>
            {
                loading ? <CircularProgress /> :
                error ? "Error.."
                :
                
                <div>
                    <div className="toptestimonial">
                        <div>
                            <h2>Browse Testimonials</h2>
                            <hr/>
                            <p>What people say about us!</p>
                        </div>                                
                    </div>
            
                    <div className="testimonial__item">
                        <div className="testimonial__image">
                            <img src={testimonialItem.image && testimonialItem.image.url} 
                            alt={testimonialItem.image && testimonialItem.image.alternativeText}/>
                        <small>Person name</small>
                        </div>
                        <div className="testimonial__text">
                            <h4>{testimonialItem.caption}</h4>
                            <p>
                                {testimonialItem.description}
                            </p>
                        </div>                        
                    </div>
                    <div className="testimonial__slideContainer">
                        <h2>Browse other testimonials</h2>
                        <p>What other clients say about us</p>
                        <TestimonialSlide
                            perPage={
                                window.innerWidth >= parseInt('1440px') ? 3 : 
                                window.innerWidth >= parseInt('768px') ? 2 : 1}                        
                        />   
                    </div>
                </div>                
            }                
        </>
    )
}

export default Testimonial
