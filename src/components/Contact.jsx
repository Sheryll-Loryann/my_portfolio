import Email from "../assets/gmail.svg"
import GitHub from "../assets/github-icon.svg"
import LinkedIn from "../assets/linkedin.svg"

import "../css/Contact.css"

import translations from "../data/translation"

export default function Contact({language}){

    const t = translations[language];
    return(
        <section className="contact-ctn" id="contact">
            <h1>{t.contact.title}</h1>

            <p><img src={Email} alt="Email" />loryannwiyasama@gmail.com</p>
            <p><img src={GitHub} alt="GitHub" /><a href="https://github.com/Sheryll-Loryann">GitHub</a></p>
            <p><img src={LinkedIn} alt="LinkedIn" /><a href="https://www.linkedin.com/in/sheryll-kamdem-ab84032b4/">LinkedIn</a></p>
        </section>
    )
}