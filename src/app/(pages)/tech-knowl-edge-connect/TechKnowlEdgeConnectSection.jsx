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
          E-Mail: mail@lemkejens.de
        </p>
        <h2>Inhaltlich Verantwortlicher gem. &sect; 55 II RStV:</h2>
        <p>
          Jens Lemke
          <br />
          Anschrift s.o.
        </p>
        <h1>Datenschutz&shy;erkl&auml;rung</h1>
        <h2>1. Datenschutz auf einen Blick</h2>
        <h3>Allgemeine Hinweise</h3>
        <p>
          Die folgenden Hinweise geben einen einfachen &Uuml;berblick
          dar&uuml;ber, was mit Ihren personenbezogenen Daten passiert, wenn Sie
          diese Website besuchen. Personenbezogene Daten sind alle Daten, mit
          denen Sie pers&ouml;nlich identifiziert werden k&ouml;nnen.
          Ausf&uuml;hrliche Informationen zum Thema Datenschutz entnehmen Sie
          unserer unter diesem Text aufgef&uuml;hrten Datenschutzerkl&auml;rung.
        </p>
        <h3>Datenerfassung auf dieser Website</h3>{" "}
        <h4>
          Wer ist verantwortlich f&uuml;r die Datenerfassung auf dieser Website?
        </h4>{" "}
        <p>
          Die Datenverarbeitung auf dieser Website erfolgt durch den
          Websitebetreiber. Dessen Kontaktdaten k&ouml;nnen Sie dem Abschnitt
          &bdquo;Hinweis zur Verantwortlichen Stelle&ldquo; in dieser
          Datenschutzerkl&auml;rung entnehmen.
        </p>{" "}
        <h4>Wie erfassen wir Ihre Daten?</h4>{" "}
        <p>
          Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
          mitteilen. Hierbei kann es sich z.&nbsp;B. um Daten handeln, die Sie
          in ein Kontaktformular eingeben.
        </p>
        <p>
          Andere Daten werden automatisch oder nach Ihrer Einwilligung beim
          Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem
          technische Daten (z.&nbsp;B. Internetbrowser, Betriebssystem oder
          Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt
          automatisch, sobald Sie diese Website betreten.
        </p>{" "}
        <h4>Wof&uuml;r nutzen wir Ihre Daten?</h4>{" "}
        <p>
          Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung
          der Website zu gew&auml;hrleisten. Andere Daten k&ouml;nnen zur
          Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>
        <h4>Welche Rechte haben Sie bez&uuml;glich Ihrer Daten?</h4>{" "}
        <p>
          Sie haben jederzeit das Recht, unentgeltlich Auskunft &uuml;ber
          Herkunft, Empf&auml;nger und Zweck Ihrer gespeicherten
          personenbezogenen Daten zu erhalten. Sie haben au&szlig;erdem ein
          Recht, die Berichtigung oder L&ouml;schung dieser Daten zu verlangen.
          Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
          k&ouml;nnen Sie diese Einwilligung jederzeit f&uuml;r die Zukunft
          widerrufen. Au&szlig;erdem haben Sie das Recht, unter bestimmten
          Umst&auml;nden die Einschr&auml;nkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein
          Beschwerderecht bei der zust&auml;ndigen Aufsichtsbeh&ouml;rde zu.
        </p>{" "}
        <p>
          Hierzu sowie zu weiteren Fragen zum Thema Datenschutz k&ouml;nnen Sie
          sich jederzeit an uns wenden.
        </p>
        <h3>Analyse-Tools und Tools von Dritt&shy;anbietern</h3>{" "}
        <p>
          Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
          ausgewertet werden. Das geschieht vor allem mit sogenannten
          Analyseprogrammen.
        </p>{" "}
        <p>
          Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in
          der folgenden Datenschutzerkl&auml;rung.
        </p>
        <h2>2. Hosting und Content Delivery Networks (CDN)</h2>
        <h3>Externes Hosting</h3>
        <p>
          Diese Website wird bei einem externen Dienstleister gehostet (Hoster).
          Die personenbezogenen Daten, die auf dieser Website erfasst werden,
          werden auf den Servern des Hosters gespeichert. Hierbei kann es sich
          v. a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten,
          Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige
          Daten, die über eine Website generiert werden, handeln.
        </p>
        <p>
          Der Einsatz des Hosters erfolgt zum Zwecke der Vertragserfüllung
          gegenüber unseren potenziellen und bestehenden Kunden (Art. 6 Abs. 1
          lit. b DSGVO) und im Interesse einer sicheren, schnellen und
          effizienten Bereitstellung unseres Online-Angebots durch einen
          professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        </p>
        <p>
          Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies zur
          Erfüllung seiner Leistungspflichten erforderlich ist und unsere
          Weisungen in Bezug auf diese Daten befolgen.
        </p>
        <h2>3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3>Datenschutz</h3>
        <p>
          Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten
          sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und
          entsprechend den gesetzlichen Datenschutzvorschriften sowie dieser
          Datenschutzerklärung.
        </p>
        <p>
          Wenn Sie diese Website benutzen, werden verschiedene personenbezogene
          Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie
          persönlich identifiziert werden können. Die vorliegende
          Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir
          sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das
          geschieht.
        </p>
        <p>
          Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B.
          bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen kann.
          Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
          nicht möglich.
        </p>
        <h3>Hinweis zur verantwortlichen Stelle</h3>
        <p>
          Die verantwortliche Stelle für die Datenverarbeitung auf dieser
          Website ist:
        </p>
        <p>
          Jens Lemke <br /> Neckarstr. 3 <br /> 65439 Flörsheim am Main
        </p>
        <p>
          Telefon: +49 (0) 152 53415018
          <br />
          E-Mail: mail@lemkejens.de
        </p>
        <p>
          Verantwortliche Stelle ist die natürliche oder juristische Person, die
          allein oder gemeinsam mit anderen über die Zwecke und Mittel der
          Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen
          o. Ä.) entscheidet.
        </p>
        <h3>Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p>
          Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
          Einwilligung möglich. Sie können eine bereits erteilte Einwilligung
          jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf
          erfolgten Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
        <h3>
          Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie
          gegen Direktwerbung (Art. 21 DSGVO)
        </h3>
        <p>
          Wenn die Datenverarbeitung auf Grundlage von Art. 6 Abs. 1 lit. e oder
          f DSGVO erfolgt, haben Sie jederzeit das Recht, aus Gründen, die sich
          aus Ihrer besonderen Situation ergeben, gegen die Verarbeitung Ihrer
          personenbezogenen Daten Widerspruch einzulegen; dies gilt auch für ein
          auf diese Bestimmungen gestütztes Profiling. Die jeweilige
          Rechtsgrundlage, auf denen eine Verarbeitung beruht, entnehmen sie
          dieser Datenschutzerklärung. Wenn Sie Widerspruch einlegen, werden wir
          Ihre betroffenen personenbezogenen Daten nicht mehr verarbeiten, es
          sei denn, wir können zwingende schutzwürdige Gründe für die
          Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten
          überwiegen oder die Verarbeitung dient der Geltendmachung, Ausübung
          oder Verteidigung von Rechtsansprüchen (Widerspruch nach Art. 21 Abs.
          1 DSGVO).
        </p>
        <p>
          Werden Ihre personenbezogenen Daten verarbeitet, um Direktwerbung zu
          betreiben, so haben sie das Recht, jederzeit Widerspruch gegen die
          Verarbeitung Sie betreffender personenbezogener Daten zum Zwecke
          derartiger Werbung einzulegen; dies gilt auch für das Profiling,
          soweit es mit solcher Direktwerbung in Verbindung steht. Wenn Sie
          widersprechen, werden ihre personenbezogenen Daten anschließend nicht
          mehr zum Zwecke der Direktwerbung verwendet (Widerspruch nach Art. 21
          Abs. 2 DSGVO).
        </p>
        <h3>Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p>
          Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
          Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
          Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
          oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
          besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
          gerichtlicher Rechtsbehelfe.
        </p>
        <h3>Recht auf Datenübertragbarkeit</h3>
        <p>
          Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung
          oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich
          oder an einen Dritten in einem gängigen, maschinenlesbaren Format
          aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an
          einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es
          technisch machbar ist.
        </p>
        <h3>SSL- bzw. TLS-Verschlüsselung</h3>
        <p>
          Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
          Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen oder
          Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw.
          TLSVerschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
          dass die Adresszeile des Browsers von „http://“ auf „https://“
          wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p>
          Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
          Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
          werden.
        </p>
        <h3>Auskunft, Löschung und Berichtigung</h3>
        <p>
          Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit
          das Recht auf unentgeltliche Auskunft über Ihre gespeicherten
          personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck
          der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
          Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema
          personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </p>
        <h3>Recht auf Einschränkung der Verarbeitung</h3>
        <p>
          Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
          personenbezogenen Daten zu verlangen. Hierzu können Sie sich jederzeit
          an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
          folgenden Fällen:
        </p>
        <ul>
          <li>
            Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
            personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit,
            um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das
            Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen
            Daten zu verlangen.
          </li>
          <li>
            Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
            geschah/geschieht, können Sie statt der Löschung die Einschränkung
            der Datenverarbeitung verlangen.
          </li>
          <li>
            Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie
            jedoch zur Ausübung, Verteidigung oder Geltendmachung von
            Rechtsansprüchen benötigen, haben Sie das Recht, statt der Löschung
            die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
            verlangen.
          </li>
          <li>
            Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
            haben, muss eine Abwägung zwischen Ihren und unseren Interessen
            vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
            überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung
            Ihrer personenbezogenen Daten zu verlangen.
          </li>
        </ul>
        <p>
          Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt
          haben, dürfen diese Daten – von ihrer Speicherung abgesehen – nur mit
          Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder Verteidigung
          von Rechtsansprüchen oder zum Schutz der Rechte einer anderen
          natürlichen oder juristischen Person oder aus Gründen eines wichtigen
          öffentlichen Interesses der Europäischen Union oder eines
          Mitgliedstaats verarbeitet werden.
        </p>
        <h2>4. Datenerfassung auf dieser Website</h2>
        <h3>Kontaktformular</h3>
        <p>
          Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre
          Angaben aus dem Anfrageformular inklusive der von Ihnen dort
          angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für den
          Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir
          nicht ohne Ihre Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an
          uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde.
        </p>
        <p>
          Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
          uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
          Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen
          – bleiben unberührt.
        </p>
        <h3>Anfrage per E-Mail, Telefon oder Telefax</h3>
        <p>
          Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre
          Anfrage inklusive aller daraus hervorgehenden personenbezogenen Daten
          (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
          gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre
          Einwilligung weiter.
        </p>
        <p>
          Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags
          zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
          erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf
          unserem berechtigten Interesse an der effektiven Bearbeitung der an
          uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
          Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt
          wurde.
        </p>
        <p>
          Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben
          bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
          Speicherung widerrufen oder der Zweck für die Datenspeicherung
          entfällt (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens).
          Zwingende gesetzliche Bestimmungen – insbesondere gesetzliche
          Aufbewahrungsfristen – bleiben unberührt.
        </p>
        <h2>5. Plugins und Tools</h2>
        <h3>Google Web Fonts</h3>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so
          genannte Web Fonts, die von Google bereitgestellt werden. Beim Aufruf
          einer Seite lädt Ihr Browser die benötigten Web Fonts in ihren
          Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
        </p>
        <p>
          Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu
          den Servern von Google aufnehmen. Hierdurch erlangt Google Kenntnis
          darüber, dass über Ihre IP-Adresse diese Website aufgerufen wurde. Die
          Nutzung von Google WebFonts erfolgt auf Grundlage von Art. 6 Abs. 1
          lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an
          der einheitlichen Darstellung des Schriftbildes auf seiner Website.
          Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine
          Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die
          Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine
          Standardschrift von Ihrem Computer genutzt.
        </p>
        <p>
          Weitere Informationen zu Google Web Fonts finden Sie unter{" "}
          <a
            href="https://developers.google.com/fonts/faq"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://developers.google.com/fonts/faq
          </a>{" "}
          und in der Datenschutzerklärung von Google:{" "}
          <a
            href="https://policies.google.com/privacy?hl=de"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://policies.google.com/privacy?hl=de
          </a>
          .
        </p>
        <h3>Font Awesome</h3>
        <p>
          Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten und
          Symbolen Font Awesome. Anbieter ist die Fonticons, Inc., 6 Porter Road
          Apartment 3R, Cambridge, Massachusetts, USA.
        </p>
        <p>
          Beim Aufruf einer Seite lädt Ihr Browser die benötigten Fonts in ihren
          Browsercache, um Texte, Schriftarten und Symbole korrekt anzuzeigen.
          Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung zu
          den Servern von Font Awesome aufnehmen. Hierdurch erlangt Font Awesome
          Kenntnis darüber, dass über Ihre IP-Adresse diese Website aufgerufen
          wurde. Die Nutzung von Font Awesome erfolgt auf Grundlage von Art. 6
          Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an der
          einheitlichen Darstellung des Schriftbildes auf unserer Website.
          Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine
          Einwilligung zur Speicherung von Cookies), erfolgt die Verarbeitung
          ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die
          Einwilligung ist jederzeit widerrufbar.
        </p>
        <p>
          Wenn Ihr Browser Font Awesome nicht unterstützt, wird eine
          Standardschrift von Ihrem Computer genutzt.
        </p>
        <p>
          Weitere Informationen zu Font Awesome finden Sie und in der
          Datenschutzerklärung von Font Awesome unter:{" "}
          <a
            href="https://fontawesome.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://fontawesome.com/privacy
          </a>
          .
        </p>
        <h4>
          Quelle:{" "}
          <a
            href="https://www.e-recht24.de/"
            target="_blank"
            rel="noopener noreferrer"
          >
            e-recht24.de
          </a>
        </h4>
      </Container>
    </Section>
  );
};

export default TechKnowlEdgeConnectSection;
