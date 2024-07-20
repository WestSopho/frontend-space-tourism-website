"use client";

import { motion } from 'framer-motion';
import DisplayButton from '../ui/home/display-button';

export default function Home(){
    return (
        <motion.div
            initial={{ filter: "brightness(0)"}}
            animate={{ filter: "brightness(1)"}}
            exit={{ filter: "brightness(0)"}}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="min-h-screen bg-very-dark-navy bg-home-bg-mobile bg-cover bg-bottom flex justify-center items-center sm:bg-home-bg-tablet lg:bg-home-bg-desktop lg:justify-normal lg:items-end"
        >
            <div className='p-5 mt-[128px] sm:mt-[178px] lg:w-full lg:flex lg:justify-between lg:px-36 lg:py-24'>
                {/* Title and Description */}
                <div className='flex flex-col text-center max-w-[540px] lg:text-left'>   
                    <p className='mobile-heading-xs text-light-blue uppercase sm:desktop-heading-xs'>So, you want to travel to</p>
                    <p className='mobile-heading-xl text-white uppercase sm:desktop-heading-xl'>Space</p>
                    <p className='mobile-body text-light-blue leading-loose sm:tablet-body lg:desktop-body'>Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
                </div>
                {/* Display Button */}
                <DisplayButton />
            </div>
        </motion.div>
    );
}