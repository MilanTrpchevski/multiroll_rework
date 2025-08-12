import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="bg-[#0F2D2E] text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                {/* Logo */}
                <div className="text-lg font-bold">Logo</div>

                {/* Links */}
                <ul className="hidden md:flex space-x-6">
                    <li><Link href="/">Home Improvement</Link></li>
                    <li><Link href="/products">Our Products</Link></li>
                    <li><Link href="/about">About Us</Link></li>
                    <li><Link href="/reviews">Customer Reviews</Link></li>
                </ul>

                {/* Buttons */}
                <div className="flex space-x-4">
                    <button className="bg-white text-black px-4 py-2 rounded">Learn</button>
                    <button className="bg-blue-500 px-4 py-2 rounded">Explore</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
