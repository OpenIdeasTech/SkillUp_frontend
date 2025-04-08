import Image from 'next/image';

interface CardProps {
    title: string;
    image: string;
}

export function CardProject({ title, image }: CardProps) {
    return (
        <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
            <div className="relative w-full h-40">
                <Image src={image} alt={title} layout="fill" objectFit="cover" />
            </div>
            <div className="p-4">
                <h3 className="font-semibold text-lg">{title}</h3>
            </div>
        </div>
    );
}