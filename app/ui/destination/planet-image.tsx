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
                priority={true}
                className="sm:hidden"
            />
            {/* Tablet Device's Image */}
            <Image 
                src={src}
                alt={alt}
                width={300}
                height={300}
                priority={true}
                className="hidden sm:block lg:hidden"
            />
            {/* Desktop's Image */}
            <Image 
                src={src}
                alt={alt}
                width={480}
                height={480}
                priority={true}
                className="hidden lg:block"
            />
            
        </>
    );
}