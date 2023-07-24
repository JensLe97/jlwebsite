"use client";
import React from "react";
import mountainnight from "../images/monument-valley.jpg";
import ProjectSection from "./ProjectSection";

export default function ProjectView() {
  return (
    <div>
      <h1
        className="project-view"
        style={{ backgroundImage: `url(${mountainnight.src})` }}
      >
        Meine Projekte
      </h1>
      <ProjectSection />
    </div>
  );
}
