import React from 'react'
import Card from './Card'
import './CardsSection.css'

import waterfalls from '../images/waterfall.jpg'
import monumentvalley from '../images/monument-valley.jpg'
import mountainnight from '../images/mountain-at-night.jpg'
import beach from '../images/beach.jpg'
import boat from '../images/boat.jpg'

function CardsSection() {
    return (
        <div className="cards">
            <h2>Alles auf einen Blick:</h2>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__ul">
                        <Card 
                            src={waterfalls}
                            text="Schreibe mir eine Nachricht"
                            label="Kontakt"
                            path="/contact"
                        />
                        <Card 
                            src={monumentvalley}
                            text="Erkunde meine Projekte (tbd)"
                            label="Projektansicht"
                            path="/project-view"
                        />
                    </ul>
                    <ul className="cards__ul">
                        <Card 
                            src={mountainnight}
                            text="Infos über diese Seite"
                            label="Impressum"
                            path="/disclosure"
                        />
                        <Card 
                            src={beach}
                            text="Eigenes Webgame (tbd)"
                            label="Mini-Game"
                            path="/about"
                        />
                        <Card 
                            src={boat}
                            text="Weitere Eindrücke (tbd)"
                            label="Foto&shy;galerie"
                            path="/about"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardsSection
