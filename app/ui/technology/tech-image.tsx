import Image from 'next/image';

interface TechImageProps {
    srcMobile: string; 
    srcDesktop: string;
    alt: string;
}

export default function TechImage({ srcMobile, srcDesktop, alt }: TechImageProps){
    return (
        <div className='w-screen -mx-14 lg:mx-0 lg:w-auto'>
            <Image
                src={srcMobile}
                alt={alt}
                width={768}
                height={310}
                className="w-full lg:hidden object-cover"
            />
            <Image 
                src={srcDesktop}
                alt={alt}
                width={515}
                height={527}
                className="hidden lg:block"
            />
        </div>
    );
}