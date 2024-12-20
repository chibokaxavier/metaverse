import About from "@/components/About";
import Explore from "@/components/Explore";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import WhatsNew from "@/components/WhatsNew";
import World from "@/components/World";


export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <div className="relative">
        <About />
        <div className="gradient-03 z-0" />
        <Explore />
      </div>
      <div className="relative">
        <GetStarted />
        <div className="gradient-04 z-0" />
        <WhatsNew />
      </div>
      <World />
      <div className="relative">
        <Insights />
        <div className="gradient-04 z-0" />
        <Feedback />
      </div>

      <Footer />
    </div>
  );
}
