"use client";

import Image from "next/image";
import Button from "@/components/Button";
import { useState } from "react";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "Fitur", href: "#features" },
    { label: "Integrasi", href: "#integrations" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <section className="py-4 lg:py-8 sticky top-0 z-50">
            <div className="container max-w-5xl">
                <div className="grid grid-cols-2 border lg:grid-cols-3 bg-neutral-950/70 backdrop-blur border-white/15 rounded-full px-4 md:pr-2 items-center">
                    <div>
                        <Image
                            src="/logo_tulisan.png"
                            alt="Logo"
                            className="h-9 w-auto md:h-auto"
                            width={120}
                            height={36}
                        />
                    </div>
                    <div className="lg:flex justify-center items-center hidden">
                        <nav className="flex gap-6 font-medium">
                            {navLinks.map((link) => (
                                <a
                                    href={link.href}
                                    key={link.label}
                                    className="text-sm font-medium text-gray-600 hover:text-gray-900"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                    <div className="flex justify-end gap-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu md:hidden"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                        <Button
                            variant="secondary"
                            className="hidden md:inline-flex items-center"
                        >
                            Masuk
                        </Button>
                        <Button
                            variant="primary"
                            className="hidden md:inline-flex items-center"
                        >
                            Daftar
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
