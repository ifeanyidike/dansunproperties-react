import React from "react"
import {Link} from "react-router-dom"
import styles from "../styles/footer.module.css"
import logo from "../images/logo.png"

const Footer = () => {
    return (
        <div className={styles.footer}>
            <div className={styles.footer__link}>
                <Link to="/">
                    Home
                </Link>
                <Link to="/about">
                    About
                </Link>
                <Link to="/contact">
                    Contact
                </Link>
                <Link to="/properties">
                    Properties
                </Link>
                <Link to="/privacy-policy">
                    Privacy
                </Link>
                <Link to="/terms">
                    Terms
                </Link>                
                <Link to="/sell">
                    Sell
                </Link>
            </div>

            <p className={styles.footer__text}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint temporibus perspiciatis nam voluptatum ratione? Quam sed consectetur voluptate architecto, qui magnam dolor eos nesciunt, maxime ipsum quos eligendi, corrupti fuga.
            </p>

            <div className={styles.footer__bottomText}>
                <img src={logo} />
                <a href="#"> <i className="fab fa-facebook fa-2x"></i> </a>
                <a href="#"> <i className="fab fa-twitter-square fa-2x"></i></a> 
                <p>© 2006-2020 Dansun</p>
            </div>
        </div>
    )
}

export default Footer
