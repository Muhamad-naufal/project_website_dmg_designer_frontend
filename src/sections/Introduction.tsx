import Tag from "@/components/Tag";

const text = `Kamu ingin bikin karya desain yang keren, tapi alat desain yang ribet malah bikin lambat dan butuh waktu lama buat dipelajari.`;

export default function Introduction() {
    return (
        <section className="py-28 lg:py-40">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Pengenalan</Tag>
                </div>
                <div className="text-4xl md:text-6xl lg:text-7xl text-center font-medium mt-10">
                    <span>Ubah Kreatifitasmu jadi Kenyataan. </span>
                    <span className="text-white/15">{text}</span>
                    <span className="text-lime-400 block">
                        Ubah Ide Keren Jadi Nyata
                    </span>
                </div>
            </div>
        </section>
    );
}
