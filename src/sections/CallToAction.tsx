"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <section className="py-24 overflow-hidden">
            <motion.div
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className="flex whitespace-nowrap"
                animate={{
                    x: isHovered ? "0%" : "-100%",
                }}
                transition={{
                    ease: "linear",
                    duration: 30,
                    repeat: Infinity,
                }}
            >
                {/* Isi teks berganda untuk ilusi loop */}
                {Array.from({ length: 2 }).map((_, idx) => (
                    <div
                        key={idx}
                        className="flex flex-none pr-16 gap-16 text-7xl group cursor-pointer md:text-8xl font-medium"
                    >
                        {Array.from({ length: 10 }).map((_, i) => (
                            <div key={i} className="flex items-center gap-16">
                                <span className="text-lime-400 text-7xl">
                                    &#10038;
                                </span>
                                <span className="group-hover:text-lime-400">
                                    Chat Sekarang
                                </span>
                            </div>
                        ))}
                    </div>
                ))}
            </motion.div>
        </section>
    );
}
