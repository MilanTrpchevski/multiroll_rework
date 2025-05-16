import NavBar from "@/components/NavBar";
import Hero from "@/components/Hero";
import Quality from "@/components/Quality";
import TreeCards from "@/components/TreeCards";
import WhyChoose from "@/components/WhyChoose";
import FooterSection from "@/components/FooterSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div>
      <NavBar></NavBar>
        <Hero></Hero>
        <Quality></Quality>
        <TreeCards></TreeCards>
        <WhyChoose></WhyChoose>
        <ContactSection></ContactSection>
        <FooterSection></FooterSection>
    </div>
  );
}
