"use client";
import React from "react";
import mountainnight from "../images/mountain-at-night.jpg";
import DisclosureSection from "./DisclosureSection";
import Head from "next/head";

export default function Disclosure() {
  return (
    <div>
      <Head>
        <title>Jens Lemke | Impressum</title>
        <meta
          name="description"
          content="Auf der Impressum-Seite findest du alles über die rechtlichen Daten zur Website. Neben meinen Kontaktdaten ist eine Datenschutzerklärung vorhanden."
        />
      </Head>
      <h1
        className="disclosure"
        style={{ backgroundImage: `url(${mountainnight.src})` }}
      >
        Im&shy;pres&shy;sum
      </h1>
      <DisclosureSection />
    </div>
  );
}
