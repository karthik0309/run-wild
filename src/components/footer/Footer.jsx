import React from 'react'
import Input from '../input/Input'
import classes from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={classes.footer__container} id="Contact">
            <h1 className={classes.contact__header}>Contact us</h1>
            <div className={classes.contact__form}>
                <div className={classes.contact__left}>
                    <Input label="Name"/>
                    <Input label="Email"/>
                    <Input label="Message"/>
                    <button className={classes.contact__submit}>Submit</button>
                </div>
                <div className={classes.contact__right}>
                    <div className={classes.box}>
                        <div className={classes.row}>
                            <div className={classes.inner__box}>
                                <i className="fas fa-solid fa-phone"></i>
                            </div>
                            <div>
                                <h2>Phone:</h2>
                                <p>+91 9121566274</p>
                            </div>
                        </div>
                    </div>
                    <div className={classes.box}>
                        <div className={classes.row}>
                            <div className={classes.inner__box}>
                                <i className="fas fa-solid fa-envelope"></i>
                            </div>
                            <div>
                                <h2>Gmail:</h2>
                                <p>karthik392001</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className={classes.copyright}>
                &#169; 2021 Run Wild All rights reserved  
            </p>
        </footer>
    )
}

export default Footer
