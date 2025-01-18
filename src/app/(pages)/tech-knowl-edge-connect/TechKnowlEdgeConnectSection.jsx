import React from "react";
import styled from "styled-components";

const Section = styled.section`
  width: 100%;
  height: 100%;
  padding: 0rem 10rem 3rem;

  @media screen and (max-width: 960px) {
    padding: 0rem 5rem 3rem;
  }

  @media screen and (max-width: 860px) {
    padding: 0rem 2rem 3rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0rem 1rem 3rem;
  }
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  line-height: 1.4;
  padding: 1rem 2rem;

  h1 {
    margin-top: 3rem;
    margin-bottom: 0.5rem;
    font-size: clamp(1.5rem, 6vw, 2rem);
  }

  h2 {
    margin-top: 0.6rem;
    margin-bottom: 0.2rem;
    font-size: clamp(1rem, 6vw, 1.5rem);
  }

  h3 {
    margin-bottom: 0.2rem;
    margin-top: 0.6rem;
    font-size: clamp(0.75rem, 6vw, 1.25rem);
  }

  h4 {
    margin-bottom: 0.2rem;
    margin-top: 0.3rem;
    font-size: clamp(0.5rem, 6vw, 1.1rem);
  }

  p {
    margin-bottom: 0.3rem;
  }

  ul {
    margin-left: 2rem;
  }
`;

const TechKnowlEdgeConnectSection = () => {
  return (
    <Section>
      <Container>
        <h1>TechKnowlEdgeConnect Support Information</h1>
        <h1 id="about">Über diese App</h1>
        <h2>Was ist TechKnowlEdgeConnect?</h2>
        <p>
          Mit TechKnowlEdgeConnect kannst du anschaulich lernen und dein Wissen
          an einem Ort sammeln. Ob für Schule, Universität oder Alltag, für
          Inhalte aus zahlreichen Bildungsbereichen bietet die App interaktive
          Lektionen an. Nach einer kurzen Einführung wird dein Wissen anhand von
          Fragen mit Multiple Choice oder Lückentexten abgefragt. Erhalte Punkte
          auf jede korrekt beantwortete Frage und überprüfe dich mit
          Karteikarten. Für deine Fragen steht sowohl ein Chatbot als auch der
          Chat mit anderen Usern zur Verfügung, die dich stets mit neuen
          Inhalten auf dem Laufenden halten können.
        </p>
        <br />
        <br />
        <p>Aktuelle Fächer:</p>
        <ul>
          <li>Informatik</li>
          <li>Mathematik</li>
          <li>Biologie</li>
          <li>Erziehungswissenschaften</li>
        </ul>
        <br />
        <p>Aktuelle Features:</p>
        <ul>
          <li>
            AI Tech: Wenn du etwas nicht weißt oder nachschlagen willst, kannst
            du einfach AI Tech fragen: Ein Chatbot, der deine Fragen
            blitzschnell beantwortet.
          </li>{" "}
          <li>
            Ideen: Verfolge die neusten Updates von anderen Usern, um
            Inspirationen zu erhalten und die stetig weiterzubilden. Lade selbst
            neue Inhalte (Bilder oder Videos) für die Community hoch oder gib
            anderen ein Like.{" "}
          </li>
          <li>
            Chat: Bleibe mit anderen Usern oder Tutoren in Verbindung und
            tausche dich über deine Probleme und Fragen aus. Es gibt bestimmt
            jemanden, der dir weiterhelfen kann.
          </li>
        </ul>

        <h2>Wer hat die App TechKnowlEdgeConnect entwickelt?</h2>
        <p>
          Die App TechKnowlEdgeConnect wurde von Jens Lemke entwickelt. Er ist
          ein Softwareentwickler und hat die App privat entwickelt, um Schülern
          und Studenten sowie Studenten zu helfen, sich zu vernetzen und Wissen
          auszutauschen.
        </p>
        <h1 id="support">Hilfe und Support</h1>
        <h2>FAQ</h2>
        <h3>Was ist Tech AI in TechKnowlEdgeConnect?</h3>
        <p>
          Tech AI ist ein KI-System, das in der App TechKnowlEdgeConnect
          integriert ist und auf ChatGPT basiert. Es ermöglicht dir, Fragen zu
          stellen und Antworten zu erhalten. Tech AI kann dir bei der Suche nach
          Informationen helfen dich beim Lernen unterstützen.
        </p>
        <h3>Wo kann ich die App TechKnowlEdgeConnect herunterladen?</h3>
        <p>
          Die App TechKnowlEdgeConnect ist im Google Play Store und im Apple App
          Store verfügbar. Du kannst die App kostenlos herunterladen und
          installieren. Außerdem ist die Webapp online verfügbar:{" "}
          <a
            href="https://tech-knowl-edge-connect.jenslemke.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            TechKnowlEdgeConnect
          </a>
          .
        </p>
        <h3>Kann ich die App TechKnowlEdgeConnect kostenlos nutzen?</h3>
        <p>
          Ja, nach der Installation der App TechKnowlEdgeConnect kannst du dich
          kostenlos registrieren und die App kostenlos nutzen. Es gibt keine
          versteckten Kosten oder Abonnements und du kannst auf die kompletten
          Inhalte der App zugreifen, mit anderen Nutzern chatten und alle
          Features nutzen.
        </p>
        <h3>Sind meine Daten bei TechKnowlEdgeConnect sicher?</h3>
        <p>
          Ja, deine persönlichen Daten sind bei TechKnowlEdgeConnect sicher. Wir
          verwenden moderne Verschlüsselungstechnologien, um deine Daten zu
          schützen. Deine Daten werden vertraulich behandelt und nicht an Dritte
          weitergegeben.
        </p>
        <h1>Nutzungbedingungen</h1>
        <h2>1. Geltungsbereich</h2>
        <ul>
          <li>
            Die nachfolgenden Nutzungsbedingungen gelten für die Nutzung der
            Plattform TechKnowlEdgeConnect, die von Jens Lemke angeboten und
            betrieben wird. Sie gelten für alle Nutzerinnen und Nutzer von
            TechKnowlEdgeConnect. Für Nutzerinnen und Nutzer, die bei
            TechKnowlEdgeConnect Lerninhalte einstellen möchten, gelten darüber
            hinaus Besondere Nutzungsbedingungen.
          </li>
          <li>
            Nähere Angaben zum Urheber sind hier zu finden:{" "}
            <a href="/tech-knowl-edge-connect#imprint">Impressum</a>
          </li>
        </ul>
        <p> </p>
        <h2>2. Sprache</h2>
        <ul>
          <li>Der Vertragsschluss erfolgt in deutscher Sprache.</li>
        </ul>
        <p> </p>
        <h2>1. Vertragsschluss </h2>
        <ul>
          <li>
            TechKnowlEdgeConnect ist eine Lernplattform (Webseite und Apps für
            Apple und Android) für Schülerinnen und Schüler sowie Studenten, die
            Lerninhalte für die Schulfächer, Nachhilfeangebote und
            Interaktionsmöglichkeiten mit anderen Schülerinnen und Schülern
            bietet. Sie beinhaltet insbesondere schulische Dokumente und
            Lerninhalte sowie Hintergrundinformationen, die von Mitgliedern der
            TechKnowlEdgeConnect-Community eingestellt werden.
            TechKnowlEdgeConnect bietet kostenlose Inhalte und
            Nutzungsmöglichkeiten.
          </li>
          <li>
            Das vorliegende Dokument beinhaltet die Allgemeinen
            Nutzungsbedingungen und bildet die rechtliche Grundlage für die
            Nutzung von TechKnowlEdgeConnect durch Schülerinnen und Schüler
            (nachfolgend „Nutzerinnen und Nutzer“ genannt) einschließlich von
            Nutzerinnen und Nutzer die Lerninhalte bei TechKnowlEdgeConnect
            einstellen. Sie gelten in ihrer jeweils aktuellen Fassung müssen bei
            der Registrierung ausdrücklich, und sie sind die Grundlage für die
            Inanspruchnahme des TechKnowlEdgeConnect-Angebotes.
          </li>
          <li>
            Für Nutzerinnen und Nutzer, die Lerninhalte bei TechKnowlEdgeConnect
            einstellen möchten, geltend zusätzlich die Besonderen
            Nutzungsbedingungen die für das Einstellen von Lerninhalten
            gesondert akzeptiert werden müssen.
          </li>
          <li>
            Bei dem Herunterladen der TechKnowlEdgeConnect-App über den Apple
            App Store gelten ergänzend zu diesen AGB die Allgemeinen
            Geschäftsbedingungen von Apple, die hier abrufbar sind:
            <a
              href="http://www.apple.com/legal/internet-services/itunes/de/terms.html"
              target="_blank"
              rel="noopener noreferrer"
            >
              Apple Terms
            </a>
            .
          </li>
          <li>
            Bei dem Herunterladen der TechKnowlEdgeConnect-App über den Google
            Play Store gelten ergänzend zu diesen AGB die Allgemeinen
            Geschäftsbedingungen des Google Play Store, die hier abrufbar sind:
            <a
              href="https://play.google.com/intl/ALL_de/about/play-terms/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google Terms
            </a>
            .
          </li>
          <li>
            Diese AGB gelten für Nutzerinnen und Nutzer, die sich für die
            deutschsprachige Version von TechKnowlEdgeConnect registrieren.
          </li>
          <li>
            Der Vertrag über die kostenlose Variante von TechKnowlEdgeConnect
            wird grundsätzlich auf unbestimmte Zeit geschlossen. Der Vertrag
            kann jederzeit über den Nutzeraccount durch Löschen des Accounts
            gekündigt werden.
          </li>
        </ul>
        <h2>
          Mindestalter, Registrierung und Zustimmung Deiner Eltern bzw.
          Erziehungsberechtigten
        </h2>
        <ul>
          <li>
            Die Nutzung von TechKnowlEdgeConnect setzt eine vorherige
            Registrierung voraus. Wenn Du jünger bist als sieben Jahre, darfst
            Du Dich bei TechKnowlEdgeConnect leider nicht registrieren und das
            Angebot daher leider selbst nicht nutzen.
          </li>
          <li>
            Wenn Du mindestens sieben Jahre alt aber noch nicht 18 Jahre alt
            bist, müssen Deine Eltern bzw. Erziehungsberechtigten ausdrücklich
            damit einverstanden sein, dass Du Dich registrierst.
          </li>
        </ul>
        <h2>4. Widerrufsrecht und Erlöschen des Widerrufsrechts</h2>
        <ul>
          <li>
            Die vollständige Widerrufsbelehrung findet sich hier. Bitte beachte:
            Beim Abschluss des kostenlosen Vertrages erlischt das Widerrufsrecht
            unmittelbar nach erfolgreicher Registrierung, weil wir unmittelbar
            den Zugang zu TechKnowlEdgeConnect gewähren und dessen Nutzung
            ermöglichen, d. h. mit der Erbringung unserer Leistungen beginnen
            (&sect; 356 Abs. 5 Nr. 1 BGB).
          </li>
        </ul>
        <h2>5. Was Du tun musst und nicht tun darfst</h2>
        <ul>
          <li>
            Du musst Deine Zugangsdaten (Benutzername, Passwort) geheim halten
            und darfst sie nicht an andere weitergeben. Wenn Du das Gefühl hast
            oder weißt, dass andere auf Deinen Account zugreifen, sende uns
            bitte so schnell wie möglich eine E-Mail an
            techknowledgeconnect@jenslemke.com.
          </li>
          <li>
            Du darfst die Inhalte, die bei TechKnowlEdgeConnect abrufbar sind,
            nur innerhalb der TechKnowlEdgeConnect-Plattform benutzen und darfst
            sie nicht an andere weitergeben, im Internet veröffentlichen oder
            gar an andere verkaufen.
          </li>
          <li>
            Die folgenden Inhalte – egal in welchen TechKnowlEdgeConnect-Bereich
            und egal in welcher Form (Texte, Medien usw.) – darfst Du bei
            TechKnowlEdgeConnect nicht hochladen, posten oder sonst verbreiten:
          </li>
          <br />
          <li>Viren oder andere Formen von Programmier-Code;</li>
          <br />
          <li>
            Pornographische, sexistische, fremdenfeindliche, beleidigende,
            diffamierende, zu Gewalt aufrufende oder Gewalt androhende,
            Minderheiten unterdrückende oder volksverhetzende Inhalte oder sonst
            Inhalte, die gegen die guten Sitten verstoßen;
          </li>
          <br />
          <li>
            Inhalte, welche andere wegen ihrer Herkunft, ihrer Hautfarbe, ihres
            Geschlechts, ihrer sexuellen Orientierung, etwaigen Krankheiten oder
            wegen sonstiger Merkmale oder Eigenschaften diskriminieren;
          </li>
          <br />
          <li>
            Inhalte mit absichtlich irreführenden oder wahrheitswidrigen
            Inhalten;
          </li>
          <br />
          <li>
            Urheberrechtlich geschütztes Material oder Inhalte, die solches
            Material enthalten, ohne hierzu nachweislich berechtigt zu sein;
          </li>
          <br />
          <li>
            Werbematerial in jeglicher Form, wenn TechKnowlEdgeConnect dem nicht
            zuvor ausdrücklich in Textform zugestimmt hat;
          </li>
          <br />
          <li>Sonstige rechtswidrige Inhalte;</li>
          <br />
          <li>
            Inhalte, die keinen Bezug zu Wissen und damit keine Lernrelevanz
            haben.
          </li>
          <br />
          <li>
            Du hast auch stets unsere Community Guidelines, die Du hier abrufen
            kannst, zu beachten und zu befolgen.
          </li>
          <br />
          <li>
            Nenne in Deinen Posts nie die Namen oder sonstigen persönlichen
            Daten anderer, und auch Deinen eigenen echten Namen und sonstige
            persönliche Daten von Dir oder anderen Personen solltest Du nicht
            veröffentlichen.
          </li>
          <br />
        </ul>
        <p>Folgendes darfst Du ebenfalls nicht tun:</p>
        <br />
        <p>
          Deinen Zugang zu TechKnowlEdgeConnect zwecks Anbahnung von
          romantischen oder sexuellen Beziehungen missbräuchlich verwenden;
        </p>
        <br />
        <p>
          Dir oder anderen rechtswidrig Zugang zu TechKnowlEdgeConnect
          verschaffen;
        </p>
        <br />
        <p>
          Jegliche automatisierte Nutzung der Plattform und der dort verfügbaren
          Inhalte, beispielsweise durch die Nutzung von Skripten, um Inhalte zu
          erstellen oder abzurufen, ist untersagt. Dies gilt auch für derartige
          nicht-gewerbliche Nutzungen.
        </p>
        <br />
        <p>
          Bitte beachte: Für die von Dir hochgeladenen oder geposteten Inhalte
          bist Du selbst verantwortlich und Du musst immer beachten, dass Du –
          nach den gesetzlichen Vorschriften – für diese Inhalte „geradestehen“
          musst.
        </p>
        <br />
        <p>
          Solltest Du einen Verstoß gegen die Nutzungsbedingungen durch andere
          Nutzerinnen oder Nutzer feststellen, bitten wir Dich, uns hierüber so
          schnell wie möglich über techknowledgeconnect@jenslemke.com zu
          informieren.
        </p>
        <br />
        <p>
          Du darfst nicht mehr als ein Konto bei unserem Dienst haben. Wenn wir
          dein Konto bereits gekündigt haben, darfst du kein neues Konto
          erstellen, es sei denn, du hast unsere ausdrückliche schriftliche
          Genehmigung zur Erstellung eines neuen Kontos.
        </p>
        <h2>Moderation und Folgen von Verstößen</h2>
        <ul>
          <li>
            TechKnowlEdgeConnect übernimmt keinerlei Haftung für die
            Richtigkeit, Vollständigkeit und Geeignetheit der von anderen
            Nutzerinnen und Nutzern gestellten Informationen. Ebenso wenig
            übernehmen die anderen Nutzerinnen und Nutzer eine diesbezügliche
            Haftung.
          </li>
          <li>
            Gleichzeitig achten wir auf die Befolgung unserer Community
            Guidelines. Vor der Veröffentlichung von Inhalten werden diese
            jedoch von uns grundsätzlich nicht auf Richtigkeit/Verstoß gegen
            Gesetze oder unsere Community Guidelines geprüft (hierzu nähere
            Ausführungen sogleich).
          </li>
          <li>
            Nutzer können Inhalte melden, die dann von unserem Team überprüft
            werden, ob die Vorgaben eingehalten sind oder qualitativen Faktoren
            gegen einen Lernwert des Inhalts und damit gegen eine
            Veröffentlichung sprechen. Führt die Meldung zu einer Entfernung des
            Inhalts, wirst Du hierüber informiert und Du kannst die Entscheidung
            anfechten und hierbei auch Gründe für die Anfechtung geben.
            Anschließend wird die Entscheidung möglichst zeitnah von unserem
            Team nochmals überprüft. Kommt die Prüfung zum Ergebnis, dass die
            Entfernung des Inhalts zu Unrecht erfolgte, wird der Inhalt
            akzeptiert und veröffentlicht. Du erhältst zugleich eine Nachricht
            hierüber. Wird an der Ablehnung festgehalten, wirst Du hierüber
            informiert und es werden die Gründe dargelegt, warum der Inhalt
            abgelehnt wurde. Zudem kann es sein, dass die Entfernung deines
            Inhalts weitere Folgen hat. Wenn Du meinst, dass die Ablehnung zu
            Unrecht erfolgte, kannst Du hiergegen vor den zuständigen
            Zivilgerichten vorgehen.
          </li>
          <li>
            Wenn Du gegen diese Nutzungsbedingungen oder gegen die Community
            Guidelines verstößt, behalten wir uns vor, Deinen Account zu
            sperren, Deine Inhalte zu löschen und Deine Zugangsdaten zu sperren.
          </li>
        </ul>
        <h2>Haftung</h2>
        <ul>
          <li>
            Wir haften für Vorsatz und grobe Fahrlässigkeit. Ferner haften wir
            für die fahrlässige Verletzung von Pflichten, deren Erfüllung die
            ordnungsgemäße Durchführung des Vertrags überhaupt erst ermöglicht,
            deren Verletzung die Erreichung des Vertragszwecks gefährdet und auf
            deren Einhaltung Du als Kunde regelmäßig vertrauen darfst. In diesem
            Fall haften wir jedoch nur für den vorhersehbaren, vertragstypischen
            Schaden. Gleiches gilt für Pflichtverletzungen unserer
            Erfüllungsgehilfen.
          </li>
          <li>
            Die vorstehenden Haftungsausschlüsse gelten nicht bei Verletzung von
            Leben, Körper und Gesundheit und auch nicht, soweit wir einen Mangel
            arglistig verschwiegen oder eine Garantie für die Beschaffenheit der
            Sache übernommen haben. Die Haftung nach dem Produkthaftungsgesetz
            bleibt unberührt.
          </li>
        </ul>
        <h2>Änderung der AGB</h2>
        <ul>
          <li>
            TechKnowlEdgeConnect ist dazu berechtigt, diese AGB zu ändern,
            sofern dies notwendig erscheint und die Nutzerinnen und Nutzer
            hierdurch nicht wider Treu und Glauben benachteiligt wird. Sie
            können auch geändert werden als Reaktion auf neue technische
            Entwicklungen, Änderungen der Rechtsprechung, der Rechtslage oder
            aus gleichwertigen Gründen. Änderungen der AGB werden den
            Nutzerinnen und Nutzern zuvor in Textform mitgeteilt. Änderungen,
            die das vertragliche Gleichgewicht zwischen den Parteien erheblich
            stören, bedürfen der ausdrücklichen Zustimmung der Nutzerinnen und
            Nutzer. Ansonsten gelten sie als genehmigt, wenn die Nutzerinnen und
            Nutzer ihnen nicht innerhalb von sechs Wochen nach Zugang der
            Mitteilung in Textform widersprechen. TechKnowlEdgeConnect wird auf
            diese und die nachfolgend wiedergegebenen Folgen in der Mitteilung
            über die Änderungen ausdrücklich hinweisen. Im Falle eines
            Widerspruches ist TechKnowlEdgeConnect dazu berechtigt, den Vertrag
            mit einer Frist von zwei Wochen zu kündigen. TechKnowlEdgeConnect
            steht bei einem Widerspruch gegen neue AGB überdies ein
            außerordentliches Kündigungsrecht zu, sofern TechKnowlEdgeConnect
            eine Fortführung des Vertrages unter Berücksichtigung seiner
            Interessen und er Interessen der Nutzerinnen und Nutzer nicht
            zumutbar ist.
          </li>
        </ul>
        <h2>Vertragssprache, anwendbares Recht und weitere Hinweise</h2>
        <ul>
          <li>
            Der Vertrag wird in deutscher Sprache geschlossen. Es gilt das Recht
            der Bundesrepublik Deutschland. Für den Fall, dass Du Deinen
            gewöhnlichen Aufenthalt in einem Mitgliedsstaat der EU oder der
            Schweiz hast, bleiben dortige zwingende Bestimmungen unberührt.
          </li>
          <li>
            Die Europäische Union hat eine Plattform zur außergerichtlichen
            Beilegung verbraucherrechtlicher Streitigkeiten ("OS-Plattform"),
            die über den{" "}
            <a
              href="http://ec.europa.eu/consumers/odr"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>{" "}
            erreichbar ist, eingerichtet. Die Plattform dient als Anlaufstelle
            für die außergerichtliche Beilegung von Streitigkeiten über
            vertragliche Verpflichtungen, die sich aus Online-Verträgen ergeben.
            Gemäß &sect; 36 des Gesetzes über Verbraucherstreitbeilegung weist
            TechKnowlEdgeConnect darauf hin, dass sie weder verpflichtet noch
            bereit ist, an einem Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </li>
        </ul>
        <h2>Salvatorische Klausel</h2>
        <ul>
          <li>
            Sollten einzelne Bestimmungen dieses Vertrages unwirksam oder
            undurchführbar sein oder nach Vertragsschluss unwirksam oder
            undurchführbar werden, bleibt davon die Wirksamkeit des Vertrages im
            Übrigen unberührt. An die Stelle der unwirksamen oder
            undurchführbaren Bestimmung soll diejenige wirksame und
            durchführbare Regelung treten, deren Wirkungen der wirtschaftlichen
            Zielsetzung möglichst nahe kommen, die die Vertragsparteien mit der
            unwirksamen beziehungsweise undurchführbaren Bestimmung verfolgt
            haben.
          </li>
        </ul>
        <h3>Stand dieser Nutzungsbedingungen: 18.01.2025</h3>
        <h1 id="privacy">Datenschutzerklärung</h1>
        <h2>1. Einleitung</h2>
        <p>
          Im Folgenden informieren wir über die Verarbeitung personenbezogener
          Daten bei der Nutzung
        </p>
        <ul>
          <li>
            unserer{" "}
            <a
              href="https://jenslemke.com/tech-knowl-edge-connect"
              target="_blank"
              rel="noopener noreferrer"
            >
              Website
            </a>
          </li>
          <li>unserer App "TechKnowlEdgeConnect"</li>
        </ul>
        <p>
          Personenbezogene Daten sind alle Daten, die auf eine konkrete
          natürliche Person beziehbar sind, z. B. Ihr Name oder Ihre IP-Adresse.
        </p>
        <br />
        <h3>1.1. Kontaktdaten</h3>
        <p>
          Verantwortlicher gem. Art. 4 Abs. 7 EU-Datenschutz-Grundverordnung
          (DSGVO) ist Jens Lemke, Vorderstr. 9, 65439 Flörsheim, Deutschland,
          E-Mail: techknowledgeconnect@jenslemke.com.
        </p>
        <br />
        <h3>
          1.2. Umfang der Datenverarbeitung, Verarbeitungszwecke und
          Rechtsgrundlagen
        </h3>
        <p>
          Den Umfang der Verarbeitung der Daten, Verarbeitungszwecke und
          Rechtsgrundlagen führen wir im Detail weiter unten aus. Als
          Rechtsgrundlage für eine Datenverarbeitung kommen grundsätzlich die
          folgenden in Betracht:
        </p>
        <br />
        <ul>
          <li>
            Art. 6 Abs. 1 S. 1 it. a DSGVO dient uns als Rechtsgrundlage für
            Verarbeitungsvorgänge, für die wir eine Einwilligung einholen.
          </li>
          <li>
            Art. 6 Abs. 1 S. 1 lit. b DSGVO ist Rechtsgrundlage, soweit die
            Verarbeitung personenbezogener Daten zur Erfüllung eines Vertrages
            erforderlich ist, z.B. wenn ein Seitenbesucher von uns ein Produkt
            erwirbt oder wir für ihn eine Leistung ausführen. Diese
            Rechtsgrundlage gilt auch für Verarbeitungen, die für
            vorvertragliche Maßnahmen erforderlich sind, etwa bei Anfragen zu
            unseren Produkten oder Leistungen.
          </li>
          <li>
            Art. 6 Abs. 1 S. 1 lit. c DSGVO findet Anwendung, wenn wir mit der
            Verarbeitung personenbezogener Daten eine rechtliche Verpflichtung
            erfüllen, wie es z.B. im Steuerrecht der Fall sein kann.
          </li>
          <li>
            Art. 6 Abs. 1 S. 1 lit. f DSGVO dient als Rechtsgrundlage, wenn wir
            uns zur Verarbeitung personenbezogener Daten auf berechtigte
            Interessen berufen können, z.B. für Cookies, die für den technischen
            Betrieb unserer Website erforderlich sind.
          </li>
        </ul>
        <h3>1.3. Datenverarbeitung außerhalb des EWR</h3>
        <p>
          Soweit wir Daten an Dienstleister oder sonstige Dritte außerhalb des
          EWR übermitteln, garantieren die Sicherheit der Daten bei der
          Weitergabe, soweit (z.B. für Großbritannien, Kanada und Israel)
          vorhanden, Angemessenheitsbeschlüsse der EU-Kommission (Art. 45 Ab. 3
          DSGVO).
        </p>
        <br />
        <p>
          Wenn kein Angemessenheitsbeschluss existiert (z.B. für die USA), sind
          Rechtsgrundlage für die Datenweitergabe im Regelfall, also soweit wir
          keinen abweichenden Hinweis geben, Standardvertragsklauseln. Diese
          sind ein von der EU-Kommission verabschiedetes Regelwerk und Teil des
          Vertrags mit dem jeweiligen Dritten. Nach Art. 46 Abs. 2 lit. b DSGVO
          gewährleisten sie die Sicherheit der Datenweitergabe. Viele der
          Anbieter haben über die Standardvertragsklauseln hinausgehende
          vertragliche Garantien abgegeben, die die Daten über die
          Standardvertragsklauseln hinaus schützen. Das sind z.B. Garantien
          hinsichtlich der Verschlüsselung der Daten oder hinsichtlich einer
          Pflicht des Dritten zum Hinweis an Betroffene, wenn
          Strafverfolgungsorgane auf Daten zugreifen wollen.
        </p>
        <br />
        <h3>1.4. Speicherdauer</h3>
        <p>
          Sofern nicht im Rahmen dieser Datenschutzerklärung ausdrücklich
          angegeben, werden die bei uns gespeicherten Daten gelöscht, sobald sie
          für ihre Zweckbestimmung nicht mehr erforderlich sind und der Löschung
          keine gesetzlichen Aufbewahrungspflichten entgegenstehen. Sofern die
          Daten nicht gelöscht werden, weil sie für andere und gesetzlich
          zulässige Zwecke erforderlich sind, wird ihre Verarbeitung
          eingeschränkt, d.h. die Daten werden gesperrt und nicht für andere
          Zwecke verarbeitet. Das gilt z.B. für Daten, die wir aus handels- oder
          steuerrechtlichen Gründen aufbewahren müssen.
        </p>
        <br />
        <h3>1.5. Rechte der Betroffenen</h3>
        <p>
          Betroffene haben gegenüber uns folgende Rechte hinsichtlich der sie
          betreffenden personenbezogenen Daten:
        </p>
        <br />
        <ul>
          <li>Recht auf Auskunft,</li>
          <li>Recht auf Berichtigung oder Löschung,</li>
          <li>Recht auf Einschränkung der Verarbeitung,</li>
          <li>Recht auf Widerspruch gegen die Verarbeitung,</li>
          <li>Recht auf Datenübertragbarkeit,</li>
          <li>Recht, eine erteilte Einwilligung jederzeit zu widerrufen.</li>
        </ul>
        <p>
          Betroffene haben zudem das Recht, sich bei einer
          Datenschutz-Aufsichtsbehörde über die Verarbeitung ihrer
          personenbezogenen Daten zu beschweren.
        </p>
        <br />
        <h3>1.6. Pflicht zur Bereitstellung von Daten</h3>
        <p>
          Kunden, Interessenten oder Dritte müssen uns im Rahmen einer
          Geschäftsbeziehung oder sonstigen Beziehung nur diejenigen
          personenbezogenen Daten bereitstellen, die für die Begründung,
          Durchführung und Beendigung der Geschäftsbeziehung oder für die
          sonstige Beziehung erforderlich sind oder zu deren Erhebung wir
          gesetzlich verpflichtet sind. Ohne diese Daten werden wir in der Regel
          den Abschluss eines Vertrages oder die Bereitstellung einer Leistung
          ablehnen müssen oder einen bestehenden Vertrag oder sonstige Beziehung
          nicht mehr durchführen können.
        </p>
        <br />
        <p>Pflichtangaben sind als solche gekennzeichnet.</p>
        <br />
        <h3>1.7. Keine automatische Entscheidungsfindung im Einzelfall</h3>
        <p>
          Zur Begründung und Durchführung einer Geschäftsbeziehung oder
          sonstigen Beziehung nutzen wir grundsätzlich keine vollautomatisierte
          Entscheidungsfindung gemäß Artikel 22 DSGVO. Sollten wir diese
          Verfahren in Einzelfällen einsetzen, werden wir hierüber gesondert
          informieren, sofern dies gesetzlich geboten ist.
        </p>
        <br />
        <h3>1.8. Kontaktaufnahme</h3>
        <p>
          Bei der Kontaktaufnahme mit uns, z.B. per E-Mail oder Telefon, werden
          die uns mitgeteilten Daten (z.B. Namen und E-Mail-Adressen) von uns
          gespeichert, um Fragen zu beantworten. Rechtsgrundlage für die
          Verarbeitung ist unser berechtigtes Interesse (Art. 6 Abs. 1 S. 1 lit.
          f DSGVO), an uns gerichtete Anfragen zu beantworten. Die in diesem
          Zusammenhang anfallenden Daten löschen wir, nachdem die Speicherung
          nicht mehr erforderlich ist, oder schränken die Verarbeitung ein,
          falls gesetzliche Aufbewahrungspflichten bestehen.
        </p>
        <br />
        <h3>1.9. Kundenumfragen</h3>
        <p>
          Von Zeit zu Zeit führen wir Kundenumfragen durch, um unsere Kunden und
          ihre Wünsche besser kennenzulernen. Dabei erheben wir die jeweils
          abgefragten Daten. Es ist unser berechtigtes Interesse, unsere Kunden
          und ihre Wünsche besser kennenzulernen, so dass Rechtsgrundlage der
          damit einhergehenden Datenverarbeitung Art. 6 Abs. 1 S. 1 lit f DSGVO
          ist. Die Daten löschen wir, wenn die Ergebnisse der Umfragen
          ausgewertet sind.
        </p>
        <br />
        <h2>2. Newsletter</h2>
        <p>
          Wir behalten uns vor, Kunden, die bereits Dienstleistungen von uns in
          Anspruch genommen haben oder Waren gekauft gekauft haben, von Zeit zu
          Zeit per E-Mail oder auf anderem Weg elektronisch über unsere Angebote
          zu informieren, falls sie dem nicht widersprochen haben.
          Rechtsgrundlage für diese Datenverarbeitung ist Art. 6 Abs. 1 S. 1
          lit. f DSGVO. Unser berechtigtes Interesse liegt in der Direktwerbung
          (Erwägungsgrund 47 DSGVO). Kunden können der Verwendung ihrer
          E-Mail-Adresse zu Werbezwecken jederzeit ohne zusätzliche Kosten
          widersprechen, zum Beispiel über den Link am Ende einer jeden E-Mail
          oder per E-Mail an unsere oben genannte E-Mail-Adresse.
        </p>
        <br />
        <h2>3. Datenverarbeitung auf unserer Website</h2>
        <h3>3.1. Informatorische Nutzung der Website</h3>
        <p>
          Bei der informatorischen Nutzung der Website, also wenn Seitenbesucher
          uns nicht gesondert Informationen übermitteln, erheben wir die
          personenbezogenen Daten, die der Browser an unseren Server
          übermittelt, um die Stabilität und Sicherheit unserer Website zu
          gewährleisten. Darin liegt unser berechtigtes Interesse, so dass
          Rechtsgrundlage ist Art. 6 Abs. 1 S. 1 lit. f DSGVO ist.
        </p>
        <br />
        <p>Diese Daten sind:</p>
        <ul>
          <li>IP-Adresse</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>Zeitzonendifferenz zur Greenwich Mean Time (GMT)</li>
          <li>Inhalt der Anfrage (konkrete Seite)</li>
          <li>Zugriffsstatus/HTTP-Statuscode</li>
          <li>jeweils übertragene Datenmenge</li>
          <li>Website, von der die Anfrage kommt</li>
          <li>Browser</li>
          <li>Betriebssystem und dessen Oberfläche</li>
          <li>Sprache und Version der Browsersoftware.</li>
        </ul>
        <p>
          Diese Daten werden außerdem in Logfiles gespeichert. Sie werden
          gelöscht, wenn ihre Speicherung nicht mehr erforderlich ist,
          spätestens nach 14 Tagen.
        </p>
        <br />
        <h3>3.2. Webhosting und Bereitstellung der Website</h3>
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
          Die personenbezogenen Daten, die auf dieser Website erfasst werden,
          werden auf den Servern des Hosters gespeichert. Hierbei kann es sich
          v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
          Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
          Daten, die über eine Website generiert werden, handeln.
        </p>
        <br />
        <p>
          Es ist unser berechtigtes Interesse, eine Website zur Verfügung zu
          stellen, so dass die Rechtsgrundlage der beschriebenen
          Datenverarbeitung Art. 6 Abs. 1 S. 1 lit. f DSGVO ist.
        </p>
        <br />
        <h3>3.3. Kontaktformular</h3>
        <p>
          Bei Kontaktaufnahme über das Kontaktformular auf unserer Website
          speichern wir die dort abgefragten Daten und den Inhalt der
          Nachricht.Rechtsgrundlage für die Verarbeitung ist unser berechtigtes
          Interesse, an uns gerichtete Anfragen zu beantworten. Rechtsgrundlage
          für die Verarbeitung ist deshalb Art. 6 Abs. 1 S. 1 lit. f DSGVO.Die
          in diesem Zusammenhang anfallenden Daten löschen wir, nachdem die
          Speicherung nicht mehr erforderlich ist, oder schränken die
          Verarbeitung ein, falls gesetzliche Aufbewahrungspflichten bestehen.
        </p>
        <br />
        <h3>3.4. Single-Sign-On-Verfahren Apple</h3>
        <p>
          Seitenbesucher können sich unserer Website mit Hilfe eines
          Single-Sign-On-Verfahrens anmelden. Dabei nutzen sie die für einen
          anderen Anbieter bereits erstellten Anmeldedaten. Voraussetzung ist,
          dass der Seitenbesucher bereits bei dem jeweiligen Anbieter
          registriert ist. Wenn sich ein Seitenbesucher mittels
          Single-Sign-On-Verfahrens anmeldet, erhalten wir vom Anbieter die
          Information, dass der Seitenbesucher bei dem Anbieter eingeloggt ist
          und der Anbieter erhält die Information, dass der Seitenbesucher das
          Single-Sign-On-Verfahren auf unserer Website nutzt. Abhängig von den
          Einstellungen des Seitenbesuchers in seinem Konto auf der Seite des
          Anbieters, kann es sein, dass uns vom Anbieter zusätzliche
          Informationen zur Verfügung gestellt werden. Die Rechtsgrundlage
          dieser Verarbeitung ist die Einwilligung des Seitenbesuchers, der sich
          mit dem Konto bei uns anmeldet (Art. 6 Abs. 1 S. 1 lit. a DSGVO).
          Anbieter des Verfahrens ist Apple Inc., Infinite Loop, Cupertino, CA
          95014, USA (
          <a
            href="https://www.apple.com/legal/privacy/de-ww/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung
          </a>
          ).
        </p>
        <br />
        <h3>3.5. Single-Sign-On-Verfahren Google</h3>
        <p>
          Seitenbesucher können sich unserer Website mit Hilfe eines
          Single-Sign-On-Verfahrens anmelden. Dabei nutzen sie die für einen
          anderen Anbieter bereits erstellten Anmeldedaten. Voraussetzung ist,
          dass der Seitenbesucher bereits bei dem jeweiligen Anbieter
          registriert ist. Wenn sich ein Seitenbesucher mittels
          Single-Sign-On-Verfahrens anmeldet, erhalten wir vom Anbieter die
          Information, dass der Seitenbesucher bei dem Anbieter eingeloggt ist
          und der Anbieter erhält die Information, dass der Seitenbesucher das
          Single-Sign-On-Verfahren auf unserer Website nutzt. Abhängig von den
          Einstellungen des Seitenbesuchers in seinem Konto auf der Seite des
          Anbieters, kann es sein, dass uns vom Anbieter zusätzliche
          Informationen zur Verfügung gestellt werden. Die Rechtsgrundlage
          dieser Vereinbarung ist die Einwilligung des Seitenbesuchers, der sich
          mit dem Konto bei uns anmeldet (Art. 6 Abs. 1 S. 1 lit. a DSGVO).
          Anbieter des Verfahrens ist Google Ireland Limited, Gordon House,
          Barrow Street, Dublin 4, Irland (
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Datenschutzerklärung
          </a>
          ).
        </p>
        <br />
        <h2>Drittanbieter</h2>
        <p>
          Wir setzen die folgenden Technologien und Dienste von Drittanbietern
          auf Grundlage der Einwilligung der Nutzer im Sinne von &sect; 25 Abs.
          1 S. 1 TTDSG ein.
        </p>
        <h3>Google Firebase (Website/App)</h3>
        <p>
          Für unsere App setzen wir den Cloud-Dienst Google Firebase des
          Anbieters Google Cloud EMEA Limited, Gordon House, Barrow Street,
          Dublin 4, Irland. ein. Durch die Nutzung des Dienstes kann es zu einer
          Datenübertragung in ein Drittland kommen (USA). Der Anbieter ist gemäß
          EU-U.S. Data Privacy Framework zertifiziert und bietet daher ein
          angemessenes Datenschutzniveau. Weitere Informationen sind in den
          Datenschutzinformationen des Anbieters unter folgender URL zu finden:
          <a
            href="https://firebase.google.com/support/privacy?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            Firebase Datenschutzinformationen
          </a>
        </p>
        <br />
        <h2>5. Änderungen dieser Datenschutzerklärung</h2>
        <p>
          Wir behalten uns das Recht vor, diese Datenschutzerklärung zu ändern,
          um sie an geänderte Rechtslagen, oder bei Änderungen des Dienstes oder
          der Datenverarbeitung anzupassen. Dies gilt jedoch nur im Hinblick auf
          Erklärungen zur Datenverarbeitung. Sofern Einwilligungen der Nutzer
          erforderlich sind oder Bestandteile der Datenschutzerklärung
          Regelungen des Vertragsverhältnisses mit den Nutzern enthalten,
          erfolgen die Änderungen nur mit Zustimmung der Nutzer.
        </p>
        <br />
        <h3>Stand dieser Datenschutzerklärung: 18.01.2025</h3>
        <h1 id="imprint">Impressum</h1>
        <h2>Angaben gemäß &sect; 5 TMG</h2>
        <p>
          Jens Lemke
          <br />
          Vorderstr. 9<br />
          65439 Flörsheim am Main
        </p>
        <h2>Kontakt</h2>
        <p>
          Telefon: +49 (0) 152 53415018
          <br />
          E-Mail: techknowledgeconnect@jenslemke.com
        </p>
        <h2>Inhaltlich Verantwortlicher gem. &sect; 55 II RStV:</h2>
        <p>
          Jens Lemke
          <br />
          Anschrift s.o.
        </p>
        <h2>Haftung für Inhalte</h2>
        <p>
          Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für
          die Richtigkeit, Vollständigkeit und Aktualität der Inhalte können wir
          jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß
          &sect; 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den
          allgemeinen Gesetzen verantwortlich. Nach &sect;&sect; 8 bis 10 TMG
          sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte
          oder gespeicherte fremde Informationen zu überwachen oder nach
          Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
          Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
          Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
          Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der
          Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden
          von entsprechenden Rechtsverletzungen werden wir diese Inhalte
          umgehend entfernen.
        </p>
        <h2>Haftung für Links</h2>
        <p>
          Unser Angebot enthält Links zu externen Websites Dritter, auf deren
          Inhalte wir keinen Einfluss haben. Deshalb können wir für diese
          fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
          verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der
          Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
          Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige
          Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine
          permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne
          konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei
          Bekanntwerden von Rechtsverletzungen werden wir derartige Links
          umgehend entfernen.
        </p>
        <h2>Urheberrecht</h2>
        <p>
          Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
          Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
          Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
          Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
          jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
          sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
          Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt
          wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden
          Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf
          eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
          entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
          werden wir derartige Inhalte umgehend entfernen.
        </p>
      </Container>
    </Section>
  );
};

export default TechKnowlEdgeConnectSection;
