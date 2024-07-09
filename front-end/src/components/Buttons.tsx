import React from 'react'
import { useTheme } from './ThemeContext';
const Buttons: React.FC = () => {

    const {setLight, setDark} = useTheme();

    const hanldelightClick = () => {
        setLight();
    };

    const handleDarkClick = () => {
        setDark();
    };

    return (
        <div className='flex justify-items-center flex-col'>
            <div>
                
                <button className='bg-grey text-6xl italic font-medium px-20 py-10 rounded-3xl w-550 h-200 border flex flex-row justify-items-center items-center'><img className='mr-25'src='/images/Star 1.png' onClick = {hanldelightClick}></img>light mode</button>
            </div>
            <div>
                
                <button className='bg-grey text-6xl italic font-medium px-20 py-10 rounded-3xl w-550 h-200 border flex flex-row justify-items-center items-center' onClick={handleDarkClick}><img className='mr-25'src='/images/Ellipse 1.png'></img>dark mode</button>
            </div>
            
        </div>
    )

}

export default Buttons;