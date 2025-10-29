import AppPromotion from "@/components/sections/AppPromotion";
import ContactSection from "@/components/sections/ContactSection";
import Features from "@/components/sections/Features";
import Footer from "@/components/layout/Footer";
import GlobalOps from "@/components/sections/GlobalOps";
import HeroSection from "@/components/sections/HeroSection";
import Navbar from "@/components/layout/Navbar";
import Pricing from "@/components/sections/Pricing";
import Security from "@/components/sections/Security";
import Testimonials from "@/components/sections/Testimonials";
import Works from "@/components/sections/Works";

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

