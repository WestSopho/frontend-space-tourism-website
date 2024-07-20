import { Drawer } from "flowbite-react";
import Image from 'next/image';
import NavButton from "./nav-button";

const navObjects = [
    {number: "00", text: 'Home', href: '/home'},
    {number: "01", text: 'Destination', href: '/destination'},
    {number: "02", text: 'Crew', href: '/crew'},
    {number: "03", text: 'Technology', href: '/technology'},
]

interface NavHamburgerOffcanvasMenuProps{
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    activeSection: number;
    setActiveSection: (activeSection: number) => void;
}

export default function NavHamburgerOffcanvasMenu({isOpen, setIsOpen, activeSection, setActiveSection}: NavHamburgerOffcanvasMenuProps){
    const handleClose = () => {setIsOpen(false)};
    return (
        <Drawer open={isOpen} onClose={handleClose} className="bg-white w-[254px] bg-opacity-5 backdrop-blur-lg" position="right" backdrop={false}>
            <div className="p-5 flex justify-end">
                <button onClick={() => handleClose()}>
                    <Image 
                        src="/layout/icon-close.svg"
                        alt="close"
                        width={24}
                        height={21}
                    />
                </button>
            </div>
            <div className="flex flex-col gap-5 py-16">
                {
                navObjects.map((o, index) => {
                    return (
                        <NavButton key={index} number={o.number} text={o.text} href={o.href} isActive={index === activeSection} onClick={() => {setActiveSection(index); handleClose();}}/>
                    );
                })
                }
            </div>
        </Drawer>
    );
}