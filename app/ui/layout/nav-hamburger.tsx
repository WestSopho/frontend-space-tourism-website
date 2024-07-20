import Image from 'next/image';

export default function NavHamburger({isOpen, setIsOpen}: {isOpen: boolean, setIsOpen: (isOpen: boolean) => void}){
    return (
        <div className='sm:hidden cursor-pointer' onClick={() => setIsOpen(true)}>
            <Image 
                src="/layout/icon-hamburger.svg"
                alt="hamburguer"
                width={24}
                height={21}
            />
        </div>
    );
}