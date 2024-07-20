"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { data } from "@/app/lib/data";

import TechImage from "../ui/technology/tech-image";
import LargePagination from "../ui/technology/large-pagination";

export default function Technology(){
    const dataArr = data["technology"];
    const [currentTech, setCurrentTech] = useState(0);

    return (
        <motion.div
            initial={{ filter: "brightness(0)", transform: "scale(1)" }}
            animate={{ filter: "brightness(1)", transform: "scale(1)" }}
            exit={{ filter: "brightness(0)", transform: "scale(0.95)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="min-h-screen bg-very-dark-navy bg-technology-bg-mobile bg-cover bg-left-top flex flex-col sm:bg-technology-bg-tablet lg:bg-technology-bg-desktop"
        >
            <div className="grow flex flex-col gap-10 pt-[128px] p-14 sm:pt-[174px] lg:pe-0 lg:pb-14 lg:px-28">
                {/* Space Launch 101 */}
                <div className="w-full flex justify-center gap-5 tracking-widest uppercase mobile-heading-xs sm:justify-start md:tablet-heading-xs lg:desktop-heading-xs">
                    <p className="font-bold text-white text-opacity-25">03</p>
                    <p className="text-white">Space Launch 101</p>
                </div>

                {/* Technology Information */}
                <div className="grow flex flex-col justify-center items-center gap-10 lg:justify-between lg:flex-row-reverse">
                    {/* Image Wrapper */}
                    <motion.div 
                        initial={{ filter: "brightness(0.5)"}}
                        animate={{ filter: "brightness(1)" }}
                        exit={{ filter: "brightness(0.5)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        key={dataArr[currentTech].name}
                    >
                        <TechImage 
                            srcMobile={dataArr[currentTech].images.landscape}
                            srcDesktop={dataArr[currentTech].images.portrait}
                            alt={dataArr[currentTech].name}
                        />
                    </motion.div>

                    {/* Large Pagination and Techonology Description Wrapper */}
                    <div className="flex flex-col text-center space-y-5 lg:flex-row lg:text-start lg:gap-10 lg:w-1/2 lg:justify-center">
                        <LargePagination currentPage={currentTech} totalPages={3} onPageChange={setCurrentTech}  />
                        <div className="max-w-[472px] space-y-5">
                            <p className="text-white text-opacity-50 uppercase mobile-heading-s sm:tablet-heading-s lg:desktop-heading-s">The Terminology</p>
                            <motion.div
                                initial={{ filter: "brightness(0.5)" }}
                                animate={{ filter: "brightness(1)" }}
                                exit={{ filter: "brightness(0.5)" }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                key={dataArr[currentTech].name}
                                className="space-y-5"
                            >
                                <p className="text-white uppercase mobile-heading-m sm:tablet-heading-m lg:desktop-heading-m">{dataArr[currentTech].name}</p>
                                <p className="text-light-blue mobile-body sm:tablet-body lg:desktop-body">{dataArr[currentTech].description}</p>
                            </motion.div>
                        </div>
                    </div>
                </div>


            </div>
        </motion.div>
    );
}