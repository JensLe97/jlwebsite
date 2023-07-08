import React from 'react'
import '../App.css'
import { Helmet } from 'react-helmet-async';

import Game from '../components/game/Game'

function WebGamePage () {
    return (
        <div className="home">
            <Helmet>
                <title>Jens Lemke | Home</title>
                <meta name="description" content="Willkommen auf meiner eigenen privaten Website. Mein Name ist Jens Lemke und hier werde ich immer wieder meine Projekte vorstellen." />
            </Helmet>
            <Game />
        </div>
    )
}

export default WebGamePage