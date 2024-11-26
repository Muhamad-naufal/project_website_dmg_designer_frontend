import FeatureCard from "@/components/FeatureCard";
import Tag from "@/components/Tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-florence-shaw.jpg";
import avatar3 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar4 from "@/assets/images/avatar-owen-garcia.jpg";
import Image from "next/image";
import Avatar from "@/components/Avatar";
import respon from "@/assets/images/respon.jpg";

const features = [
    "Revisi Langsung",
    "Komentar Langsung",
    "Konsultasi Langsung",
    "Langsung Jadi",
];

export default function Features() {
    return (
        <section className="py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Features</Tag>
                </div>
                <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">
                    Di sinilah{" "}
                    <span className="text-lime-400">Kreativitas</span> jadi{" "}
                    <span className="text-lime-400">Kenyataan.</span>
                </h2>
                <div className="mt-12 md:grid-cols-4 lg:grid-cols-3 grid grid-cols-1 gap-8">
                    <FeatureCard
                        title="Kolaborasi langsung"
                        description="Kerja bareng klien dan bisa langsung lihat
                                hasilnya"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="Avatar"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-indigo-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="Avatar"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 bg-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt="Avatar"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-transparent group-hover:border-green-500 transition">
                                <div className="relative size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                    <Image
                                        src={avatar4}
                                        alt="Avatar"
                                        className="absolute size-full rounded-full opacity-0 group-hover:opacity-100 transition"
                                    />
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Komunikasi yang Interaktif"
                        description="Berkomunikasi dengan klien dengan lebih
                                interaktif dan efisien"
                        className="md:col-span-2 lg:col-span-1 group"
                    >
                        <div className="aspect-video flex items-center justify-center">
                            <p className="text-4xl font-extrabold duration-500 group-hover:text-white/10 transition text-white/20 text-center">
                                Komunikasi{" "}
                                <span className="bg-gradient-to-r from-purple-400 relative to-pink-400 bg-clip-text text-transparent">
                                    <span>KUNCI</span>
                                    <video
                                        src="/gif-incredible.mp4"
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="absolute bottom-full duration-500 group-hover:opacity-100 transition left-1/2 -translate-x-1/2 rounded-2xl shadow-xl opacity-0 pointer-events-none"
                                    />
                                </span>{" "}
                                Semuanya
                            </p>
                        </div>
                    </FeatureCard>

                    <FeatureCard
                        title="Desain yang Responsif"
                        description="Desain yang responsif dan bisa diakses di semua perangkat"
                        className="md:col-span-2 md:col-start-2 lg:col-span-1 lg:col-start-auto transform transition duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        <div className="aspect-video flex items-center justify-center overflow-hidden group">
                            <Image
                                src={respon}
                                alt="Responsive Design"
                                className="transform transition duration-300 ease-in-out group-hover:scale-110 group-hover:brightness-110"
                            />
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            key={feature}
                            className="bg-neutral-900 group hover:scale-105 duration-500 transition border md:px-5 md:py-2 border-white/10 inline-flex px-3 py-1.5 rounded-2xl gap-3 items-center"
                        >
                            <span className="bg-lime-400 group-hover:rotate-45 transition duration-500 text-neutral-950 text-xl size-5 rounded-full inline-flex items-center justify-center">
                                &#10038;
                            </span>
                            <p className="font-medium md:text-lg">{feature}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
