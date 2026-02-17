import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const categories = ['All', 'Beverages', 'Chocolates', 'Dairy', 'Cooking'];

// Products with verified image URLs
const products = [
    { id: 1, name: 'Nescafé Classic', category: 'Beverages', rating: 4.8, price: '280', img: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 2, name: 'Maggi Masala', category: 'Cooking', rating: 4.9, price: '14', img: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 3, name: 'KitKat Dark', category: 'Chocolates', rating: 4.7, price: '40', img: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 4, name: 'Nestlé a+ Milk', category: 'Dairy', rating: 4.6, price: '75', img: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 5, name: 'Nescafé Gold', category: 'Beverages', rating: 5.0, price: '520', img: 'https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 6, name: 'Munch Nuts', category: 'Chocolates', rating: 4.8, price: '20', img: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 7, name: 'Everyday Dairy', category: 'Dairy', rating: 4.5, price: '420', img: 'https://images.pexels.com/photos/416656/pexels-photo-416656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { id: 8, name: 'Pazzta Cheese', category: 'Cooking', rating: 4.4, price: '25', img: 'https://images.pexels.com/photos/1487511/pexels-photo-1487511.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

export default function Products() {
    const [filter, setFilter] = useState('All');
    const [hoveredProduct, setHoveredProduct] = useState(null);

    const filteredProducts = filter === 'All'
        ? products
        : products.filter(p => p.category === filter);

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

                    {/* Filters - Racing Toggle Style */}
                    <div className="flex flex-wrap gap-2 pt-6 md:pt-0">
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 border-2 text-sm font-bold uppercase tracking-wider skew-x-[-10deg] transition-all duration-300 ${filter === cat
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
                                className="group relative bg-black/50 border border-white/10 hover:border-amber-500 h-[450px] flex flex-col transition-colors duration-300"
                            >
                                {/* Product Image Area - Sharp Edges */}
                                <div className="relative h-[65%] w-full overflow-hidden bg-white/5">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                                        onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=600"; }}
                                    />

                                    {/* Category Tag */}
                                    <div className="absolute top-0 left-0 bg-amber-500 text-black px-4 py-1 text-[10px] font-black uppercase tracking-widest clip-path-slant-r">
                                        {product.category}
                                    </div>

                                    {/* Hover Overlay */}
                                    <div className={`absolute inset-0 bg-amber-500/20 mix-blend-overlay transition-opacity duration-300 ${hoveredProduct === product.id ? 'opacity-100' : 'opacity-0'}`}></div>
                                </div>

                                {/* Content Area */}
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

                                    <div className="flex items-center justify-between mt-4 border-t border-white/10 pt-4">
                                        <span className="text-3xl font-black text-white">₹{product.price}</span>

                                        <button className="bg-white text-black w-10 h-10 flex items-center justify-center font-bold hover:bg-amber-500 hover:scale-110 transition-all skew-x-[-10deg]">
                                            <span className="skew-x-[10deg] text-xl">+</span>
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                <div className="text-center mt-16">
                    <button className="px-12 py-4 bg-transparent border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black font-black uppercase italic tracking-wider transition-all skew-x-[-10deg]">
                        <span className="block skew-x-[10deg]">View All Products</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
