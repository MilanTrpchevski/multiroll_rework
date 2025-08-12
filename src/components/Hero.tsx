import Image from "next/image";
import {HeroTypes} from "@/types/types";

export default function Hero(
    {
        title,
        description,
        backgroundColor,
        firstButton,
        secondButton,
        label,
        firstParagraph,
        secondParagraph,
        image,
    } : HeroTypes
) {
    return (
        <section className={`bg-${backgroundColor} text-white px-6 py-16 md:px-12 lg:px-24 flex flex-col md:flex-row items-center min-h-[85vh] `}>
            <div className="md:w-1/2 text-center md:text-left">
                <label htmlFor="title" className="text-left">{label}</label>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight">
                    {title}
                </h1>
                <p className="mt-4 text-lg">
                    {description}
                </p>
                <div className="mt-6 flex gap-4 justify-center md:justify-start">
                    {firstButton !== null && (
                        <button className="bg-white text-teal-900 px-6 py-2 rounded-lg font-semibold">
                            {firstButton}
                        </button>
                    )}
                    {secondButton !== null && (
                        <button className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold">
                            {secondButton}
                        </button>
                    )}
                </div>
                {firstParagraph !== null || secondParagraph !== null && (
                    <div className="mt-6 flex gap-4 justify-center md:justify-start">
                        {firstParagraph !== null && (
                            <div className="bg-white text-teal-900 px-6 py-2 rounded-lg font-semibold">
                                {firstParagraph}
                            </div>
                        )}
                        {secondParagraph !== null && (
                            <div className="bg-gray-600 text-white px-6 py-2 rounded-lg font-semibold">
                                {secondParagraph}
                            </div>
                        )}
                    </div>
                )}

            </div>
            <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
                <div className="bg-gray-300 w-80 h-48 md:w-3/4 md:h-[400px] flex items-center justify-center">
                    <Image src={image} alt={"Hero image"} width="100" height="100"></Image>
                </div>
            </div>
        </section>
    );
}
