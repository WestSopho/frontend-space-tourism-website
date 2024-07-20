import clsx from "clsx";

interface Tab { 
    text: string;
    isActive: boolean;
    onClick: () => void;
}

export default function Tab({text, isActive, onClick}: Tab){
    return (
        <div className="w-fit group cursor-pointer" onClick={onClick}>
            <p className={clsx(
                "desktop-nav-text group-hover:text-white uppercase", 
                {
                    "text-light-blue": !isActive,
                    "text-white": isActive,
                }
            )}>{text}</p>
            <div className={clsx(
            "w-full mt-1  h-[3px]",
            {
                "bg-white": isActive,
                "transition-all ease-[cubic-bezier(.24,.82,.67,.87)] duration-500 group-hover:bg-white group-hover:opacity-60": !isActive
            }
            )}></div>
        </div>
    )
}