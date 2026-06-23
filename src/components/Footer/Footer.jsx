import { useState, useEffect } from 'react';
import { getStoredTheme } from '../../utils/theme';
import './Footer.css';

export default function Footer() {
  const [theme, setTheme] = useState(getStoredTheme());

  useEffect(() => {
    const handleThemeChange = () => {
      setTheme(getStoredTheme());
    };

    const interval = setInterval(handleThemeChange, 100);
    return () => clearInterval(interval);
  }, []);

  const footerThemeClass = theme === 'light' ? 'footer-light' : 'footer-dark';

  return (
    <footer className={`footer ${footerThemeClass}`}>
      <div className="container footer-container">
        <p className="footer-text">
          Youssef Elkawas — Elkawas.<span className="dev">Dev</span> © 2026
        </p>
      </div>
    </footer>
  );
}
