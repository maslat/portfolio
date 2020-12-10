import React from 'react'
import classes from './Portofolio.module.css'
import GreetingWrapper from './GreetingWrapper/GreetingWrapper'
import IntroWrapper from './IntroWrapper/IntroWrapper'
import AboutWrapper from './AboutWrapper/AboutWrapper'

const Portofolio = () => {
    return (
        <React.Fragment>
            <section className={classes.s1}>
                <div className={classes.mainContainer}>
                    <GreetingWrapper/>
                    <IntroWrapper/>
                </div>
            </section>

            <section className={classes.s2}>
                <div className={classes.mainContainer}>
                    <AboutWrapper/>
                </div>
            </section>
        </React.Fragment>
    )
}

export default Portofolio
