import Hero from "@/components/Hero";
import Quality from "@/components/Quality";
import TreeCards from "@/components/TreeCards";
import WhyChoose from "@/components/WhyChoose";
import FooterSection from "@/components/FooterSection";
import ContactSection from "@/components/ContactSection";
import LeftSideTextRightSideImageFullScreen from "@/components/LeftSideTextRightSideImageFullScreen";

export default function Products() {
    return (
        <div>
            <LeftSideTextRightSideImageFullScreen />
            <Hero
                title={"Transform Your Home with Premium Solutions"}
                description={"Discover the perfect blend of style and functionality with Multi Roll's top-tier roller shutters, windows, and aluminum fences."}
                label={null}
                backgroundColor={"teal-900"}
                firstButton={"Learn More"}
                secondButton={"Contact"}
                firstParagraph={null}
                secondParagraph={null}
                image={"/"}
            ></Hero>
            <Quality></Quality>
            <TreeCards></TreeCards>
            <WhyChoose></WhyChoose>
            <ContactSection></ContactSection>
            <FooterSection></FooterSection>
        </div>
    );
}
