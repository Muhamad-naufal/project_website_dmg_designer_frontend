"use client";

import Image from "next/image";
import Button from "../components/Button";
import design1 from "@/assets/images/design-example-1.png";
import design2 from "@/assets/images/design-example-2.png";
import { Pointer } from "@/components/Pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorToImage from "@/assets/images/cursor-you.svg";

export default function Hero() {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();
    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { x: 0, y: [0, 16, 9] },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { y: 0, x: 175 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { y: [0, 20, 0], x: 0 },
                { duration: 0.5 },
            ],
        ]);
    }, []);
    return (
        <>
            <section
                className="py-24 overflow-x-clip"
                style={{
                    cursor: `url(${cursorToImage.src}), auto`,
                }}
            >
                <div className="container relative">
                    <motion.div
                        ref={leftDesignScope}
                        initial={{ opacity: 0, x: -100, y: 100 }}
                        drag
                        className="absolute -left-32 top-16 hidden lg:block"
                    >
                        <Image
                            src={design1}
                            alt="Design Example 1"
                            draggable="false"
                        />
                    </motion.div>
                    <motion.div
                        ref={leftPointerScope}
                        initial={{ opacity: 0, x: -200, y: 100 }}
                        className="absolute left-56 top-96 hidden lg:block"
                    >
                        <Pointer name="Kamu" />
                    </motion.div>
                    <motion.div
                        ref={rightDesignScope}
                        initial={{ opacity: 0, x: 50, y: 50 }}
                        drag
                        className="absolute -right-64 -top-16 hidden lg:block"
                    >
                        <Image
                            src={design2}
                            alt="Design Example 1"
                            draggable="false"
                        />
                    </motion.div>
                    <motion.div
                        ref={rightPointerScope}
                        initial={{ opacity: 0, x: 225, y: 50 }}
                        className="absolute right-80 -top-4 hidden lg:block"
                    >
                        <Pointer name="Bestie" color="red" />
                    </motion.div>
                    <div className="flex justify-center">
                        <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
                            Udah Banyak yang Jadi
                        </div>
                    </div>
                    <h1 className="text-6xl md:text-7xl lg:text-8xl font-medium text-center mt-6">
                        Karya Keren, <br /> Sosok Auto Beken
                    </h1>
                    <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
                        Pakai jasa kami, dan kamu bakal dapetin karya yang luar
                        biasa, persis seperti yang kamu mau. Kami siap bantu
                        bikin karya yang keren dan pastinya sesuai dengan
                        keinginanmu!
                    </p>
                    <form className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto">
                        <input
                            type="email"
                            placeholder="Email Kamu"
                            className="bg-transparent px-4 md:flex-1 w-full"
                        />
                        <Button
                            variant="primary"
                            type="submit"
                            className="whitespace-nowrap"
                            size="sm"
                        >
                            Daftar
                        </Button>
                    </form>
                </div>
            </section>
            <div className="pb-[86-px] md:pb-[98px] lg:px-[130px]"></div>
        </>
    );
}
