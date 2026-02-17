import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about-us" className="py-24 bg-black text-white relative overflow-hidden">

            {/* Dynamic Background with Grid */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Visual Side - Skewed Factory Image */}
                    <div className="relative">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative lg:h-[600px] h-[400px] w-full border-4 border-amber-500 p-2 transform skew-x-[-6deg]"
                        >
                            <div className="w-full h-full overflow-hidden bg-gray-900 group relative">
                                {/* Preserved Factory Image */}
                                <img
                                    src="https://images.pexels.com/photos/257700/pexels-photo-257700.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                    alt="Nestlé Factory"
                                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                                    onError={(e) => {
                                        e.target.src = "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Nestl%C3%A9_Headquarters_Vevey.jpg/1200px-Nestl%C3%A9_Headquarters_Vevey.jpg";
                                    }}
                                />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-colors duration-500"></div>

                                {/* Overlay Text */}
                                <div className="absolute bottom-6 left-6 skew-x-[6deg]">
                                    <span className="bg-amber-500 text-black px-2 py-1 font-bold text-xs uppercase tracking-widest">Est. 1961</span>
                                    <h3 className="text-4xl font-black italic uppercase text-white mt-2">Moga<br />Factory</h3>
                                </div>
                            </div>

                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-12 h-12 border-t-4 border-l-4 border-amber-500"></div>
                            <div className="absolute -bottom-4 -right-4 w-12 h-12 border-b-4 border-r-4 border-amber-500"></div>
                        </motion.div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-8 pl-8 lg:pl-0">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                        >
                            <span className="text-amber-500 font-bold uppercase tracking-widest text-sm mb-2 block skew-x-[-10deg]">Our Legacy</span>
                            <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter text-white leading-none">
                                Rooted <span className="text-transparent text-stroke-white">In India</span>
                            </h2>
                        </motion.div>

                        {/* Racing Timeline */}
                        <div className="space-y-8 relative pl-8 border-l-2 border-white/20">
                            {[
                                { year: '1912', title: 'Start Line', desc: 'Trading begins as The Nestlé Anglo-Swiss Condensed Milk Company.' },
                                { year: '1961', title: 'Pit Stop: Moga', desc: 'First factory established. Local sourcing commitment begins.' },
                                { year: '1983', title: 'Maggi Turbo', desc: 'Maggi Noodles launches, revolutionizing snacking.' },
                                { year: '2025', title: 'Future Lap', desc: 'Investing ₹5,000 Cr in sustainability and innovation.' }
                            ].map((item, index) => (
                                <motion.div
                                    key={item.year}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="relative group cursor-default"
                                >
                                    <span className="absolute -left-[41px] top-1 w-6 h-6 bg-black border-4 border-amber-500 rounded-full group-hover:scale-125 transition-transform"></span>

                                    <div className="skew-x-[-10deg] group-hover:translate-x-2 transition-transform duration-300">
                                        <span className="text-amber-500 font-black italic text-2xl block">{item.year}</span>
                                        <h4 className="text-xl font-bold uppercase text-white mb-1">{item.title}</h4>
                                        <p className="text-sm text-gray-400 font-mono tracking-wide max-w-sm">{item.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <button className="px-10 py-4 bg-white text-black font-black uppercase italic tracking-wider hover:bg-amber-500 transition-all skew-x-[-10deg] mt-6">
                            <span className="block skew-x-[10deg]">Full History Timeline</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
