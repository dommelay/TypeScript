import React, {createContext, useContext, useState, ReactNode} from 'react';

type ThemeContextType = {
    backgroundColor: string;
    toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
    const context = useContext(ThemeContext);
    if (!context) {
        throw new Error('error')
    }
    return context;
}

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [isLightTheme, setIsLightTheme] = useState(true);
  
    const toggleTheme = () => {
      setIsLightTheme((prevIsLightTheme) => !prevIsLightTheme);
    };

    // const backgroundColor = isLightTheme ? 'bg-slate-'
}