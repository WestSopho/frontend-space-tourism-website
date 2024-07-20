"use client";
import { useRouter } from 'next/navigation';

export default function DisplayButton(){
    const router = useRouter();
    return (
        <div className='flex justify-center items-center w-full h-[320px] sm:h-[448px] lg:w-[272px] lg:h-auto'>
            <button className="size-[144px] transition-all ease-linear rounded-full bg-white ring-white ring-[88px] ring-opacity-0 hover:ring-opacity-10 sm:size-[272px]" onClick={() => {router.push('/destination')}}>
                <p className="mobile-heading-s text-very-dark-navy uppercase sm:desktop-heading-s">Explore</p>
            </button>
        </div>
    );
}