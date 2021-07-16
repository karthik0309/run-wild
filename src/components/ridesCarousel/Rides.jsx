import React,{useState,useEffect} from 'react'
import classes from './Rides.module.css'
import RidesImages from '../../json/Rides.json'

const Rides = () => {

    const [currSlide,setCurrSlide] = useState(0)

    const [noOfSildes,setNoOfSlides] = useState(4)

    const handleNoOfSlides=()=>{
        if(window.innerWidth<600){
            setNoOfSlides(2)
        }else{
            setNoOfSlides(4)
        }
    }
    const handleNextClick=()=>{
        setCurrSlide(currSlide ===noOfSildes ? 0 : currSlide+1) 
    }

    const handlePrevClick=()=>{
        setCurrSlide(currSlide ===0 ? noOfSildes : currSlide-1) 
    }

    useEffect(()=>{
        handleNoOfSlides()
    },[])


    return (
        <div className={classes.main__container} >
            <div className={classes.rides__header}>
                <h1 className={classes.header}>Popular rides</h1>
                <p className={classes.para}>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className={classes.rides__container}>
                <div onClick={handlePrevClick} className={classes.slider__controller}>
                    <i className="fas fa-chevron-left"></i>
                </div>
                {RidesImages.filter((ele,index)=>{
                    return (index<currSlide+noOfSildes-1 && index>=currSlide) ? ele : null
                })
                .map((ele,index)=>(
                <div className={classes.rides__card} key={index}>
                    <img src={ele.link} alt={ele.title}  className={classes.rides__image}/>
                    <div className={classes.rides__description}>
                        <h2 className={classes.ride__title}>{ele.title}</h2>
                        <button className={classes.rides__explore}>Explore</button>
                    </div>
                </div>
                ))}
                <div onClick={handleNextClick} className={classes.slider__controller}>
                    <i className="fas fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Rides
