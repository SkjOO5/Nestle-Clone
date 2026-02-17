export default function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800">
            <div className="container mx-auto px-6 grid md:grid-cols-4 gap-12">

                {/* Brand */}
                <div className="space-y-4">
                    <h2 className="text-2xl font-display font-bold text-white flex items-center gap-2">
                        Nestlé
                        <span className="text-xs font-sans font-normal text-gray-500 bg-gray-800 px-2 py-1 rounded">India</span>
                    </h2>
                    <p className="text-sm">
                        Good Food, Good Life. Enhancing quality of life and contributing to a healthier future.
                    </p>
                    <div className="flex gap-4">
                        {['Fb', 'Tw', 'In', 'Yt'].map(social => (
                            <a key={social} href="#" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all text-xs font-bold">
                                {social}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Links Group 1 */}
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Company</h4>
                    <ul className="space-y-2 text-sm">
                        {['About Us', 'Leadership', 'Careers', 'Investors', 'Media'].map(link => (
                            <li key={link}>
                                <a href="#" className="hover:text-white transition-colors">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Links Group 2 */}
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Brands</h4>
                    <ul className="space-y-2 text-sm">
                        {['Maggi', 'Nescafé', 'KitKat', 'Munch', 'Milkybar'].map(link => (
                            <li key={link}>
                                <a href="#" className="hover:text-white transition-colors">{link}</a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Newsletter */}
                <div>
                    <h4 className="text-white font-bold mb-4 uppercase text-sm tracking-wider">Stay Updated</h4>
                    <p className="text-sm mb-4">Subscribe to our newsletter for the latest updates and recipes.</p>
                    <div className="flex bg-gray-800 rounded-lg overflow-hidden p-1 focus-within:ring-2 focus-within:ring-blue-500 transition-all">
                        <input
                            type="email"
                            placeholder="Your email"
                            className="bg-transparent px-4 py-2 w-full focus:outline-none text-white text-sm"
                        />
                        <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors font-medium text-sm">
                            Join
                        </button>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs">
                <p>&copy; 2025 Nestlé India Ltd. All rights reserved.</p>
                <div className="flex gap-6 mt-4 md:mt-0">
                    <a href="#" className="hover:text-white">Privacy Policy</a>
                    <a href="#" className="hover:text-white">Terms of Use</a>
                    <a href="#" className="hover:text-white">Cookie Policy</a>
                </div>
            </div>
        </footer>
    );
}
