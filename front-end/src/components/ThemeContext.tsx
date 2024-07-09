import React, {createContext, useContext, useState, ReactNode} from 'react';

type ThemeContextType = {
    color: string;
    setLight: () => void;
    setDark: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('error')
    }
    return context;
};

export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [color, setColor] = useState('bg-light');
  
    const setLight = () => {
        setColor('bg-light');
    };

    const setDark = () => {
        setColor('bg-dark');
    };

    return (
        <ThemeContext.Provider value={{ color, setLight, setDark }}>
            <div className={color}>{children}</div>
        </ThemeContext.Provider>
    );
};