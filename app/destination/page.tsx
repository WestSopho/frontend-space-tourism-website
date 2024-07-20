"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

import { data } from "@/app/lib/data"
import DestinationTabs from "../ui/destination/destination-tabs";
import PlanetImage from "../ui/destination/planet-image";

export default function Destination(){
    const dataArr = data["destinations"];
    const [currentPlanet, setCurrentPlanet] = useState(0);

    return (
        <motion.div
            initial={{ filter: "brightness(0)" }}
            animate={{ filter: "brightness(1)" }}
            exit={{ filter: "brightness(0)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="min-h-screen bg-very-dark-navy bg-destination-bg-mobile bg-cover bg-bottom flex flex-col sm:bg-destination-bg-tablet lg:bg-destination-bg-desktop"
        >
            <div className="grow flex flex-col py-[128px] space-y-10 px-14 sm:py-[178px] lg:px-28">
                {/* Pick your Destination Text */}
                <div className="w-full flex justify-center gap-5 tracking-widest uppercase mobile-heading-xs sm:justify-start md:tablet-heading-xs lg:desktop-heading-xs">
                    <p className="font-bold text-white text-opacity-25">01</p>
                    <p className="text-white">Pick your destination</p>
                </div>

                {/* Image and Description Wrapper */}
                <div className="grow flex flex-col justify-center items-center gap-7 sm:gap-20 lg:flex-row lg:justify-between lg:gap-x-10 lg:gap-y-7 lg:p-1">
                    {/* Planet Image */}
                    <motion.div
                        initial={{ filter: "brightness(0.5)" }}
                        animate={{ filter: "brightness(1)" }}
                        exit={{ filter: "brightness(0.5)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        key={"motion-div" + dataArr[currentPlanet].name}
                        className="lg:w-1/2 lg:flex lg:justify-center"
                    >
                        <PlanetImage src={dataArr[currentPlanet].images.webp} alt={dataArr[currentPlanet].name} />
                    </motion.div>

                    {/* Detailed Description Wrapper */}
                    <div className="flex flex-col justify-center gap-2 lg:items-start lg:w-1/2">
                        {/* Destination Tabs */}
                        <DestinationTabs activeTab={currentPlanet} onTabChange={setCurrentPlanet}/>

                        <motion.div
                            initial={{ filter: "brightness(0.8)" }}
                            animate={{ filter: "brightness(1)" }}
                            exit={{ filter: "brightness(0.8)" }}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            key={"motion-div" + dataArr[currentPlanet].name}
                            className="flex flex-col items-center gap-5 lg:items-start"
                        >

                            <p className="text-white mobile-heading-l uppercase sm:tablet-heading-l lg:desktop-heading-l">{dataArr[currentPlanet].name}</p>

                            <p className="max-w-[327px] text-light-blue mobile-body text-center sm:max-w-[514px] sm:tablet-body lg:desktop-body lg:text-start">{dataArr[currentPlanet].description}</p>

                            <hr className="w-full border-[#979797] h-1"/>

                            <div className="w-full grid grid-rows-2 grid-cols-1 gap-5 text-white uppercase sm:grid-rows-1 sm:grid-cols-2">

                                {/* Average Distance */}
                                <div className="flex flex-col items-center lg:items-start">
                                    <p className="text-light-blue desktop-subheading-s">Avg. Distance</p>
                                    <p className="desktop-subheading-l">{dataArr[currentPlanet].distance}</p>
                                </div>

                                {/* Estimated Time Travel */}
                                <div className="flex flex-col items-center lg:items-start">
                                    <p className="text-light-blue desktop-subheading-s">Est. Travel Time</p>
                                    <p className="desktop-subheading-l">{dataArr[currentPlanet].travel}</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div> 
        </motion.div>
    );
}