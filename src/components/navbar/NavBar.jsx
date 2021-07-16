import React,{useState,useEffect} from 'react'
import {githubLink,instaLink,linkedInLink} from '../../constants/constant'
import classes from './NavBar.module.css'
import _ from 'lodash'

const NavBar = ({leftClick,rightClick}) => {

    const [navClass,setNavClass] = useState([classes.sidebar])
    const [navActive,setNavActive] = useState(false)

    const handleNavScroll=()=>{
        if(window.scrollY>80){
            setNavClass([...navClass,classes.active])
        }else{
            setNavClass([classes.sidebar])
        }
    }

    const handleNavActive=()=>{
        if(!navActive){
            setNavClass([...navClass,classes.nav__active])
        }else{
            setNavClass([classes.sidebar])
        }
        setNavActive(!navActive)
    }
    
    useEffect(() => {
       window.innerWidth>600 &&  window.addEventListener("scroll",_.throttle(handleNavScroll,1000))   
    }, [])

    return (
        <div className={classes.navbar__container}>
                <div className={classes.hamburger} onClick={handleNavActive}>
                    <div className={classes.h1}></div>
                    <div className={classes.h1}></div>
                    <div className={classes.h1}></div>
                </div>
                <div className={classes.social__links}>
                    <a href={githubLink}>
                        <i className="fab fa-github"></i>
                    </a>
                    <a href={instaLink}>
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href={linkedInLink}>
                        <i className="fab fa-linkedin-in"></i>                
                    </a>                
                </div>
                <div className={classes.slider__controller}>
                    <button className={classes.image__slider__button} onClick={leftClick}>
                        <i className="fas fa-chevron-left"></i>
                    </button>
                    <button className={classes.image__slider__button} onClick={rightClick}>
                        <i className="fas fa-chevron-right"></i>
                    </button>
                </div>
            <div className={navClass.join(" ")}>
                <h2 className={classes.logo}>Run Wild</h2>
                <a href="#Home" onClick={handleNavActive}>Home</a>
                <a href="#About" onClick={handleNavActive}>About us</a>
                <a href="#Rides" onClick={handleNavActive}>Rides</a>
                <a href="#Contact" onClick={handleNavActive}>Contact Us</a>
            </div>
        </div>
    )
}

export default NavBar
