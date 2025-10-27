import AppPromotion from "@/components/AppPromotion";
import ContactSection from "@/components/ContactSection";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import GlobalOps from "@/components/GlobalOps";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import Pricing from "@/components/Pricing";
import Security from "@/components/Security";
import Testimonials from "@/components/Testimonials";
import Works from "@/components/Works";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      {/* Your page content goes here */}

      <div className="bg-gradient-to-r from-sky-100 via-orange-50 to-purple-100 md:from-sky-200 md:via-orange-50 md:to-purple-200 mx-4 rounded-2xl boder-shadow-lg ">
        <Navbar />
        <HeroSection />
      </div>
      <Features />
      <Works />
      <Security />
      <Pricing />
      <GlobalOps />
      <Testimonials />
      <AppPromotion />
      <ContactSection />
      <Footer />
    </div>
  )
}

