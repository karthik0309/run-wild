import React from 'react'
import classes from './Carousel.module.css'

const Carousel = ({currSlide,Images}) => {
    return (
        <div className={classes.carousel__container}>
            <div className={classes.carousel__content}>
                <h1 className={classes.title}>
                    <span className={classes.span}>
                      The <br></br>
                    </span> 
                    Wild Life
                </h1>
                <p className={classes.description}>The Adventure begins here</p>
            </div>
            {Images.map((ele,index)=>(
              <div 
              className={index===currSlide ? classes.active : classes.curr__slide}  
              key={index}>
                  {index===currSlide && 
                  <img 
                  src={ele.link} 
                  alt="animals" 
                  className={classes.image}/>}
              </div>
            ))}
        </div>
    )
}

export default Carousel
