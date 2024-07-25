import { BrowserRouter } from "react-router-dom";
import ReactGA from "react-ga4";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Loader,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import Education from "./components/Education";
import { useEffect } from "react";
import { handleAnalyticsPageView } from "./analytics/google-analytics";
import { Analytics } from "@vercel/analytics/react";
import { pdfjs } from 'react-pdf';


const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-R1MLZDZ6PS");
    handleAnalyticsPageView("pageview", "/", "Landing Page");
  }, []);

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <Analytics />
        <div className="bg-hero-pattern  bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Education />
        <Experience />
        <Tech />
        <Works />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
