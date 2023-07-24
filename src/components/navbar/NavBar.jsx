"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagicWandSparkles,
  faTimes,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import "./NavBar.css";

function NavBar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const showButton = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth <= 960) {
        setButton(false);
      } else {
        setButton(true);
      }
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  if (typeof window !== "undefined") {
    window.addEventListener("resize", showButton);
  }
  const currentRoute = usePathname();

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link className="navbar-logo" href="/">
            JL{" "}
            <FontAwesomeIcon
              className="fa-solid fa-wand-magic-sparkles"
              icon={faMagicWandSparkles}
            />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <FontAwesomeIcon
              className="fa-times"
              icon={click ? faTimes : faBars}
            />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link
                className={
                  currentRoute === "/" ? "nav-links active" : "nav-links"
                }
                href="/"
                onClick={closeMobileMenu}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  currentRoute === "/about" ? "nav-links active" : "nav-links"
                }
                href="/about"
                onClick={closeMobileMenu}
              >
                Über mich
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  currentRoute === "/contact" ? "nav-links active" : "nav-links"
                }
                href="/contact"
                onClick={closeMobileMenu}
              >
                Kontakt
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className={
                  currentRoute === "/disclosure"
                    ? "nav-links active"
                    : "nav-links"
                }
                href="/disclosure"
                onClick={closeMobileMenu}
              >
                Impressum
              </Link>
            </li>
          </ul>
          {button && (
            <Button buttonStyle="btn--outline" href="/project-view">
              Projektansicht
            </Button>
          )}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
