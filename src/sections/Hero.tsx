import Image from "next/image";
import Button from "../components/Button";
import design1 from "@/assets/images/design-example-1.png";
import design2 from "@/assets/images/design-example-2.png";
import { Pointer } from "@/components/Pointer";

export default function Hero() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container relative">
                <div className="absolute -left-32 top-16 hidden lg:block">
                    <Image src={design1} alt="Design Example 1" />
                </div>
                <div className="absolute -right-64 -top-16 hidden lg:block">
                    <Image src={design2} alt="Design Example 1" />
                </div>
                <div className="absolute left-56 top-96 hidden lg:block">
                    <Pointer name="Kamu" />
                </div>
                <div className="absolute right-80 -top-4 hidden lg:block">
                    <Pointer name="Bestie" color="red" />
                </div>
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
                    biasa, persis seperti yang kamu mau. Kami siap bantu bikin
                    karya yang keren dan pastinya sesuai dengan keinginanmu!
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
    );
}
