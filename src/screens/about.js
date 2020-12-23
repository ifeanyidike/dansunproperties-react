import React from 'react'
import styles from "../styles/about.module.css"
import Meta from "../components/Meta"

const about = () => {
    return (
        <div>
            <Meta title="About Dansun Properties" />
            <div className={styles.topabout}>    
                <div>
                    <h2>About Us</h2>
                    <hr />
                </div>
            </div>  
            <div className={styles.content}>
                <img src="/about/1.png" alt="First about content"/>
                <img src="/about/2.png" alt="Second about content"/>
                <img src="/about/3.png" alt="Third about content"/>
                <img src="/about/4.png" alt="Fourth about content"/>
                <img src="/about/5.png" alt="Fifth about content"/>
                <img src="/about/6.png" alt="Sixth about content"/>
                <img src="/about/7.png" alt="Seventh about content"/>
                <img src="/about/8.png" alt="Eight about content"/>
                <img src="/about/9.png" alt="Nineth about content"/>
                <img src="/about/10.png" alt="Tenth about content"/>
                
            </div>
        </div>
    )
}

export default about
