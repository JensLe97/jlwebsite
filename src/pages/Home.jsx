import React from 'react'
import '../App.css'
import { Helmet } from 'react-helmet-async';

import WelcomeSection from '../components/WelcomeSection'
import CardsSection from '../components/CardsSection'

function Home () {
    return (
        <div className="home">
            <Helmet>
                <title>Jens Lemke | Home</title>
            </Helmet>
            <WelcomeSection />
            <CardsSection />
        </div>
    )
}

export default Home