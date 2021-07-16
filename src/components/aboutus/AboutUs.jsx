import React from 'react'
import classes from './AboutUs.module.css'
import {animalsPhotos} from '../../constants/constant'

const AboutUs = () => {
    return (
        <div className={classes.aboutus__container} id="About">
            <div className={classes.image__gallery}>
                <img src={animalsPhotos[1]} alt="animal-1" className={classes.image__1}/>
                <div className={classes.row}>
                    <img src={animalsPhotos[0]} alt="animal-1" className={classes.image__2}/>
                    <img src={animalsPhotos[2]} alt="animal-1" className={classes.image__2}/>
                </div>
            </div>
            <div className={classes.description}>
                <h1>Run Wild</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nihil accusamus aliquam quis illum, aliquid, atque, explicabo neque sed minus rerum. Recusandae quas, natus aspernatur dolore ex quam quae qui voluptas iusto porro neque impedit, veritatis maxime, velit quia eius ratione. Ratione accusantium aut odio expedita odit quos repellendus aspernatur.</p>
                <button className={classes.button}>Reach us</button>
            </div>
        </div>
    )
}

export default AboutUs
