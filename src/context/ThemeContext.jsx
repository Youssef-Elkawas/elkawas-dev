import { createContext, useContext, useState } from 'react';
import {
  applyTheme,
  getStoredTheme,
  getThemeIcon,
  setStoredTheme,
  toggleThemeValue,
} from '../utils/theme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getStoredTheme);

  const toggleTheme = () => {
    setTheme((current) => {
      const next = toggleThemeValue(current);
      applyTheme(next);
      setStoredTheme(next);
      return next;
    });
  };

  const themeIcon = getThemeIcon(theme);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, themeIcon }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }

  return context;
}
