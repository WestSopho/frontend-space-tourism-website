

export default function Sandbox({children}: {children: React.ReactNode}){
    return (
        <div className="w-full h-[555px] bg-very-dark-navy overflow-hidden flex justify-center items-center gap-5">
            {children}
        </div>
    );
}