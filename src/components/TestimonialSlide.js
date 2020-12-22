import React, {useState, useEffect} from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import ArrowBackIcon from '@material-ui/icons/ArrowBackIos';
import {testimonial_features} from "./JsonAPIs"
import '../styles/testimonial.css'
import {Link} from "react-router-dom"
import axios from 'axios'


const Testimonial = ({perPage}) => {
    const [testimonialItems, setTestimonialItems] = useState([])
    const API_URL = "https://dansun-server.herokuapp.com"  
    
    useEffect(()=>{
        const config = {
            headers:{
                'Content-Type': 'application/json'
            }
        }
        const getTestimonials = async() =>{
            const {data} = await axios.get(`${API_URL}/testimonials`, config)
            setTestimonialItems(data)
        }
        getTestimonials()
        
    }, [])
            
    const length = testimonialItems && testimonialItems.length
    
    return (
        <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={50}
        totalSlides={length}
        visibleSlides={perPage}
        infinite={true}
        isIntrinsicHeight={true}
      >
        <Slider>
          
           {testimonialItems.map((feature, index) =>(
            <Slide key={feature._id} index={index}>
                <div className="slide__item">                    
                    <img src={feature.image.url} alt={`${feature.image.alternativeText} testimonial`}/>
                    <div className="slide__itemContent">
                        <h5>{feature.caption}</h5>
                        <p>
                            {
                                feature.description.length > 70 
                                ? 
                                
                                feature.description.substring(0, 70) 
                                + String.fromCharCode(8230)
                                
                                :
                                feature.description
                            }
                            <div><Link to={`/testimonial?id=${feature._id}`}>See More!</Link></div>
                            
                        </p>
                        <small>{feature.name}</small>
                    </div>
                </div>
            </Slide>
           ))}
           
          
        </Slider>
        <ButtonBack><ArrowBackIcon fontSize='large' /></ButtonBack>
        <ButtonNext><ArrowForwardIcon fontSize='large' /></ButtonNext>
          
      </CarouselProvider>
    )
}

export default Testimonial
