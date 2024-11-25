"use client";

import Tag from "@/components/Tag";
import { useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { twMerge } from "tailwind-merge";

const text = `Kamu ingin bikin karya desain yang keren, tapi alat desain yang ribet malah bikin lambat dan butuh waktu lama buat dipelajari.`;
const words = text.split(" ");

export default function Introduction() {
    const scrollTarget = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: scrollTarget,
        offset: ["start end", "end end"],
    });

    const [currentWord, setCurrentWord] = useState(0);

    const wordIndexTransform = useTransform(
        scrollYProgress,
        [0, 1],
        [0, words.length]
    );

    useEffect(() => {
        wordIndexTransform.on("change", (latest) => {
            setCurrentWord(latest); // Pastikan nilai integer
        });
    }, [wordIndexTransform]);

    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="sticky top-20 md:top-28 lg:top-40">
                    <div className="flex justify-center">
                        <Tag>Pengenalan</Tag>
                    </div>
                    <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                        <span>Ubah Kreatifitasmu jadi Kenyataan. </span>
                        <span className="">
                            {words.map((word, index) => (
                                <span
                                    key={index}
                                    className={twMerge(
                                        "transition duration-500 text-white/15",
                                        index < currentWord && "text-white"
                                    )}
                                >
                                    {word}
                                    {index !== words.length - 1 && " "}
                                </span>
                            ))}
                        </span>
                        <span className="text-lime-400 block">
                            Ubah Ide Keren Jadi Nyata
                        </span>
                    </div>
                </div>
                <div className="h-[150px]" ref={scrollTarget}></div>
            </div>
        </section>
    );
}
