"use client";
import React from "react";
import waterfall from "../images/waterfall.jpg";
import ContactSection from "./ContactSection";
import { ContactData } from "../data/ContactData";

export default function Contact() {
  return (
    <div>
      <h1
        className="contact"
        style={{ backgroundImage: `url(${waterfall.src})` }}
      >
        Kon&shy;takt
      </h1>
      <ContactSection {...ContactData} />
    </div>
  );
}
