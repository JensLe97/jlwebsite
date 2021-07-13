import React from 'react'
import '../App.css'
import { Helmet } from 'react-helmet-async';
import { Button } from '../components/Button'

export default function Submission() {
    return (
        <div className="submission">
            <Helmet>
                <title>Jens Lemke | Submission</title>
                <meta name="description" content="Das Formular wurde erfolgreich übermittelt und die Daten werden verarbeitet." />
            </Helmet>
            <h1>Vielen Dank für die Anfrage.</h1>
            <p>Deine Daten wurden übermittelt und du erhälst in Kürze eine Antwort.</p>
            <Button className="btns" buttonStyle="btn--outline-rev" buttonSize="btn--medium-rev" to="/">
                Zurück zur Homepage
            </Button>
        </div>)
}