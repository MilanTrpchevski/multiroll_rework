// components/Hero.tsx
import Image from "next/image";

export default function Hero() {
    return (
        <section className="bg-teal-900 text-white px-6 py-16 md:px-12 lg:px-24 flex flex-col md:flex-row items-center min-h-[85vh] ">
            <div className="md:w-1/2 text-center md:text-left">
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    Transform Your Home with Premium Solutions
                </h1>
                <p className="mt-4 text-lg">
                    Discover the perfect blend of style and functionality with Multi Roll's top-tier roller shutters, windows, and aluminum fences.
                </p>
                <div className="mt-6 flex gap-4 justify-center md:justify-start">
                    <button className="bg-white text-teal-900 px-6 py-2 rounded-lg font-semibold">
                        Learn More
                    </button>
                    <button className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold">
                        Contact
                    </button>
                </div>
            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <div className="bg-gray-300 w-80 h-48 md:w-3/4 md:h-[400px] flex items-center justify-center">
                    <Image src={""} alt={"asd"} width="100" height="100"></Image>
                </div>
            </div>
        </section>
    );
}
