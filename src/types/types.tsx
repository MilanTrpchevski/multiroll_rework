export interface HeroTypes {
    title: string | null,
    description: string | null,
    backgroundColor: string | null,
    firstButton: string | null,
    secondButton: string | null,
    label: string | null,
    firstParagraph: string | null,
    secondParagraph: string | null,
    image: string,
}

export interface Plan {
    name: string;
    price: string;
    description: string;
    features: string[];
}

export interface PricingOverviewProps {
    title: string;
    subtitle?: string;
    plans: Plan[];
    features: string[];
}
