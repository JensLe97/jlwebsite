"use client";
import React from "react";
import InfoSection from "./InfoSection";
import {
  InfoDataAboutGeneral,
  InfoDataAboutJob,
  InfoDataAboutStudy,
} from "../data/InfoData";

import mountains from "../images/mountains.jpg";

export default function About() {
  return (
    <div>
      <h1
        className="about"
        style={{ backgroundImage: `url(${mountains.src})` }}
      >
        Über mich
      </h1>
      <InfoSection {...InfoDataAboutGeneral} />
      <InfoSection {...InfoDataAboutStudy} />
      <InfoSection {...InfoDataAboutJob} />
    </div>
  );
}
