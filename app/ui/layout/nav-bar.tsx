"use client";

import Logo from './logo';
import Line from './line';
import NavButton from './nav-button';
import NavHamburger from './nav-hamburger';
import NavHamburgerOffcanvasMenu from './nav-hamburger-offcanvas-menu';

import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation'

const navObjects = [
    {number: "00", text: 'Home', href: '/home'},
    {number: "01", text: 'Destination', href: '/destination'},
    {number: "02", text: 'Crew', href: '/crew'},
    {number: "03", text: 'Technology', href: '/technology'},
]

export default function NavBar(){
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState(0);
    const [isOffcanvasMenuOpen, setIsOffcanvasMenuOpen] = useState(false);

    useEffect(() => {
        navObjects.forEach((o, index) => {
            if (o.href === pathname) {
                setActiveSection(index);
            }
        });
    }, [pathname]);

    return (
        <nav className='w-full flex items-center absolute z-10 py-10 px-16 gap-6 sm:pe-0 sm:ps-10 lg:ps-16 lg:pe-0'>
            {/* Logo and Line */}
            <div className='relative flex items-center gap-x-24 grow'>
                <Logo setActiveSection={setActiveSection}/>
                <Line />
            </div>

            {/* Navbar Buttons Desktop */}
            <div className='hidden sm:bg-white sm:bg-opacity-5 sm:px-5 md:ps-24 sm:flex sm:justify-center sm:grow sm:gap-12 sm:backdrop-blur-3xl lg:grow-0 lg:pe-14 lg:ps-44'>
                {
                    navObjects.map((o, index) => {
                        return (
                            <NavButton key={index} number={o.number} text={o.text} href={o.href} isActive={index === activeSection} onClick={() => setActiveSection(index)}/>
                        );
                    })
                }
            </div>

            {/* Navbar Hamburguer Icon (Mobile) */}
            <NavHamburger isOpen={isOffcanvasMenuOpen} setIsOpen={setIsOffcanvasMenuOpen}/>

            {/* Navbar Hamburguer Offcanvas Menu */}
            <NavHamburgerOffcanvasMenu isOpen={isOffcanvasMenuOpen} setIsOpen={setIsOffcanvasMenuOpen} activeSection={activeSection} setActiveSection={setActiveSection}/>
        </nav>
    );
}