import Image from "next/image";

interface CrewImageProps {
    src: string;
    alt: string;
    width: number; 
    height: number;
}

export default function CrewImage({ src, alt, width, height }: CrewImageProps) {
    return (
        <div className="relative">
            <Image 
                src={src}
                alt={alt}
                width={width}
                height={height}
                priority={true}
                quality={100}
            />
            <div 
                className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-b from-transparent"
                style={{ backgroundImage: 'linear-gradient(to bottom, transparent, #0B0D17)' }}
            />
        </div>
            
    );

}