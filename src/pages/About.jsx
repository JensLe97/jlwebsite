import React from 'react'
import '../App.css'
import { Helmet } from 'react-helmet-async';
import InfoSection from '../components/InfoSection'
import { InfoDataAboutGeneral, InfoDataAboutStudy } from '../data/InfoData'

import mountains from '../images/mountains.jpg'

export default function About() {
    return (
        <div>
            <Helmet>
                <title>Jens Lemke | Über mich</title>
            </Helmet>
            <h1 
            className="about"
            style={{ backgroundImage: `url(${mountains})` }}>
            Über mich</h1>
            <InfoSection {...InfoDataAboutGeneral}/>
            <InfoSection {...InfoDataAboutStudy}/>
        </div>)
}
