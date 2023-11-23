import NavBar from "../components/NavBar";
import IntelligentSolutionsContainer from "../components/IntelligentSolutionsContainer";
import DevelopmentPortfolioContainer from "../components/DevelopmentPortfolioContainer";
import ServicesContainer from "../components/ServicesContainer";
import ConnectForm from "../components/ConnectForm";
import ThankYouCard from "../components/ThankYouCard";
import { Hero } from "../components/Hero";
import { Ticker } from "../components/Ticker";
import About from "../components/About";

const Desktop = () => {
  return (
    <div className="relative bg-black w-full overflow-hidden">
      
      <div className="flex flex-col items-start justify-start text-left text-5xl text-off-white font-display-xs-regular">
        <NavBar />
        <Hero />
        <Ticker />
        <About />
      </div>
      
    </div>
    
  );
};

export default Desktop;
