import { NavLink } from 'react-router-dom';
import { useTheme } from '../../context/ThemeContext';
import './Navbar.css';

const navItems = [
  { to: '/', label: 'Home', end: true },
  { to: '/about', label: 'About' },
  { to: '/projects', label: 'Projects' },
  { to: '/blog', label: 'Blog' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const { toggleTheme, themeIcon } = useTheme();

  return (
    <header className="header">
      <div className="container">
        <nav className="navbar">
          <NavLink to="/" className="logo">
            Elkawas.<span>Dev</span>
          </NavLink>

          <ul className="nav-links">
            {navItems.map(({ to, label, end }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={end}
                  className={({ isActive }) =>
                    isActive ? 'active-link' : undefined
                  }
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="theme-btn"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            <span className="theme-icon">{themeIcon}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
