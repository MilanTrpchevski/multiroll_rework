export default function Quality() {
    return (
        <section className="bg-white text-black py-12 px-6 md:px-12">
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8 items-center">
                <div>
                    <p className="text-sm uppercase tracking-wide">Quality</p>
                    <h1 className="text-3xl md:text-4xl font-bold leading-tight mt-2">
                        Your Trusted Partner in Home Improvement
                    </h1>
                    <p className="mt-4 text-sm text-gray-700">
                        At Mark Built, we specialize in providing top-notch roller shutters, aluminum fences, and a wide
                        range of beautiful garage doors. With years of experience, we take immense pride in delivering
                        premium home solutions at affordable prices.
                    </p>
                    <div className="mt-6 flex space-x-4">
                        <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800">
                            Learn More
                        </button>
                        <button className="border border-black px-4 py-2 rounded hover:bg-gray-100">
                            Contact
                        </button>
                    </div>
                </div>
                <div className="flex justify-center">
                    <div className="bg-gray-200 w-full h-64 md:h-80 rounded flex items-center justify-center">
                        <span className="text-gray-500">[ Image Placeholder ]</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
