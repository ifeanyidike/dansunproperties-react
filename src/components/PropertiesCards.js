import React from 'react';
import styles from "../styles/properties.module.css"
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import CurrencyFormat from 'react-currency-format';
import {Link} from "react-router-dom"

export default function PropertiesCard({ click, id, mainImage, location, status, price, categories, features }) {

    // const API_URL = "https://dansun-server.herokuapp.com"
    
    console.log(mainImage && mainImage.url)
    return (
        <div className={styles.propertiescard}>
            <div>
                <div className={styles.propertiescard__media}>
                    <img
                        src={mainImage ? mainImage.url: ""}
                        alt={mainImage ? mainImage.alternativeText: ''}
                    />
                    <Link to={`/properties?id=${id}`}>
                        <Fab
                            size="medium"
                            color="secondary"
                            aria-label="Learn more"
                            className={styles.propertiescard__more}
                            onClick={click}
                        >
                            <AddIcon />
                        </Fab>
                    </Link>

                </div>
                <div className={styles.propertiescard__content}>
                    <div>
                        <CurrencyFormat
                            value={price}
                            displayType={'text'}
                            thousandSeparator={true}
                            prefix={'₦'}
                            renderText={value => <h2>{value}</h2>}
                        />
                        <p>
                            {features.bed && `${features.bed} bds | ${" "}`}
                            {features.bath && `${features.bath} ba | ${" "}`}
                            {features.area && `${features.area} sqft`}
                        </p>
                    </div>
                    <p>{location}</p>
                    <span>
                        <p> {categories.map(category => `${category.name} ${" "}`)}</p>
                        
                        <span 
                        style={{backgroundColor: status === 'sold' ? 'red' : 'green'}}
                            className={styles.dot}>                            
                        </span>
                        
                        <span 
                        style={{color: status === 'sold' ? 'red' : 'green'}}
                            > 
                            {status === 'sale' ? 'buy' : status}                           
                        </span>
                        
                        {/* <FavoriteIcon onClick={() => alert("Hello")} fontSize="large" /> */}
                    </span>
                </div>
            </div>

        </div>
    );
}
