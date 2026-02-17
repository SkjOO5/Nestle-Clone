import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function Hero() {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    // Staggered Text Animation
    const textVariants = {
        hidden: { y: 100, opacity: 0, skewY: 10 },
        visible: {
            y: 0,
            opacity: 1,
            skewY: 0,
            transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
        }
    };

    return (
        <section ref={ref} className="relative min-h-[100vh] flex items-center pt-20 overflow-hidden text-white bg-black">

            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0 scale-105">
                <img
                    src="https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?q=80&w=2574&auto=format&fit=crop"
                    alt="Dark Food Background"
                    className="w-full h-full object-cover opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-12 gap-12 items-center h-full">

                {/* Text Content - Taking up more space for impact */}
                <div className="lg:col-span-7 space-y-2">
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        transition={{ staggerChildren: 0.1 }}
                    >
                        <div className="overflow-hidden">
                            <motion.div variants={textVariants} className="text-amber-400 font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
                                <span className="w-8 h-[2px] bg-amber-400"></span>
                                Est. 1912 / India
                            </motion.div>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1 variants={textVariants} className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] text-white">
                                Good<span className="text-transparent text-stroke-white">Food</span>
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1 variants={textVariants} className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-[0.85] text-amber-500">
                                GoodLife
                            </motion.h1>
                        </div>
                    </motion.div>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8, duration: 1 }}
                        className="text-xl md:text-2xl text-gray-300 max-w-xl leading-relaxed font-light mt-8 border-l-4 border-amber-500 pl-6"
                    >
                        Fueling ambitions and nourishing lives across India. Experience the rush of flavor.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-wrap gap-6 pt-10"
                    >
                        <button
                            onClick={() => document.getElementById('brands').scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-4 bg-amber-500 text-black font-black uppercase italic tracking-wider hover:bg-white hover:text-black transition-all transform hover:-skew-x-12 skew-x-0 clip-path-slant"
                            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                        >
                            Explore Products
                        </button>

                        <button
                            onClick={() => document.getElementById('about-us').scrollIntoView({ behavior: 'smooth' })}
                            className="px-10 py-4 border border-white/30 text-white font-black uppercase italic tracking-wider hover:bg-white/10 transition-all transform hover:-skew-x-12 skew-x-0"
                            style={{ clipPath: 'polygon(10% 0, 100% 0, 90% 100%, 0% 100%)' }}
                        >
                            Our Story
                        </button>
                    </motion.div>
                </div>

                {/* Visual Content - Speed/Motion Style */}
                <div className="lg:col-span-5 relative h-[600px] hidden lg:block">
                    <motion.div
                        style={{ y }}
                        className="absolute inset-0"
                    >
                        {/* Main Cards Stacked with Slant */}
                        <div className="relative w-full h-full">
                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5, type: "spring" }}
                                className="absolute top-10 right-10 w-64 h-80 bg-gradient-to-br from-gray-900 to-black border border-white/10 transform -skew-x-6 hover:skew-x-0 transition-transform duration-500 z-20 group overflow-hidden"
                            >
                                <img src="https://images.pexels.com/photos/312418/pexels-photo-312418.jpeg?auto=compress&cs=tinysrgb&w=600" className="opacity-60 group-hover:opacity-100 transition-opacity duration-500 object-cover h-full w-full grayscale group-hover:grayscale-0" />
                                <div className="absolute bottom-4 left-4 font-black uppercase italic text-2xl text-white">Nescafé</div>
                            </motion.div>

                            <motion.div
                                initial={{ x: 100, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.7, type: "spring" }}
                                className="absolute top-40 right-40 w-64 h-80 bg-amber-600 transform -skew-x-6 hover:skew-x-0 transition-transform duration-500 z-10 border-4 border-black group overflow-hidden"
                            >
                                <img src="https://images.pexels.com/photos/65882/chocolate-dark-coffee-confiserie-65882.jpeg?auto=compress&cs=tinysrgb&w=600" className="object-cover h-full w-full mix-blend-multiply opacity-80 group-hover:opacity-100 transition-opacity" />
                                <div className="absolute bottom-4 left-4 font-black uppercase italic text-2xl text-black">KitKat</div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>

            </div>

            {/* Speed Lines / Scroll Indicator */}
            <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
                <motion.div style={{ scaleX: scrollYProgress }} className="h-full bg-amber-500 origin-left"></motion.div>
            </div>
        </section>
    );
}
