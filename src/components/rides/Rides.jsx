import React,{useState} from 'react'
import OurRides from '../../json/OurRides.json'
import classes from './Rides.module.css'

const Rides = () => {

    const [selectedRide,setSelectedRide] = useState('safari')
    const [toggleClass,setToggleClass] = useState([classes.button])
    const [currRide,setCurrRide] = useState(0)
    

    const handleRideChange=(index)=>{
        setCurrRide(selectedRide==='safari' ? index : index+4)
    }

    const handleToggleClick=()=>{
        if(selectedRide==='safari'){
            setSelectedRide('sea-diving')
            setToggleClass([classes.button,classes.button__left])
            setCurrRide(4)
        }else{
            setSelectedRide('safari')
            setToggleClass([classes.button])
            setCurrRide(0)
        }
    }

    return (
       <div className={classes.rides__container} id="Rides">
           <div className={classes.rides__header}>
                <h1>Rides</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
           </div>
           <div className={classes.button__container}>
                <div className={toggleClass.join(" ")}></div>
                <button className={classes.toggle__button} onClick={handleToggleClick}>Safari</button>
                <button className={classes.toggle__button} onClick={handleToggleClick}>Sea diving</button>
           </div>
           <div className={classes.ride__types}>
                <ul className={classes.rides__list}>   
                    {OurRides.filter((ele)=>{
                            return ele.type===selectedRide
                        }).map((ele,index)=>(
                        <li key={index} 
                        className={classes.ride__list__item}
                        onClick={()=>handleRideChange(index)}
                        >
                            {ele.title}
                        </li>
                    ))
                    }
                </ul>
                <div className={classes.rides__image}>
                    <img src={OurRides[currRide].link} alt="ride" className={classes.image} />
                    <p className={classes.rides__title}>{OurRides[currRide].title}</p>
                    <button className={classes.rides__explore}>explore</button>
                </div>
           </div>
       </div>
    )
}

export default Rides
