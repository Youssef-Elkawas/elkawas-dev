const THEME_KEY = 'theme';

export function getStoredTheme() {
  const stored = localStorage.getItem(THEME_KEY);
  return stored === 'light' ? 'light' : 'dark';
}

export function setStoredTheme(theme) {
  localStorage.setItem(THEME_KEY, theme);
}

export function applyTheme(theme) {
  if (theme === 'light') {
    document.documentElement.classList.add('light-mode');
  } else {
    document.documentElement.classList.remove('light-mode');
  }
}

export function getThemeIcon(theme) {
  return theme === 'light' ? '☀️' : '🌙';
}

export function toggleThemeValue(theme) {
  return theme === 'light' ? 'dark' : 'light';
}
