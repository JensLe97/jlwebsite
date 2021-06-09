/* 
<a href='https://de.freepik.com/fotos/wolke'>Wolke Foto erstellt von tawatchai07 - de.freepik.com</a>
<a href='https://de.freepik.com/fotos/hintergrund'>Hintergrund Foto erstellt von 4045 - de.freepik.com</a>
<a href='https://de.freepik.com/fotos/winter'>Winter Foto erstellt von tawatchai07 - de.freepik.com</a> 
<a href='https://de.freepik.com/fotos/hintergrund'>Hintergrund Foto erstellt von mrsiraphol - de.freepik.com</a>
<a href='https://de.freepik.com/fotos/reise'>Reise Foto erstellt von onlyyouqj - de.freepik.com</a>
<a href='https://de.freepik.com/fotos/natur'>Natur Foto erstellt von vwalakte - de.freepik.com</a>
https://www.pexels.com/de-de/video/meer-natur-himmel-sonnenuntergang-5289511/ by Francesco Ungaro*/

import React from 'react'
import { Button } from './Button'
import './WelcomeSection.css'
import '../App.css'
import video from '../videos/coast.mp4'

function WelcomeSection() {
    return (
        <div className="welcome-container"
            //  style={{ background: "url(/images/mountains.jpg) center center/cover no-repeat" }}
            >
            <video src={video} autoPlay loop muted type="video/mp4" playsInline></video>
            <h1>Will&shy;kommen auf meiner Website!</h1>
            <p>Hier erfahrt ihr ein wenig über mich</p>
            <div className="welcome-btns">
                <Button className="btns" buttonStyle="btn--outline" buttonSize="btn--large" to="/about">
                    Über mich
                </Button>
            </div>
        </div>
    )
}

export default WelcomeSection
