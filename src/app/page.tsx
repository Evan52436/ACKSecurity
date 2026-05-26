import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import StatusWidget from "@/components/StatusWidget";
import Team from "@/components/Team";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      {/* Navigation Header */}
      <Navbar />

      <main style={{ flex: "1 0 auto" }}>
        {/* Hero Section */}
        <Hero />

        {/* Core Team Section */}
        <Team />
        <div className="dashedDiv" />

        {/* About Section */}
        <About />

        {/* Services Section */}
        <Services />

        {/* Activity Status Widget */}
        <StatusWidget />

        {/* Contact Intake Form */}
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
