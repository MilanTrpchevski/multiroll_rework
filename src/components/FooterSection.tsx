import { FaFacebookF, FaInstagram, FaXTwitter, FaLinkedinIn, FaYoutube } from "react-icons/fa6";

export default function FooterSection() {
    return (
        <footer className="bg-[#0C3C3B] text-white px-6 py-12 text-sm">
            <div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8">
                {/* Newsletter */}
                <div>
                    <div className="font-logo text-xl mb-2">Logo</div>
                    <p className="mb-4">Subscribe to our newsletter for the latest updates on features and releases.</p>
                    <div className="flex">
                        <input
                            type="email"
                            placeholder="Your Email Here"
                            className="w-full px-3 py-2 rounded-l bg-[#183d3c] text-white placeholder:text-gray-400 focus:outline-none"
                        />
                        <button className="bg-[#264b4a] px-4 py-2 rounded-r hover:bg-[#356361] transition">Join</button>
                    </div>
                    <p className="text-xs mt-2 text-gray-400">By subscribing, you consent to our Privacy Policy and receive updates.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="font-semibold mb-3">Quick Links</h4>
                    <ul className="space-y-2">
                        <li><a href="#" className="hover:underline">Home Page</a></li>
                        <li><a href="#" className="hover:underline">About Us</a></li>
                        <li><a href="#" className="hover:underline">Our Products</a></li>
                        <li><a href="#" className="hover:underline">Contact Us</a></li>
                        <li><a href="#" className="hover:underline">Blog Posts</a></li>
                    </ul>
                </div>

                {/* Connect With Us */}
                <div>
                    <h4 className="font-semibold mb-3">Connect With Us</h4>
                    <ul className="space-y-2">
                        <li>Facebook Page</li>
                        <li>Instagram Feed</li>
                        <li>Twitter Profile</li>
                        <li>LinkedIn Page</li>
                        <li>YouTube Channel</li>
                    </ul>
                </div>

                {/* Stay Updated */}
                <div>
                    <h4 className="font-semibold mb-3">Stay Updated</h4>
                    <ul className="space-y-3">
                        <li className="flex items-center gap-2"><FaFacebookF /> Facebook</li>
                        <li className="flex items-center gap-2"><FaInstagram /> Instagram</li>
                        <li className="flex items-center gap-2"><FaXTwitter /> X</li>
                        <li className="flex items-center gap-2"><FaLinkedinIn /> LinkedIn</li>
                        <li className="flex items-center gap-2"><FaYoutube /> YouTube</li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-[#1b4948] pt-4 flex flex-col md:flex-row justify-between items-center text-gray-400">
                <p>© 2025 Multi Roll. All rights reserved.</p>
                <div className="flex gap-4 mt-2 md:mt-0 text-sm">
                    <a href="#" className="hover:underline">Privacy Policy</a>
                    <a href="#" className="hover:underline">Terms of Service</a>
                    <a href="#" className="hover:underline">Cookie Settings</a>
                </div>
            </div>
        </footer>
    );
}
