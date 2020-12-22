import React from "react"
import { useEffect, useState } from "react"
import axios from "axios"
import { useHistory, useLocation  } from "react-router-dom"
import { makeStyles } from '@material-ui/core/styles';
import { Button, Modal, Backdrop, Fade } from '@material-ui/core';
import styles from "../styles/properties.module.css"
import CurrencyFormat from 'react-currency-format';
import logo from "../images/logo.png"
import CircularProgress from "../components/ProgressCircle"
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import queryString from 'query-string'
import OrderInfoModal from "./OrderInfoModal";

const useStyles = makeStyles((theme) => ({
    paper: {
        boxShadow: theme.shadows[2],
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function TransitionsModal({ open, handleClose }) {
    
    const [openOrder, setOpenOrder] = useState(false);
    const history = useHistory()
    const location = useLocation()
    // const id = location.search.split("=")[1]
    const params = queryString.parse(location.search)
    let {id} = params  
    
    const [property, setProperty] = useState([])
    const classes = useStyles();
    
    const API_URL = "https://dansun-server.herokuapp.com"    

    useEffect(() => {

        const getProperty = async () => {
            const { data } = await axios(`${API_URL}/properties/${id}`)
            console.log(data)
            setProperty(data)
        }
        getProperty()
    }, [id])


    return (
        <div>

            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                className={styles.modal}
                open={open}
                onClose={handleClose}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={open}>
                
                    {
                        property && (
                            <div className={`${styles.modal__content} ${classes.paper}`}>
                        <div className={styles.backarrow} onClick={handleClose}>
                            <ArrowBackIosIcon fontSize="large" />
                        </div>
                    
                        {
                            property === undefined || property.length === 0 ? (
                                <CircularProgress />
                            ) : (
                                <>                                                                
                                    <div className={styles.modal__contentLeft}> 
                                        {property && (<img
                                            src={property.mainImage ? property.mainImage.url : ''}
                                            alt={property.mainImage ? property.mainImage.alternativeText : ''} />)
                                        }
                                    <div className={styles.image__grid}>
                                        {property && property.images && 
                                            (property.images.map(image => (
                                            <img
                                                key={image._id}
                                                src={image.url}
                                                alt={image.alternativeText} />
                                            )))
                                        }
                                        </div>
                                    </div>
                                    <div className={styles.modal__contentRight}>
                                        <div className={styles.modal__logo}>
                                            <img src={logo} alt="logo" width="150px" />
                                                {/* <FavoriteIcon /> */}
                                        </div>
                                        <div className={styles.modalright__text}>
                                            <div>
                                
                                        {property &&
                                            (<CurrencyFormat
                                                value={property.price}
                                                displayType={'text'}
                                                thousandSeparator={true}
                                                prefix={'₦'}
                                                renderText={value => <h2>{value}</h2>}
                                            />)
                                        }

                                        <p>
                                            {   
                                                property &&
                                                property.features.bed &&
                                             `${property.features.bed} bds `
                                             }
                                            {
                                                property && 
                                                property.features.bath &&
                                                ` | ${property.features.bath} ba`
                                            }
                                            {
                                                property && 
                                                property.features.area &&
                                                `| ${property.features.area} sqft`}
                                        </p>
                                    </div>
                                        <p>{property && property.location}</p>
                                        <span>
                                        <p>
                                            {property && property.categories.map(
                                                category => <span className={styles.tag}>
                                                {`${category.name}`}</span>)}
                                        </p>
                                        </span>
                                    <div className={styles.modalright__cta}>
                                        {property.status !== 'sold' &&
                                        <button 
                                            onClick={() => setOpenOrder(true)}                           
                                        >
                                            Place an Order
                                        </button>
                                        }
                                            
                                        <button 
                                            onClick={()=>history.push(`/inspect/${id}`)}                                                                                       
                                        >
                                            <i className="fas fa-search-location"></i>
                                            <span>Inspect</span> 
                                        </button>
                                    </div>
                                    <iframe
                                        className={styles.iframe}
                                        src={property && property.map_location}
                                        title="Property iFrame"
                                        width="100%"                                        
                                        frameborder="0"
                                        style={{ border: 0 }}
                                        allowfullscreen=""
                                        aria-hidden="false"
                                        tabindex="0">
                                    </iframe>
                                </div>
                            </div>
                        </>
                    )
                }                                        
            </div>
                        )
                    }
        </Fade>
    </Modal>
    
    <OrderInfoModal 
        openOrder = {openOrder}
        setOpenOrder = {setOpenOrder} />
</div>
);
}


