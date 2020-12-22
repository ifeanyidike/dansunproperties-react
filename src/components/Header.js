import React, {useState} from "react"
// import dependencies
import logo from "../images/logo2.png"
import "../styles/Header.css"
import {Link, useLocation} from "react-router-dom"


const Nav = () => {
    
    const {pathname} = useLocation()
    
    
    const toggleNav = (e) => {
        const nav = document.querySelector("nav > ul");
        const navlinks = document.querySelectorAll("nav > ul li");
        const hamburger = document.querySelector(".hamburger");

        //Toggle nav
        nav.classList.toggle("nav__active");
        document.documentElement.classList.toggle("bodyOverflow")
        document.body.classList.toggle("bodyOverflow")

        //Animate Links
        navlinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = "";
            } else {
                link.style.animation = `navlinkfade 0.5s ease forwards ${index / 4 + 0.3
                    }s`;
            }
        });

        //hamburger animation
        hamburger.classList.toggle("toggler");
    };
    
    const handleToggleNav = () =>{
        if(window.innerWidth <= 796){
            toggleNav()
        }
    }

    return (
        <nav className="nav" >
            <div className="logo">
                <Link to="/"><img src={logo} alt="Dansun" /></Link>
            </div>
            <ul >
                <li>
                    <Link to="/" onClick={handleToggleNav}>
                        <div className="menu__visible">
                            <div className="menu__right">
                                <div className="iconMobile__left">
                                    <i className="fas fa-home"></i>
                                </div>
                                <span className="dropdown__text"
                                className={pathname === '/' ? 'active' : ''}
                                >
                                    Home                                    
                                </span>
                            </div>


                        </div>
                    </Link>
                </li>                

                <li>
                    <Link to="/sell" onClick={handleToggleNav}>
                        <div className="menu__visible">
                            <div className="menu__right">
                                <div className="iconMobile__left">
                                    <i className="fas fa-project-diagram "></i>
                                </div>
                                <span className="dropdown__text"
                                className={pathname === '/sell' ? 'active' : ''}>
                                    Sell
                                
                                </span>
                            </div>                            
                        </div>                        
                    </Link>
                </li>         
                       
                <li>
                    <Link to="/properties" onClick={handleToggleNav}>
                        <div className="menu__visible">
                            <div className="menu__right">
                                <div className="iconMobile__left">
                                    <i className="far fa-building "></i>
                                </div>
                                <span className="dropdown__text"
                                className={pathname === '/properties' ? 'active' : ''}>
                                    Properties                                
                                </span>
                            </div>                            
                        </div>                        
                    </Link>
                </li>                

                <li>
                    <Link to="/find-an-agent" onClick={handleToggleNav}>
                        <div className="menu__visible">
                            <div className="menu__right">
                                <div className="iconMobile__left">
                                    <i className="fas fa-users "></i>
                                </div>
                                <span className="dropdown__text"
                                className={pathname === '/find-an-agent' ? 'active' : ''}>
                                    Find an agent                                
                                </span>
                            </div>                           
                        </div>                        
                    </Link>
                </li>
                <li>
                    <Link to="/contact" onClick={handleToggleNav}>
                        <div className="menu__visible">
                            <div className="menu__right">
                                <div className="iconMobile__left">
                                    <i className="fas fa-envelope-open-text"></i>
                                </div>
                                <span className="dropdown__text"
                                className={pathname === '/contact' ? 'active' : ''}>
                                    Contact                                 
                                </span>
                            </div>                            
                        </div>                        
                    </Link>
                </li>




            </ul>

            <div className="hamburger" onClick={toggleNav}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    );
};

export default Nav;
