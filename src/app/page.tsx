import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Materials from "@/components/Materials";
import Advantages from "@/components/Advantages";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Materials />
        <Advantages />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
