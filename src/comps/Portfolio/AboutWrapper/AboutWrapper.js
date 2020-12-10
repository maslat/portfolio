import React from 'react'
import classes from './aboutWrapper.module.css'
import image from '../../../images/sosmedcollection.jpg'

const AboutWrapper = () => {
    return (
        <div className={classes.aboutWrapper}>
            <div className={classes.aboutMe}>
				<h4>More about me</h4>
				<p>I am a goal-oriented professional software developer well-versed in software applications,
                    algorithms, development techniques, and data structures.
                </p>
				<p>While I keep busy learning, I still take interviews in search of a great team  projects that interest me.</p>
				<hr/>
				<h4>TOP EXPERTISE</h4>
				<p>Fullstack developer with primary focus on NodeJS + React</p>

                <div className={classes.skills}>
                    <ul>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>ReactJs</li>
                        <li>NodeJS</li>
                        <li>Postgres</li>
                        <li>MongoDB</li>
                    </ul>
                    <ul>
                        <li>Google Maps API</li>
                        <li>JS Charts</li>
                        <li>AWS (RDS/S3)</li>
                        <li>Firebase</li>
                        <li>HTML/CSS</li>
                    </ul>
                </div>
            </div>

            <div className={classes.socialLinks}>
                <img className={classes.socialImg} alt="Social" src={image}/>
                <h3>Find me on Github and LinkedIn</h3>

                <a rel="noopener noreferrer" target="_blank" href="https://github.com/maslat">Github: @maslat</a>
                <br/>
                <a rel="noopener noreferrer" target="_blank" href="https://www.linkedin.com/in/abdul-latif-0b3a681b6/">LinkedIn: @abdullatif</a>
            </div>  
        </div>
    )
}

export default AboutWrapper
