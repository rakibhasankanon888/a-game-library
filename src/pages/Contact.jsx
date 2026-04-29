import React from 'react';

const Contact = () => {
    return (
        <section className="min-h-screen bg-[#d9d6e8] text-slate-900">
            {/* Hero Section */}
            <div
                className="h-[420px] bg-cover bg-center relative"
                style={{
                    backgroundImage:
                        "url('https://i.ibb.co.com/0jqjXs5W/game.jpg')",
                }}
            >
                <div className="absolute inset-0 bg-slate-900/30" />

                {/* Navbar */}
                <nav className="relative z-10 flex justify-between items-center px-10 py-6 text-white text-sm font-semibold">
                    <h1 className="text-3xl italic font-bold">GameHub</h1>
                    <div className="flex gap-10 uppercase tracking-wide">
                        <a href="/">Home</a>
                        <a href="/games">Games</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </div>
                </nav>

                {/* Hero Text */}
                <div className="relative z-10 flex items-center justify-center h-full text-center text-white px-4">
                    <h2 className="text-4xl md:text-5xl font-bold leading-tight max-w-2xl">
                        Hello.<br />
                        Let's work together<br />
                        on your next project.
                    </h2>
                </div>
            </div>

            {/* Contact Section */}
            <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 px-10 py-20">
                <div>
                    <p className="text-4xl mb-6">✉</p>
                    <h3 className="text-4xl font-semibold leading-tight mb-6">
                        For commissions<br />
                        and project inquiries,<br />
                        please email.
                    </h3>
                    <p className="text-xl font-semibold underline">hello@gamelibrary.com</p>
                    <p className="mt-2 text-sm">or Send a message via this form</p>
                </div>

                <form className="space-y-8">
                    <h3 className="text-3xl font-semibold mb-6">Contact</h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block mb-2 text-sm">First Name</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-slate-700 outline-none py-2"
                            />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm">Last Name</label>
                            <input
                                type="text"
                                className="w-full bg-transparent border-b border-slate-700 outline-none py-2"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block mb-2 text-sm">Email</label>
                        <input
                            type="email"
                            className="w-full bg-transparent border-b border-slate-700 outline-none py-2"
                        />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm">Write a message</label>
                        <textarea
                            rows="4"
                            className="w-full bg-transparent border-b border-slate-700 outline-none py-2 resize-none"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="px-10 py-3 rounded-full bg-slate-700 text-white hover:scale-105 transition duration-300"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </section>
    );
};

export default Contact;