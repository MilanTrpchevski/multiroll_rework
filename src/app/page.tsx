import Hero from "@/components/Hero";
import Quality from "@/components/Quality";
import TreeCards from "@/components/TreeCards";
import WhyChoose from "@/components/WhyChoose";
import FooterSection from "@/components/FooterSection";
import ContactSection from "@/components/ContactSection";
import {Plan} from "@/types/types";
import PricingOverview from "@/components/PricingOverview";

const plans: Plan[] = [
    {
        name: 'Basic',
        price: '$19/mo',
        description: 'Ideal for small projects',
        features: ['Thermal Insulation Rating: 10', 'Durability Rating', 'Aesthetic Appeal'],
    },
    {
        name: 'Business',
        price: '$29/mo',
        description: 'Perfect for medium needs',
        features: [
            'Thermal Insulation Rating: 25',
            'Durability Rating',
            'Aesthetic Appeal',
            'Maintenance Requirements',
        ],
    },
    {
        name: 'Enterprise',
        price: '$49/mo',
        description: 'Best for large enterprises',
        features: [
            'Thermal Insulation Rating: Unlimited',
            'Durability Rating',
            'Aesthetic Appeal',
            'Maintenance Requirements',
            'Cost Efficiency',
        ],
    },
];

const features = [
    'Thermal Insulation Rating: 10',
    'Thermal Insulation Rating: 25',
    'Thermal Insulation Rating: Unlimited',
    'Durability Rating',
    'Aesthetic Appeal',
    'Maintenance Requirements',
    'Cost Efficiency',
];

export default function Home() {
  return (
    <div>
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
        <PricingOverview
            title="Pricing Overview"
            subtitle="Explore the differences between PVC and aluminum materials."
            plans={plans}
            features={features}
        />
    </div>
  );
}
