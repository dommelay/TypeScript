import React, {ReactNode} from 'react'

interface ButtonProps {
    onClick: () => void;
    input: string;
}
const Button: React.FC<ButtonProps> = ({input}) => {
    return (
        <button className='bg-blue-100'></button>
    )

}

export default Button;