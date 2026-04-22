import React from 'react';

const About = () => {
    return (
        <section className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6 py-20">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-14">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        About Game Library
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-300 leading-9 max-w-4xl mx-auto">
                        Welcome to <span className="font-semibold text-white">Game Library</span> — your ultimate destination for
                        discovering exciting games, exploring detailed reviews, and finding your next favorite adventure.
                        We aim to make gaming discovery simple, enjoyable, and visually engaging for every player.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-12">
                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
                        <h2 className="text-3xl font-semibold mb-4">🎮 Our Mission</h2>
                        <p className="text-slate-300 text-lg leading-8">
                            Our mission is to build a modern and user-friendly platform where gamers can easily browse,
                            search, and explore different game collections from multiple genres.
                        </p>
                    </div>

                    <div className="bg-white/10 backdrop-blur-md rounded-3xl p-8 shadow-xl hover:scale-105 transition duration-300">
                        <h2 className="text-3xl font-semibold mb-4">🚀 What We Offer</h2>
                        <p className="text-slate-300 text-lg leading-8">
                            We provide a clean and organized library of games with detailed descriptions, ratings,
                            categories, and recommendations to help users discover games they truly enjoy.
                        </p>
                    </div>
                </div>

                <div className="bg-white/10 backdrop-blur-md rounded-3xl p-10 shadow-xl text-center">
                    <h2 className="text-3xl font-semibold mb-4">🌟 Why Choose Us?</h2>
                    <p className="text-slate-300 text-lg leading-8 max-w-3xl mx-auto">
                        Game Library is designed for gamers who love exploring new experiences. With a smooth design,
                        responsive layout, and easy navigation, we make your gaming journey more exciting and enjoyable.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default About;