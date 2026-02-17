import { motion } from 'framer-motion';

const brands = [
    {
        name: 'Maggi',
        img: 'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: 'FAST & FURIOUS FLAVOR'
    },
    {
        name: 'Nescafé',
        img: 'https://images.pexels.com/photos/302899/pexels-photo-302899.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: 'FUEL YOUR DAY'
    },
    {
        name: 'KitKat',
        img: 'https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: 'PID STOP BREAK'
    },
    {
        name: 'Munch',
        img: 'https://images.pexels.com/photos/806361/pexels-photo-806361.jpeg?auto=compress&cs=tinysrgb&w=600', // Wafer texture
        desc: 'CRUNCH GEAR'
    },
    {
        name: 'Milkybar',
        img: 'https://images.pexels.com/photos/4110101/pexels-photo-4110101.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: 'CREAMY TURBO'
    },
    {
        name: 'Nestlé a+',
        img: 'https://images.pexels.com/photos/248412/pexels-photo-248412.jpeg?auto=compress&cs=tinysrgb&w=600',
        desc: 'PURE PERFORMANCE'
    },
];

export default function Brands() {
    return (
        <section id="brands" className="py-24 bg-black text-white overflow-hidden relative">
            {/* Speed Lines Background */}
            <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    className="mb-16 border-l-8 border-amber-500 pl-6"
                >
                    <span className="text-amber-500 font-bold tracking-widest uppercase text-sm mb-2 block">Our Team</span>
                    <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
                        Iconic <span className="text-transparent text-stroke-white">Brands</span>
                    </h2>
                </motion.div>

                <div className="flex overflow-x-auto pb-12 gap-8 snap-x snap-mandatory scrollbar-hide">
                    {brands.map((brand, index) => (
                        <motion.div
                            key={brand.name}
                            initial={{ opacity: 0, skewX: 20 }}
                            whileInView={{ opacity: 1, skewX: 0 }}
                            transition={{ delay: index * 0.1, type: "spring" }}
                            className="flex-shrink-0 w-80 snap-center group cursor-pointer"
                        >
                            <div className="h-[450px] bg-gray-900 border-2 border-white/10 hover:border-amber-500 transition-all duration-300 flex flex-col transform -skew-x-6 hover:skew-x-0 hover:bg-gray-800 hover:scale-105 overflow-hidden">

                                {/* Image Section */}
                                <div className="h-1/2 w-full overflow-hidden relative border-b border-white/10 group-hover:border-amber-500/50 transition-colors">
                                    <img
                                        src={brand.img}
                                        alt={brand.name}
                                        className="w-full h-full object-cover skew-x-6 group-hover:skew-x-0 transition-transform duration-500 scale-110 group-hover:scale-100 grayscale group-hover:grayscale-0"
                                    />
                                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors"></div>
                                </div>

                                {/* Content Section */}
                                <div className="p-8 flex flex-col justify-between flex-1">
                                    <div>
                                        <h3 className="text-4xl font-black italic uppercase mb-2 text-white">{brand.name}</h3>
                                        <p className="text-gray-400 font-bold tracking-wider text-sm">{brand.desc}</p>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex justify-end">
                                        <span className="bg-amber-500 text-black p-3 font-bold uppercase text-xs tracking-widest skew-x-6 group-hover:skew-x-0 hover:bg-white transition-colors">
                      View Details ->
                                        </span>
                                    </div>
                                </div>

                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
