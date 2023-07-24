import React from "react";
import { Button } from "../../components/ui/Button";

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>Seite nicht gefunden.</h1>
      <p>Bitte überprüfe die eingegebene URL oder kehre zurück zur Homepage.</p>
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
