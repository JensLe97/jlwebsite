import React from 'react'
import '../App.css'
import { Helmet } from 'react-helmet-async';
import mountainnight from '../images/monument-valley.jpg'
import ProjectSection from '../components/ProjectSection';

export default function ProjectView() {
    return (
        <div>
            <Helmet>
                <title>Jens Lemke | Projektansicht</title>
                <meta name="description" content="Auf dieser Seite stelle ich meine privaten Projekte vor. Diese Website gehört zum Beispiel auch dazu. Mehr findest du auf meinem GitHub." />
            </Helmet>
            <h1 
            className="project-view"
            style={{ backgroundImage: `url(${mountainnight})` }}>
            Meine Projekte</h1>
            <ProjectSection />
        </div>)
}