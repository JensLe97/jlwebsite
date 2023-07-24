"use client";
import React from "react";
import { Button } from "../../../components/ui/Button";

export default function Submission() {
  return (
    <div className="submission">
      <h1>Vielen Dank für die Anfrage.</h1>
      <p>
        Deine Daten wurden übermittelt und du erhälst in Kürze eine Antwort.
      </p>
      <Button
        className="btns"
        buttonStyle="btn--outline-rev"
        buttonSize="btn--medium-rev"
        href="/"
      >
        Zurück zur Homepage
      </Button>
    </div>
  );
}
