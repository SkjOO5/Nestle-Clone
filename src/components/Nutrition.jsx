import { motion } from 'framer-motion';

export default function Nutrition() {
    return (
        <section id="nutrition" className="py-24 relative overflow-hidden bg-black text-white">
            {/* Background Image */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=2532&auto=format&fit=crop"
                    alt="Fresh Ingredients"
                    className="w-full h-full object-cover opacity-20 filter grayscale contrast-150"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/90 to-black/50"></div>
            </div>

            {/* Geometric Overlay */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-lime-400/5 -skew-x-12 pointer-events-none border-l border-lime-400/20"></div>

            <div className="container mx-auto px-6 relative z-10 grid md:grid-cols-2 gap-16 items-center">

                {/* Left Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                    className="space-y-8"
                >
                    <div className="border-l-4 border-lime-400 pl-4">
                        <span className="text-lime-400 font-bold uppercase tracking-widest text-sm block mb-1">Science of Food</span>
                        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-white">
                            Pure <span className="text-transparent text-stroke-white">Fuel</span>
                        </h2>
                    </div>

                    <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-lg">
                        High-performance nutrition for a high-performance life. We engineer food that powers your body and mind.
                    </p>

                    <div className="grid grid-cols-1 gap-6 pt-4">
                        {[
                            { icon: '🌱', title: 'Natural Ingredients', desc: 'Sourced from the finest origins.' },
                            { icon: '🔬', title: 'Lab Tested', desc: 'Rigorous scientific validation.' },
                        ].map((item, idx) => (
                            <div key={idx} className="flex items-center gap-6 p-4 border border-white/10 bg-white/5 hover:bg-lime-400/10 hover:border-lime-400 transition-all skew-x-[-10deg]">
                                <div className="w-12 h-12 flex items-center justify-center text-3xl skew-x-[10deg]">{item.icon}</div>
                                <div className="skew-x-[10deg]">
                                    <h4 className="font-black uppercase text-lg italic text-white">{item.title}</h4>
                                    <p className="text-sm text-gray-400">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="px-10 py-4 bg-lime-400 text-black font-black uppercase italic tracking-wider hover:bg-white transition-all skew-x-[-10deg]">
                        <span className="block skew-x-[10deg]">Analyze Specs</span>
                    </button>
                </motion.div>

                {/* Right Visual - Tech Cards */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative h-[600px] w-full hidden md:block"
                >
                    {/* Main Card */}
                    <div className="absolute top-10 right-10 w-80 h-96 bg-gray-900 border-2 border-lime-400 p-1 skew-x-[-6deg] z-20 group">
                        <div className="relative w-full h-full overflow-hidden bg-black">
                            <img
                                src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0"
                            />
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent">
                                <h3 className="text-3xl font-black italic uppercase text-white">Balanced<br /><span className="text-lime-400">Diet</span></h3>
                            </div>
                        </div>

                        {/* Decorative corners */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 border-t-4 border-r-4 border-white"></div>
                        <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-4 border-l-4 border-white"></div>
                    </div>

                    {/* Secondary Card */}
                    <div className="absolute bottom-20 left-10 w-64 h-80 bg-gray-800 border border-white/20 p-6 skew-x-[-6deg] z-10 flex flex-col justify-end">
                        <div className="text-6xl font-black italic text-lime-400 mb-2">85%</div>
                        <p className="text-gray-300 font-bold uppercase text-sm leading-tight">of portfolio meets strict nutritional standards.</p>
                    </div>
                </motion.div>

            </div>
        </section>
    );
}
