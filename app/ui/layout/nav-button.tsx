import clsx from "clsx";

import {useRouter} from "next/navigation";
import { SetStateAction } from "react";

interface NavLinkProps{
    number: string;
    text: string;
    isActive: boolean;
    href: string;
    onClick: any;
}

export default function NavButton({number, text, isActive, href, onClick}: NavLinkProps){
    const router = useRouter();
    return (
        <button className="w-full flex items-stretch group sm:flex-col sm:w-fit sm:h-[96px]" onClick={() => {router.push(href); onClick()}}>
            {/* Text Wrapper */}
            <div className="grow flex desktop-nav-text text-white gap-3 sm:items-center">
                <p className="w-[18px] font-bold">{number}</p>
                <p className="uppercase">{text}</p>
            </div>
            {/* On Hover Element */}
            <div className={clsx(
                "w-[3px] h-auto sm:w-full sm:h-[3px]",
                {
                    "bg-white": isActive,
                    "transition-all ease-out duration-500 bg-white bg-opacity-0 group-hover:bg-opacity-50": !isActive
                }
            )}></div>
        </button>
    );
}