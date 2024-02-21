import React from 'react';

//Interfaces
import { IButtonProps } from './interfaces/IButton';

const Button: React.FC<IButtonProps> = ({ onClick, children }) => {
    return (
    <button 
        className="bg-blue-500 hover:bg-blue-700 text-white font-light py-2 px-4 rounded ml-2" 
        onClick={onClick}
    >
        {children}
    </button>
    );
};

export default Button;
