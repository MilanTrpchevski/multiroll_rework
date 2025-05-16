export default function TreeCards() {
    return (
        <section className="bg-[#2A2F14] text-white py-16 px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <p className="text-sm uppercase tracking-wide">Products</p>
                <h2 className="text-2xl md:text-3xl font-bold mt-2">
                    Explore Our Premium Home Improvement Solutions
                </h2>
                <p className="mt-4 text-sm text-gray-300 max-w-3xl">
                    At Mark Built, we offer a range of high-quality products designed to
                    elevate your space. From stylish shutters to long-lasting solutions,
                    our selection combines functionality with aesthetic appeal.
                </p>

                <div className="grid md:grid-cols-3 gap-8 mt-10">
                    {[
                        {
                            title: "Roller Shutters for Ultimate Privacy and Security",
                            description:
                                "Our roller shutters provide top-level insulation and security.",
                        },
                        {
                            title: "Stylish Garage Doors for Every Home",
                            description: "Choose from a variety of designs and materials.",
                        },
                        {
                            title: "Durable Aluminum Fences for Lasting Protection",
                            description:
                                "Our aluminum fences combine strength and elegance.",
                        },
                    ].map((product, index) => (
                        <div
                            key={index}
                            className="bg-gray-100 text-black p-4 rounded shadow"
                        >
                            <div className="bg-gray-300 h-40 rounded mb-4 flex items-center justify-center">
                                <span className="text-gray-500">[ Image ]</span>
                            </div>
                            <h3 className="font-bold text-md">{product.title}</h3>
                            <p className="text-sm mt-2">{product.description}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-8">
                    <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
                        Learn More
                    </button>
                    <button className="ml-4 border border-white px-4 py-2 rounded hover:bg-gray-100 text-white">
                        Contact
                    </button>
                </div>
            </div>
        </section>
    );
}