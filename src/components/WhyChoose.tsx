export default function WhyChoose() {
    return (
        <section className="bg-[#111] text-white py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-sm uppercase tracking-wide">Quality</p>
                <h2 className="text-3xl md:text-4xl font-bold mt-2">Why Choose Multi Roll</h2>
                <p className="mt-2 text-sm text-gray-300">
                    Unmatched quality for your home improvement needs.
                </p>

                {/* Cards */}
                <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
                    {[
                        {
                            title: "Premium Materials",
                            description:
                                "We use only the finest materials to ensure durability and performance in every product.",
                            buttons: ["Learn More", "Contact"],
                        },
                        {
                            title: "Enhanced Thermal Insulation Benefits",
                            description: "Keep your home comfortable year-round.",
                            buttons: ["Discover"],
                        },
                        {
                            title: "Aesthetic Designs for Every Home",
                            description: "Transform your space with our stylish solutions.",
                            buttons: ["Explore"],
                        },
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="bg-gray-500/20 p-6 rounded-md shadow flex flex-col justify-between h-full"
                        >
                            <div className="mb-4">
                                {/* Placeholder Icon */}
                                <div className="bg-gray-400 w-8 h-8 rounded-full mb-4" />
                                <h3 className="text-lg font-semibold leading-snug">{item.title}</h3>
                                <p className="text-sm text-gray-300 mt-2">{item.description}</p>
                            </div>
                            <div className="mt-4 flex flex-wrap gap-3">
                                {item.buttons.map((btn, i) => (
                                    <button
                                        key={i}
                                        className="text-sm text-white border border-white rounded px-4 py-1 hover:bg-white hover:text-black transition"
                                    >
                                        {btn} →
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Testimonial */}
                <div className="mt-20 text-center max-w-2xl mx-auto">
                    <div className="text-sm text-gray-400 mb-2">Powered by</div>
                    <div className="text-white font-bold text-xl mb-6">Webflow</div>
                    <blockquote className="text-lg italic text-gray-200">
                        "The roller shutters from Multi Roll transformed our home! Their quality and design exceeded our expectations."
                    </blockquote>

                    <div className="mt-6 flex flex-col items-center">
                        <div className="w-10 h-10 bg-gray-400 rounded-full mb-2" />
                        <p className="font-semibold">John Doe</p>
                        <p className="text-sm text-gray-400">Homeowner, North Macedonia</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
