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
import { pdfjs } from "react-pdf";

const App = () => {
  useEffect(() => {
    ReactGA.initialize("G-R1MLZDZ6PS");
    handleAnalyticsPageView("pageview", "/", "Landing Page");
  }, []);

  pdfjs.GlobalWorkerOptions.workerSrc = new URL(
    "pdfjs-dist/build/pdf.worker.min.mjs",
    import.meta.url
  ).toString();

  return (
    <BrowserRouter>
      {/* Global background (monochrome, subtle, consistent) */}
      <div className="relative min-h-screen overflow-x-hidden bg-primary text-white">
        <Analytics />

        {/* Stars behind everything, very soft */}
        <div className="pointer-events-none fixed inset-0 -z-20 opacity-15">
          <StarsCanvas />
        </div>

        {/* Soft vignette + radial highlights to match hero/cards */}
        <div
          aria-hidden
          className="
            pointer-events-none fixed inset-0 -z-10
            bg-[radial-gradient(1200px_700px_at_20%_0%,rgba(255,255,255,0.06),transparent)]
            "
        />
        <div
          aria-hidden
          className="
            pointer-events-none fixed inset-0 -z-10
            bg-[radial-gradient(1000px_600px_at_85%_15%,rgba(255,255,255,0.04),transparent)]
            "
        />

        {/* Header (no noisy background image) */}
        <header className="relative">
          <Navbar />
          <Hero />
        </header>

        {/* Content sections (clean stack) */}
        <main className="relative">
          <About />
          <Education />
          <Experience />
          <Tech />
          <Works />
          {/* contact sits on the same unified background */}
          <Contact />
        </main>
      </div>
    </BrowserRouter>
  );
};

export default App;
