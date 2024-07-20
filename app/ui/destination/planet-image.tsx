import Image from 'next/image'

export default function PlanetImage({src, alt}: {src: string, alt: string}){
    return (
        <>
            {/* Mobile Device's Image */}
            <Image 
                src={src}
                alt={alt}
                width={150}
                height={150}
                className="sm:hidden"
            />
            {/* Tablet Device's Image */}
            <Image 
                src={src}
                alt={alt}
                width={300}
                height={300}
                className="hidden sm:block lg:hidden"
            />
            {/* Desktop's Image */}
            <Image 
                src={src}
                alt={alt}
                width={480}
                height={480}
                className="hidden lg:block"
            />
            
        </>
    );
}