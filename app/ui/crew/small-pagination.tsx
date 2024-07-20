import clsx from "clsx";

interface SmallPaginationProps {
    currentPage: number; 
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function SmallPagination({currentPage, totalPages, onPageChange}: SmallPaginationProps){
    const indexes = Array.from({length: totalPages}, (_, i) => i);

    return (
        <div className="flex justify-center gap-4 lg:gap-10 lg:justify-start lg:absolute lg:top-[80%]">
            {
                indexes.map((index) => (
                    <button key={index} onClick={() => onPageChange(index)} className={
                        clsx(
                            "size-[10px] bg-white rounded-full border-white transition-all lg:size-[15px]",
                            {
                                "bg-opacity-100": index === currentPage,
                                "bg-opacity-50 hover:bg-opacity-75": index !== currentPage
                            }
                        )
                    }></button>
                ))
            }
        </div>
    );
}