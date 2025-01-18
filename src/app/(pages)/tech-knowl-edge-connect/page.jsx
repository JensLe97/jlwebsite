"use client";
import Head from "next/head";
import React from "react";
import mountainnight from "../images/mountain-at-night.jpg";
import TechKnowlEdgeConnectSection from "./TechKnowlEdgeConnectSection";

export default function TechKnowlEdgeConnect() {
  return (
    <div>
      <Head>
        <title>Jens Lemke | TechKnowlEdgeConnect</title>
        <meta
          name="description"
          content="Support Information für die App TechKnowlEdgeConnect. Neben einem FAQ stehen Kontaktinformationen zur Verfügung, um Fragen zu stellen."
        />
      </Head>
      <h1
        className="tech-knowl-edge-connect"
        style={{ backgroundImage: `url(${mountainnight.src})` }}
      >
        Tech&shy;Knowl&shy;Edge&shy;Con&shy;nect
      </h1>
      <TechKnowlEdgeConnectSection />
    </div>
  );
}
