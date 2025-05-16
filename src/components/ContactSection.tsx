export default function ContactSection() {
    return (
        <section className="bg-white py-20 px-6 text-center">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-mono font-semibold mb-4">Get in Touch with Us</h2>
                <p className="text-gray-600 mb-8">Contact us today for a free consultation!</p>

                <div className="flex justify-center gap-4">
                    <button className="bg-teal-600 text-white px-6 py-2 rounded hover:bg-teal-700 transition">Call</button>
                    <button className="bg-gray-100 text-black px-6 py-2 rounded hover:bg-gray-200 transition">Visit</button>
                </div>
            </div>
        </section>
    );
}
