import React from "react";
import WelcomeSection from "./home/WelcomeSection";
import CardsSection from "./home/CardsSection";

function Home() {
  return (
    <div className="home">
      <WelcomeSection />
      <CardsSection />
    </div>
  );
}

export default Home;
