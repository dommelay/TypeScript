import React from 'react'

const Buttons: React.FC = () => {

    return (
        <div className='flex justify-items-center flex-col'>
            <div>
                
                <button className='bg-grey text-6xl italic font-medium px-20 py-10 rounded-3xl w-550 h-200 border flex flex-row justify-items-center items-center'><img className='mr-25'src='/images/Star 1.png'></img>light mode</button>
            </div>
            <div>
                <img></img>
                <button>dark mode</button>
            </div>
            
        </div>
    )

}

export default Buttons;