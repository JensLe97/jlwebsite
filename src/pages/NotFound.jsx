import React from 'react'
import '../App.css'
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/Button'

export default function NotFound() {
    return (
        <div className="not-found">
            <Helmet>
                <title>404 Not Found</title>
                <meta name="description" content="404 Not Found. Page not found." />
            </Helmet>
            <h1>Seite nicht gefunden.</h1>
            <p>Bitte überprüfe die eingegebene URL oder kehre zurück zur Homepage.</p>
            <Button className="btns" buttonStyle="btn--outline-rev" buttonSize="btn--medium-rev" to="/">
                Zurück zur Homepage
            </Button>
        </div>)
}