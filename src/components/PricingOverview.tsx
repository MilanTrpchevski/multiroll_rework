import {PricingOverviewProps} from "@/types/types";

export default function PricingOverview(
    {
        title,
        subtitle,
        plans,
        features
    } : PricingOverviewProps)
    {
    return (
        <section className="py-16 bg-white text-gray-800">
            <div className="max-w-6xl mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold">{title}</h2>
                {subtitle && <p className="text-gray-500 mt-2">{subtitle}</p>}
                <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className="border rounded-lg shadow p-6 flex flex-col justify-between"
                        >
                            <div>
                                <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                                <p className="text-3xl font-bold mb-4">{plan.price}</p>
                                <p className="text-gray-500 mb-6">{plan.description}</p>
                                <ul className="text-left space-y-2">
                                    {features.map((feature, index) => (
                                        <li key={index} className="flex items-center gap-2">
                                            {plan.features.includes(feature) ? (
                                                <span className="text-green-600">✔</span>
                                            ) : (
                                                <span className="text-gray-300">✖</span>
                                            )}
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <button className="mt-6 bg-teal-600 text-white py-2 rounded hover:bg-teal-700 transition">
                                Get Started
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

