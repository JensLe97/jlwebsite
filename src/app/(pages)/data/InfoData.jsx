import ResearchImg from "../images/autonomous.jpg";
import StudyImg from "../images/computer.jpg";
import JobImg from "../images/devops.jpg";
import AboutImg from "../images/profilepicture.jpg";

export const InfoDataAboutGeneral = {
  heading: "Infos über mich",
  firstParagraph:
    "Hi, mein Name ist Jens Lemke und das hier ist meine eigene kleine Website auf der ich mich und meine Projekte vorstelle. Aktuell arbeite ich als DevSecOps Engineer bei der R+V Versicherung. Mehr über mein Studium und meine Arbeit erfährst du in den folgenden Abschnitten.",
  secondParagraph:
    "Neben der Arbeit verbringe ich meine Zeit am liebsten mit meiner Freundin, meiner Familie und meinem Hund. In meiner Freizeit mache ich gerne Musik, genauer gesagt spiele ich Klavier und Gitarre. Außerdem interessiere ich mich sehr für Magie, besonders Kartenmagie und bin immer gerne bereit, ein paar Tricks zu zeigen. Daher auch die Symbole dieser Website.",
  thirdParagraph:
    "Des Weiteren zählt Basketball spielen, Malen und Zeichnen zu meinen Hobbies. Sowohl mit Acryl als auch mit Bleistift male ich vor allem Landschaften oder andere Naturmotive.",
  image: AboutImg.src,
  reverse: false,
  delay: 100,
};

export const InfoDataAboutStudy = {
  heading: "Über mein Studium",
  firstParagraph:
    "Nachdem ich am Graf-Stauffenberg-Gymnasium in Flörsheim am Main 2016 mein Abitur erfolgreich absolviert hatte, habe ich angefangen Informatik an der TU Darmstadt zu studieren. Das Gebiet hat mich schon in der Schule sehr begeistert und ich wollte meiner Fanszination der Technik folgen und mein Wissen über die Hintergründe ausbauen.",
  secondParagraph:
    "Meine Bachelorarbeit zum Thema Fahrzeugkommunikation habe ich 2020 mit sehr gutem Ergebnis und Auszeichnung abgeschlossen. Direkt im Anschluss habe ich mit dem Masterstudium weitergemacht, was mir bis heute viel Spaß bereitet.",
  thirdParagraph:
    "Interessant finde ich vor allem die Themen Netzwerke, KI bzw. Machine und Deep Learning sowie autonomes Fahren. Durch das Nebenfach Wirtschaft und Recht konnte ich zudem meinen Horizont über die Informatik hinaus stark erweitern.",
  image: StudyImg.src,
  reverse: true,
  delay: 300,
};

export const InfoDataAboutResearch = {
  heading: "Zu meiner beruflichen Erfahrung",
  firstParagraph:
    "Während des Studiums habe ich seit dem dritten Bachelorsemester an der Uni gearbeitet. Angefangen habe ich als Tutor für Allgemeine Informatik und Tutor für Digitaltechnik. Zwei Semester lang habe ich Erstsemestler als Mentor beim Einstieg in ihr Studium unterstützt.",
  secondParagraph:
    "Von Oktober 2020 bis Juni 2021 war ich als HiWi am Fachgebiet Multimedia Kommunikation beschäftigt. Im Rahmen dieser Arbeit konnte ich zur wissenschaftlichen Recherche im Bereich Ressourcenallokation für kooperatives Fahren sowie zur Implementierung und Evaluation von Simulationen beitragen.",
  thirdParagraph:
    "Als Werkstudent und für 2 Jahre in Vollzeit habe ich bei Continental Engineering Services (CES) im Bereich Virtual Testing & Simulation. Dabei ging es um die Entwicklung von virtuellen Absicherungswerkzeugen für Fahrerassistenzsysteme (ADAS/AD).",
  image: ResearchImg.src,
  reverse: false,
  delay: 300,
};

export const InfoDataAboutJob = {
  heading: "Zu meiner aktuellen Arbeit",
  firstParagraph:
    "Aktuell arbeite ich als Software Engineer bei der R+V Versicherung im Bereich DevSecOps. Dabei geht es um die Entwicklung und Bereitstellung von Automatisierungslösungen für die Softwareentwicklung. Als Enabler für die Entwickler und Tester sorge ich für eine reibungslose und sichere Entwicklungsumgebung.",
  secondParagraph:
    "Die Erstellung von CI/CD Pipelines, die Integration von Security Scans und die Automatisierung von Tests sind dabei meine Hauptaufgaben. Unter der Verwendung von Tools wie GitLab, SonarQube und Docker habe ich Erfahrung in Programmiersprachen wie Python und Java sowie Linux-Distributionen sammeln können.",
  thirdParagraph:
    "Durch die Arbeit in agilen Teams nach SCRUM and SAFe ist ein regelmäßiger Austausch mit unseren Entwickler-Teams und dadurch stetige Verbesserung möglich. Ziel ist es, mit Continous Integration und Continous Deployment die Softwarequalität zu steigern und die Entwicklungszeit zu verkürzen, indem der Build, die Tests und das Deployment automatisiert und Compliance-konform in der Cloud stattfinden.",
  image: JobImg.src,
  reverse: true,
  delay: 300,
};
