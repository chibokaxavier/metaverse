import About from "@/components/About";
import Explore from "@/components/Explore";
import Feedback from "@/components/Feedback";
import Footer from "@/components/Footer";
import GetStarted from "@/components/GetStarted";
import Hero from "@/components/Hero";
import Insights from "@/components/Insights";
import Navbar from "@/components/Navbar";
import WhatsNew from "@/components/WhatsNew";
import World from "@/components/World";
import Image from "next/image";

export default function Home() {
  return (
   <div className='overflow-hidden'>
    <Hero />
    <About />
    <Explore />
    <GetStarted />
    <WhatsNew />
    <World />
    <Insights />
    <Feedback />
    <Footer />
   </div>
  );
}
