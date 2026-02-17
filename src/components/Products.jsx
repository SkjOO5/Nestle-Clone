import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Beverages', 'Chocolates', 'Dairy', 'Cooking'];

// Products with verified image URLs and descriptions
const products = [
    {
        id: 1,
        name: 'Nescafé Classic',
        category: 'Beverages',
        rating: 4.8,
        price: '280',
        img: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Start your day with the bold aroma and rich taste of Nescafé Classic. Made from 100% pure natural coffee beans.'
    },
    {
        id: 2,
        name: 'Maggi Masala',
        category: 'Cooking',
        rating: 4.9,
        price: '14',
        img: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'India’s favorite instant noodles! Maggi 2-Minute Noodles with the perfect blend of spices and tastemaker.'
    },
    {
        id: 3,
        name: 'KitKat Dark',
        category: 'Chocolates',
        rating: 4.7,
        price: '40',
        img: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Have a break with KitKat Dark. A perfect balance of crispy wafer and rich dark chocolate.'
    },
    {
        id: 4,
        name: 'Nestlé a+ Milk',
        category: 'Dairy',
        rating: 4.6,
        price: '75',
        img: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Nourish your family with the goodness of Nestlé a+ Nourish Milk, undergoing 61 quality checks.'
    },
    {
        id: 5,
        name: 'Nescafé Gold',
        category: 'Beverages',
        rating: 5.0,
        price: '520',
        img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Crafted with care for moments that matter. A premium blend of Arabica and Robusta beans.'
    },
    {
        id: 6,
        name: 'Munch Nuts',
        category: 'Chocolates',
        rating: 4.8,
        price: '20',
        img: 'https://images.pexels.com/photos/806361/pexels-photo-806361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Crunchy wafer coated with delicious chocolate and loaded with roasted peanuts.'
    },
    {
        id: 7,
        name: 'Everyday Dairy',
        category: 'Dairy',
        rating: 4.5,
        price: '420',
        img: 'https://images.pexels.com/photos/416656/pexels-photo-416656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Make your tea perfect with Nestlé Everyday Dairy Whitener. Creamy thickness for the perfect cup.'
    },
    {
        id: 8,
        name: 'Pazzta Cheese',
        category: 'Cooking',
        rating: 4.4,
        price: '25',
        img: 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        desc: 'Delicious instant pasta in a cheesy creamy sauce. Ready in just 5 minutes!'
    },
];

export default function Products() {
    const [filter, setFilter] = useState('All');
    const [hoveredProduct, setHoveredProduct] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null); // For Modal

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

    const resetFilter = () => {
        setFilter('All');
        const section = document.getElementById('products');
        if (section) section.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="products" className="py-24 bg-gray-900 text-white relative">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-amber-500/5 -skew-x-12 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">

                {/* Header */}
                <div className="mb-16 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
                    <div>
                        <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2 block">Our Collection</span>
                        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none">
                            Taste <span className="text-transparent text-stroke-white">Power</span>
                        </h2>
                    </div>

                    {/* Filters */}
                    <div className="flex flex-wrap gap-2 pt-6 md:pt-0">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 border-2 text-sm font-bold uppercase tracking-wider skew-x-[-10deg] transition-all duration-300 relative group cursor-pointer ${filter === cat
                                        ? 'bg-amber-500 text-black border-amber-500'
                                        : 'bg-transparent text-gray-500 border-white/20 hover:border-white hover:text-white'
                                    }`}
                            >
                                <span className="block skew-x-[10deg]">{cat}</span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Grid */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProducts.map(product => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.15 } }}
                                key={product.id}
                                onMouseEnter={() => setHoveredProduct(product.id)}
                                onMouseLeave={() => setHoveredProduct(null)}
                                onClick={() => setSelectedProduct(product)} // Open Modal
                                className="group relative bg-black/50 border border-white/10 hover:border-amber-500 h-[480px] flex flex-col transition-colors duration-300 cursor-pointer"
                            >
                                <div className="relative h-[60%] w-full overflow-hidden bg-white/5">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600"; }}
                                    />
                                    <div className="absolute top-0 left-0 bg-amber-500 text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest clip-path-slant-r">
                                        {product.category}
                                    </div>
                                    <div className={`absolute inset-0 bg-amber-500/20 mix-blend-overlay transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}></div>
                                </div>

                                <div className="p-6 flex-1 flex flex-col justify-between relative z-20">
                                    <div>
                                        <div className="flex justify-between items-start mb-2">
                                            <h3 className="text-2xl font-black italic uppercase text-white group-hover:text-amber-500 transition-colors leading-none">{product.name}</h3>
                                        </div>
                                        <div className="flex text-amber-500 text-xs font-bold gap-1 mt-2">
                                            {'★'.repeat(Math.floor(product.rating))}
                                            <span className="text-gray-500 ml-2">{product.rating} Rating</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/10">
                                        <button className="flex-1 py-2 bg-transparent border border-white/20 hover:bg-amber-500 hover:border-amber-500 hover:text-black text-xs font-bold uppercase tracking-wider transition-all skew-x-[-10deg]">
                                            <span className="block skew-x-[10deg]">View Details</span>
                                        </button>
                                        <span className="text-xl font-black text-white">₹{product.price}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* View All Button */}
                <div className="text-center mt-16 relative z-50">
                    <button
                        onClick={resetFilter}
                        className="px-12 py-4 bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-black uppercase italic tracking-wider transition-all skew-x-[-10deg] cursor-pointer"
                    >
                        <span className="block skew-x-[10deg]">View All Products</span>
                    </button>
                </div>

                {/* Modal Overlay */}
                <AnimatePresence>
                    {selectedProduct && (
                        <div className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4">
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                onClick={() => setSelectedProduct(null)}
                                className="absolute inset-0"
                            ></motion.div>

                            <motion.div
                                initial={{ y: 50, opacity: 0, scale: 0.9 }}
                                animate={{ y: 0, opacity: 1, scale: 1 }}
                                exit={{ y: 50, opacity: 0, scale: 0.9 }}
                                className="bg-gray-900 border-2 border-amber-500 max-w-4xl w-full max-h-[90vh] overflow-y-auto grid md:grid-cols-2 relative z-50 shadow-2xl"
                            >

                                {/* Close Button - Moved OUTSIDE the overflow and set to FIXED relative to modal */}
                                <button
                                    onClick={() => setSelectedProduct(null)}
                                    className="absolute top-4 right-4 bg-amber-500 text-black w-10 h-10 flex items-center justify-center font-bold hover:bg-white transition-colors skew-x-[-10deg] z-[60] shadow-lg cursor-pointer hover:scale-110"
                                >
                                    <span className="skew-x-[10deg] text-xl">✕</span>
                                </button>

                                {/* Modal Image */}
                                <div className="h-64 md:h-full relative bg-white/5">
                                    <img src={selectedProduct.img} className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                                </div>

                                {/* Modal Content */}
                                <div className="p-8 md:p-12 space-y-6 pt-12 md:pt-12">
                                    <div>
                                        <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2 block">{selectedProduct.category}</span>
                                        <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none text-white mb-4 pr-10">
                                            {selectedProduct.name}
                                        </h2>
                                        <div className="flex gap-1 text-amber-500">
                                            {'★'.repeat(Math.floor(selectedProduct.rating))}
                                        </div>
                                    </div>

                                    <p className="text-gray-300 text-lg leading-relaxed font-light">
                                        {selectedProduct.desc}
                                    </p>

                                    {/* Specs */}
                                    <div className="grid grid-cols-2 gap-4 py-6 border-y border-white/10">
                                        <div>
                                            <span className="block text-gray-500 text-xs uppercase tracking-widest">Energy</span>
                                            <span className="text-xl font-bold text-white">120kcal</span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500 text-xs uppercase tracking-widest">Protein</span>
                                            <span className="text-xl font-bold text-white">4.2g</span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500 text-xs uppercase tracking-widest">Type</span>
                                            <span className="text-xl font-bold text-white">Veg</span>
                                        </div>
                                        <div>
                                            <span className="block text-gray-500 text-xs uppercase tracking-widest">Origin</span>
                                            <span className="text-xl font-bold text-white">India</span>
                                        </div>
                                    </div>

                                    <div className="flex items-center justify-between pt-4">
                                        <span className="text-4xl font-black text-white">₹{selectedProduct.price}</span>
                                        <button className="px-8 py-3 bg-amber-500 text-black font-black uppercase italic tracking-wider hover:bg-white transition-all skew-x-[-10deg]">
                                            <span className="block skew-x-[10deg]">Add to Pitbox</span>
                                        </button>
                                    </div>
                                </div>

                            </motion.div>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
}
