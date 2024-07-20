"use client";

import Image from 'next/image';
import { useRouter } from 'next/navigation';

export default function Logo({setActiveSection}: {setActiveSection: (index: number) => void}) {
    const router = useRouter();

    return (
        <div className='size-[48px] rounded-full hover:cursor-pointer' onClick={()=> {router.push('/home'); setActiveSection(0)}}>
            <Image 
                src="/layout/logo.svg"
                alt="Logo"
                width={48}
                height={48}
            />
        </div>
    );
}