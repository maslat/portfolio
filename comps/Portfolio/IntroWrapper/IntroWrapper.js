import React from 'react'
import classes from './introWrapper.module.css'
import photo from '../../../images/Capture.PNG'
import CV from '../../../images/CV.pdf'


const IntroWrapper = () => {
    return (
        <div className={classes.introWrapper}>
            <div className={classes.navWrapper}>
                <a href="/">
                    <div className={classes.dotsWrapper}>
                        <div className={`${classes.dot1} ${classes.browserDot}`}></div>
                        <div className={`${classes.dot2} ${classes.browserDot}`}></div>
                        <div className={`${classes.dot3} ${classes.browserDot}`}></div>
                    </div>
                </a>

                <ul className={classes.navigation}>
                    <li><a rel="noopener noreferrer" target="_blank" href={CV}>My Resume</a></li>
                    <li><a href="/certificate">My Certificate</a></li>

                </ul>
			</div>
            <div className={classes.leftColumn}>
                <img className={classes.profile_pic} src={photo} alt="Myself"/>
                <h5 className={classes.h5}>Hello, my name is Abdul Latif</h5>

                <div className={classes.themeOptionsWrapper}>
                    <div className={`${classes.themeDot} ${classes.lightMode}`}></div>
                    <div className={`${classes.themeDot} ${classes.blueMode}`}></div>
                    <div className={`${classes.themeDot} ${classes.greenMode}`}></div>
                    <div className={`${classes.themeDot} ${classes.purpleMode}`}></div>
                </div>

			</div>

            <div className={classes.rightColumn}>
                <div className={classes.previewShadow}>
                    <div className={classes.preview}>
                        <div className={`${classes.corner} ${classes.cornerTl}`}></div>
                        <div className={`${classes.corner} ${classes.cornerTr}`}></div>
                        <h3>What I Do</h3>
                        <p>I'm a Semarang based Web Developer. I make web application, usually with React</p>
                        <div className={`${classes.corner} ${classes.cornerBr}`}></div>
                        <div className={`${classes.corner} ${classes.cornerBl}`}></div>
                    </div>
                </div>
			</div>
        </div>
    )
}

export default IntroWrapper
