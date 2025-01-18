"use client";
import {
  faFacebookSquare,
  faGithubSquare,
  faInstagramSquare,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faMagicWandSparkles } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import "./Footer.css";
import { FooterForm } from "./FooterForm";

const Footer = () => {
  let pathName = usePathname();
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-s-heading">Immer up to date bleiben:</p>
        <p className="footer-s-text">Jederzeit widerrufbar.</p>
        <div className="input-areas">
          <FooterForm />
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>Diese&nbsp;Website</h2>
            {pathName === "/" ? (
              <p className="footer-home" onClick={scrollTop}>
                Home
              </p>
            ) : (
              <Link href="/">Home</Link>
            )}
            {pathName === "/about" ? (
              <p className="footer-about" onClick={scrollTop}>
                Über mich
              </p>
            ) : (
              <Link href="/about">Über mich</Link>
            )}
          </div>
          <div className="footer-link-items">
            <h2>Informationen</h2>
            {pathName === "/contact" ? (
              <p className="footer-contact" onClick={scrollTop}>
                Kontakt
              </p>
            ) : (
              <Link href="/contact">Kontakt</Link>
            )}
            {pathName === "/disclosure" ? (
              <p className="footer-disclosure" onClick={scrollTop}>
                Impressum
              </p>
            ) : (
              <Link href="/disclosure">Impressum</Link>
            )}
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            {pathName === "/" ? (
              <p className="social-logo" onClick={scrollTop}>
                JL{" "}
                <FontAwesomeIcon
                  className="fa-solid fa-wand-magic-sparkles"
                  icon={faMagicWandSparkles}
                />
              </p>
            ) : (
              <Link href="/" className="social-logo">
                JL{" "}
                <FontAwesomeIcon
                  className="fa-solid fa-wand-magic-sparkles"
                  icon={faMagicWandSparkles}
                />
              </Link>
            )}
          </div>
          <p className="website-rights">
            Jens Lemke &copy; {new Date().getFullYear()}
          </p>
          <div className="social-icons">
            <a
              className="social-icon-link github"
              href="https://github.com/JensLe97"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a
              className="social-icon-link linkedin"
              href="https://www.linkedin.com/in/jens-lemke-b2645a217?originalSubdomain=de"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              className="social-icon-link instagram"
              href="https://www.instagram.com/j3n597/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <FontAwesomeIcon icon={faInstagramSquare} />
            </a>
            <a
              className="social-icon-link facebook"
              href="https://www.facebook.com/jens.lemke.52/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <FontAwesomeIcon icon={faFacebookSquare} />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;
