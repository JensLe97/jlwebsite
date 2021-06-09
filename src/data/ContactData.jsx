export const ContactData = {
    heading: "Kontakt",
    firstParagraph: ["Jens Lemke", "Neckarstr. 3", "65439 Flörsheim am Main"].map(item => <li style={{ listStyleType: "none" }} key={item.toString()}>{item}</li>),
    secondParagraph: ["Telefon: +49 (0) 152 53415018", "E-Mail: mail@lemkejens.de"].map(item => <li style={{ listStyleType: "none" }} key={item.toString()}>{item}</li>),
    reverse: true,
    delay: 100
}