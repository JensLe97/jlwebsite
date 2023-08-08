"use client";
import React from "react";
import dynamic from "next/dynamic";

const PhaserGameNoSSR = dynamic(() => import("./Game"), {
  ssr: false,
});
const WebGamePage = () => <PhaserGameNoSSR />;
export default WebGamePage;
