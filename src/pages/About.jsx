import React from "react";
import { motion } from "framer-motion";

const About = () => {
    return (
        <section className="relative min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-black text-white px-6 py-20 overflow-hidden">

            {/* Background Glow */}
            <div className="absolute top-10 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-10 right-10 w-72 h-72 bg-red-500/20 rounded-full blur-3xl"></div>

            <div className="relative max-w-6xl mx-auto">

                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-red-500 bg-clip-text text-transparent">
                        About Game Library 🎮
                    </h1>
                    <p className="text-lg md:text-xl text-slate-300 leading-9 max-w-4xl mx-auto">
                        Welcome to <span className="font-semibold text-white">Game Library</span> — your ultimate destination for
                        discovering exciting games, exploring detailed reviews, and finding your next favorite adventure.
                        We make gaming discovery simple, enjoyable, and visually engaging for every player.
                    </p>
                </motion.div>

                {/* Cards */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
                    >
                        <h2 className="text-3xl font-semibold mb-4">🎯 Our Mission</h2>
                        <p className="text-slate-300 text-lg leading-8">
                            Our mission is to build a modern and gamer-friendly platform where users can easily browse,
                            search, and explore games from multiple genres.
                        </p>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.05 }}
                        className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-2xl"
                    >
                        <h2 className="text-3xl font-semibold mb-4">🚀 What We Offer</h2>
                        <p className="text-slate-300 text-lg leading-8">
                            We provide detailed game descriptions, ratings, categories, and personalized recommendations
                            to help gamers discover their next favorite game.
                        </p>
                    </motion.div>
                </div>

                {/* Bottom Card */}
                <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/10 border border-white/10 backdrop-blur-xl rounded-3xl p-10 shadow-2xl text-center"
                >
                    <h2 className="text-3xl font-semibold mb-4">🌟 Why Choose Us?</h2>
                    <p className="text-slate-300 text-lg leading-8 max-w-3xl mx-auto">
                        Game Library is crafted for gamers who love exploring new adventures.
                        With smooth navigation, responsive design, and a premium interface,
                        your gaming journey becomes more exciting and immersive.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;