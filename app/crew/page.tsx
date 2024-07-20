"use client";
import { motion } from "framer-motion";
import { useState } from "react";
import { data } from "@/app/lib/data";

import CrewImage from "../ui/crew/crew-image";
import SmallPagination from "../ui/crew/small-pagination";

export default function Crew(){
    const dataArr = data["crew"];
    const [currentMember, setCurrentMember] = useState(0);

    return (
        <motion.div
            initial={{ filter: "brightness(0)", transform: "scale(1)" }}
            animate={{ filter: "brightness(1)", transform: "scale(1)" }}
            exit={{ filter: "brightness(0)", transform: "scale(0.95)" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="min-h-screen bg-very-dark-navy bg-crew-bg-mobile bg-cover bg-top bg-clip-border flex flex-col sm:bg-crew-bg-tablet lg:bg-crew-bg-desktop"
        >
            <div className="grow flex flex-col gap-10 pt-[128px] px-14 pb-14 sm:pb-0 sm:pt-[178px] lg:px-28">
                {/* Meet your crew text */}
                <div className="w-full flex justify-center gap-5 tracking-widest uppercase mobile-heading-xs sm:justify-start md:tablet-heading-xs lg:desktop-heading-xs">
                    <p className="font-bold text-white text-opacity-25">02</p>
                    <p className="text-white">Meet your crew</p>
                </div>

                {/* Crew Members Wrapper */}
                <div className="grow flex flex-col justify-center items-center gap-10 lg:flex-row lg:pb-14 lg:relative">
                    {/* Crew Information & Small Pagination Wrapper */}
                    <div className="space-y-10 lg:w-1/2">
                        {/* Motion Div for Crew Information */}
                        <motion.div
                            initial={{ filter: "brightness(0.5)" }}
                            animate={{ filter: "brightness(1)"}}
                            exit={{ filter: "brightness(0.5)"}}
                            transition={{ duration: 0.3, ease: "easeInOut" }}
                            key={dataArr[currentMember].name}
                        >
                            {/* Crew Information Wrapper*/}
                            <div className="text-center space-y-5 max-w-[512px] lg:text-start">
                                {/* Role and Name */}
                                <div className="uppercase">
                                    <p className="text-white text-opacity-50 mobile-heading-s sm:tablet-heading-s lg:desktop-heading-s">{dataArr[currentMember].role}</p>
                                    <p className="text-white leading-tight mobile-heading-m sm:tablet-heading-m lg:desktop-heading-m">{dataArr[currentMember].name}</p>
                                </div>
                                <p className="text-light-blue mobile-body sm:tablet-body lg:desktop-body">
                                    {dataArr[currentMember].bio}
                                </p>
                            </div>
                        </motion.div>

                        {/* Small Pagination */}
                        <SmallPagination currentPage={currentMember} totalPages={4} onPageChange={setCurrentMember} />
                    </div>

                    {/* Crew Image */}
                    <motion.div
                        initial={{ filter: "brightness(0.5)"}}
                        animate={{ filter: "brightness(1)" }}
                        exit={{ filter: "brightness(0.5)" }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        key={dataArr[currentMember].images.webp}
                        className="lg:w-1/2 flex justify-center"
                    >
                        <CrewImage src={dataArr[currentMember].images.webp} alt={dataArr[currentMember].name} width={dataArr[currentMember].images.width} height={dataArr[currentMember].images.height} />
                    </motion.div>

                </div>
            </div>
        </motion.div>
    );
}