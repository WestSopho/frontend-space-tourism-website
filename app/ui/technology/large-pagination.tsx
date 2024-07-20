import clsx from 'clsx';

interface LargePaginationProps {
    currentPage: number; 
    totalPages: number;
    onPageChange: (page: number) => void;
}

export default function LargePagination({currentPage, totalPages, onPageChange}: LargePaginationProps){
    const indexes = Array.from({length: totalPages}, (_, i) => i);

    return (
        <div className="flex justify-center gap-4 lg:gap-5 lg:flex-col">
            {
                indexes.map((index) => (
                    <button key={index} onClick={() => onPageChange(index)} className={
                        clsx(
                            "size-[56px] mobile-heading-s border-2 border-white border-opacity-15 rounded-full transition-all ease-[cubic-bezier(.61,.23,.76,.6)] lg:size-[80px] lg:desktop-heading-s",
                            {
                                "bg-white text-very-dark-navy": index === currentPage,
                                "text-white hover:border-opacity-100": index !== currentPage
                            } 
                        )
                    }>{index + 1}</button>
                ))
            }
        </div>
    );
}