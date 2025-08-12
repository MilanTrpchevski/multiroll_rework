export default function LeftSideTextRightSideImageFullScreen() {
    return (
        <div className="flex h-screen">
            {/* Left Section */}
            <div className="w-1/2 bg-[#033A3D] text-white p-16 flex flex-col justify-center">
                <h1 className="text-4xl font-mono font-bold leading-tight mb-6">
                    Discover Our <br/>
                    Premium <br/>
                    Aluminum <br/>
                    Fences Today
                </h1>
                <p className="text-sm mb-8 max-w-md">
                    Enhance your home’s security and aesthetic appeal with our premium aluminum fences. Designed for
                    durability and style, these fences provide both protection and elegance to your property.
                </p>
                <div className="flex gap-4">
                    <button className="bg-teal-500 text-white px-4 py-2 rounded hover:bg-teal-600">
                        Shop
                    </button>
                    <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800">
                        Learn More
                    </button>
                </div>
            </div>

            <div className="w-1/2 bg-gray-200 flex items-center justify-center">
                <div className="w-32 h-32 bg-gray-400 rounded-md flex items-center justify-center">
                    <span className="text-white text-xl">Image</span>
                </div>
            </div>
        </div>
    );
};
