import Tab from './tab';

const planets = [
    "Moon", 
    "Mars",
    "Europa", 
    "Titan"
]

interface DestinationTabs{
    activeTab: number;
    onTabChange: (tab: number) => void;

}

export default function DestinationTabs({activeTab, onTabChange}: DestinationTabs){
    return (
        <div className='w-full flex justify-center gap-5 lg:justify-start'>
            {
                planets.map((planet, idx) => {
                    if (idx == activeTab){
                        return <Tab key={idx} text={planet} isActive={true} onClick={() => onTabChange(idx)}/>
                    }
                    else{
                        return <Tab key={idx} text={planet} isActive={false} onClick={() => onTabChange(idx)}/>
                    }
                })
            }
        </div>
    );
}