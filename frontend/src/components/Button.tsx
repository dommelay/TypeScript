import React, {ReactNode} from 'react'

interface ButtonProps {
    onClick: () => void;
    children: ReactNode;
}
const Button: React.FC<ButtonProps> = ({onClick, children}) => {
    return (
        <button className='bg-blue-100'></button>
    )

}

export default Button;