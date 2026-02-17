import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            const offsetTop = element.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
            setMobileMenuOpen(false);
        }
    };

    const navLinks = [
        { name: 'Brands', id: 'brands' },
        { name: 'Products', id: 'products' },
        { name: 'Nutrition', id: 'nutrition' },
        { name: 'Sustainability', id: 'sustainability' },
        { name: 'About Us', id: 'about-us' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-black/90 backdrop-blur-md py-4 border-b border-white/10' : 'bg-transparent py-6'}`}>
            <div className="container mx-auto px-6 flex justify-between items-center">

                {/* Logo Area */}
                <div className="flex items-center gap-2 cursor-pointer group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Nestl%C3%A9_textlogo.svg/512px-Nestl%C3%A9_textlogo.svg.png"
                        alt="Nestlé"
                        className="h-8 md:h-10 w-auto filter brightness-0 invert transition-all duration-300 transform group-hover:scale-105"
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.classList.remove('hidden');
                        }}
                    />
                    <span className="hidden text-3xl font-black italic uppercase tracking-tighter text-white">Nestlé</span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <button
                            key={link.name}
                            onClick={() => scrollToSection(link.id)}
                            className="relative text-white font-bold uppercase italic tracking-wider hover:text-amber-500 transition-colors text-sm group"
                        >
                            <span className="relative z-10">{link.name}</span>
                            <span className="absolute bottom-[-4px] left-0 w-0 h-[2px] bg-amber-500 group-hover:w-full transition-all duration-300 skew-x-[-10deg]"></span>
                        </button>
                    ))}

                    <button className="px-6 py-2 bg-white text-black font-black uppercase italic tracking-wider hover:bg-amber-500 hover:text-black transition-all skew-x-[-10deg]">
                        <span className="block skew-x-[10deg]">Sign In</span>
                    </button>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-white"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        {mobileMenuOpen ? (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        ) : (
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                        )}
                    </svg>
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-black border-t border-white/10 overflow-hidden"
                    >
                        <div className="flex flex-col p-6 gap-4">
                            {navLinks.map((link) => (
                                <button
                                    key={link.name}
                                    onClick={() => scrollToSection(link.id)}
                                    className="text-left text-white font-black italic uppercase tracking-wider text-xl hover:text-amber-500 transition-colors"
                                >
                                    {link.name}
                                </button>
                            ))}
                            <button className="mt-4 px-6 py-3 bg-amber-500 text-black font-black uppercase italic tracking-wider text-center">
                                Sign In
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
