import React from 'react'
import '../App.css'
import { Helmet } from 'react-helmet-async';
import mountainnight from '../images/mountain-at-night.jpg'
import DisclosureSection from '../components/DisclosureSection'

export default function Disclosure() {
    return (
        <div>
            <Helmet>
                <title>Jens Lemke | Impressum</title>
                <meta name="description" content="Auf der Impressum-Seite findet ihr alles über die rechtlichen Daten zur Website. Neben meinen Kontaktdaten ist eine Datenschutzerklärung vorhanden." />
            </Helmet>
            <h1 
            className="disclosure"
            style={{ backgroundImage: `url(${mountainnight})` }}>
            Im&shy;pres&shy;sum</h1>
            <DisclosureSection />
        </div>)
}
