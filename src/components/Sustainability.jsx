import { motion } from 'framer-motion';

export default function Sustainability() {
    return (
        <section id="sustainability" className="py-24 bg-black text-white relative overflow-hidden">

            {/* Dynamic Background */}
            <div className="absolute inset-0 z-0">
                <img src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full h-full object-cover opacity-10 filter grayscale" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center">

                {/* Content Side */}
                <div className="space-y-8">
                    <div className="border-l-4 border-green-500 pl-4">
                        <span className="text-green-500 font-bold uppercase tracking-widest text-sm mb-1 block">Planet Pledge</span>
                        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-white">
                            Zero <span className="text-transparent text-stroke-white">Net</span>
                        </h2>
                        <h2 className="text-6xl md:text-8xl font-black italic uppercase tracking-tighter leading-none text-green-500">
                            Future
                        </h2>
                    </div>

                    <p className="text-xl text-gray-400 font-medium leading-relaxed max-w-lg">
                        The race against climate change is on. We are committed to achieving net zero greenhouse gas emissions by 2050.
                    </p>

                    <div className="pt-8 space-y-6">
                        {[
                            { label: 'Renewable Electricity', value: '100%', color: 'bg-green-500' },
                            { label: 'Recyclable Packaging', value: '85%', color: 'bg-lime-400' },
                            { label: 'Water Reduction', value: '45%', color: 'bg-emerald-600' }
                        ].map((stat, idx) => (
                            <div key={idx} className="relative">
                                <div className="flex justify-between mb-2">
                                    <span className="text-white font-black italic uppercase tracking-wider text-sm">{stat.label}</span>
                                    <span className="text-green-400 font-bold">{stat.value}</span>
                                </div>
                                <div className="h-4 w-full bg-white/10 skew-x-[-20deg] overflow-hidden border border-white/20">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        whileInView={{ width: stat.value }}
                                        transition={{ duration: 1.5, ease: "circOut" }}
                                        className={`h-full ${stat.color} skew-x-[20deg] origin-left`}
                                    ></motion.div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="px-12 py-4 border-2 border-green-500 text-green-500 font-black uppercase italic tracking-wider hover:bg-green-500 hover:text-black transition-all skew-x-[-10deg] mt-8 group">
                        <span className="block skew-x-[10deg] group-hover:translate-x-2 transition-transform">Read Full Report</span>
                    </button>
                </div>

                {/* Visual Side - Card Stack */}
                <div className="hidden lg:block relative h-[600px]">
                    <motion.div
                        className="absolute top-10 right-10 w-96 h-[500px] bg-gray-900 border border-green-500/50 p-2 transform skew-x-[-6deg]"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                    >
                        <div className="relative w-full h-full overflow-hidden bg-black group">
                            <img
                                src="https://images.pexels.com/photos/1072824/pexels-photo-1072824.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity grayscale group-hover:grayscale-0 duration-700"
                            />

                            {/* Overlay Text */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 backdrop-blur-sm">
                                <h3 className="text-4xl font-black italic uppercase text-white skew-x-[6deg] text-center border-4 border-white p-4">
                                    Regenerative<br /><span className="text-green-500">Agriculture</span>
                                </h3>
                            </div>
                        </div>

                        {/* Deco Elements */}
                        <div className="absolute -bottom-4 -left-4 w-20 h-2 bg-green-500 skew-x-[45deg]"></div>
                        <div className="absolute -top-4 -right-4 w-20 h-2 bg-green-500 skew-x-[45deg]"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
