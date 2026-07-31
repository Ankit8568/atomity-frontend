import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import FeatureSection from "../components/FeatureSection";
import FeaturesGrid from "../components/FeaturesGrid";
import CTASection from "../components/CTASection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <FeatureSection />
      <FeaturesGrid />
      <CTASection />
      <Footer />
    </main>
  );
}