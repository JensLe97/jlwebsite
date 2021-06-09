import React from 'react'
import '../App.css'
import { Helmet } from 'react-helmet-async';
import waterfall from '../images/waterfall.jpg'

import ContactSection from '../components/ContactSection'
import { ContactData } from '../data/ContactData'

export default function Contact() {
    return (
        <div>
            <Helmet>
                <title>Jens Lemke | Kontakt</title>
            </Helmet>
            <h1 
            className="contact"
            style={{ backgroundImage: `url(${waterfall})` }}>
            Kon&shy;takt</h1>
            <ContactSection {...ContactData} />
        </div>)
}
