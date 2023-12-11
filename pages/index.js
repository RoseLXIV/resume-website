import NavBar from "../components/NavBar";
import IntelligentSolutionsContainer from "../components/IntelligentSolutionsContainer";
import DevelopmentPortfolioContainer from "../components/DevelopmentPortfolioContainer";
import ServicesContainer from "../components/ServicesContainer";
import ConnectForm from "../components/ConnectForm";
import ThankYouCard from "../components/ThankYouCard";
import { Hero } from "../components/Hero";
import { Ticker } from "../components/Ticker";
import About from "../components/About";
import { useState } from "react";
import Portfolio from "../components/Portfolio";

const Desktop = () => {
  const [animate, setAnimate] = useState(false);
  return (
    <div className="relative bg-black w-full overflow-hidden">
      
      <div className="flex flex-col items-start justify-start text-left text-5xl text-off-white font-display-xs-regular">
        <NavBar onAboutClick={() => setAnimate(true)} />
        <Hero />
        <Ticker />
        <About animate={animate} />
        <Portfolio />
        <ServicesContainer />
      </div>
      
    </div>
    
  );
};

export default Desktop;
