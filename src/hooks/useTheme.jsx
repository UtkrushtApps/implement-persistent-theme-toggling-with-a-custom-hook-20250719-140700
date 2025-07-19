import { useEffect, useState, useCallback } from 'react';

const THEME_KEY = 'theme';
const LIGHT = 'light';
const DARK = 'dark';

function getSystemPreference() {
  if (typeof window === 'undefined' || !window.matchMedia) {
    return LIGHT;
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
}

function getInitialTheme() {
  try {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored === LIGHT || stored === DARK) {
      return stored;
    }
  } catch {}
  return getSystemPreference();
}

export default function useTheme() {
  const [theme, setTheme] = useState(getInitialTheme);

  // Apply to document.body and persist
  useEffect(() => {
    document.body.dataset.theme = theme;
    try {
      localStorage.setItem(THEME_KEY, theme);
    } catch {}
  }, [theme]);

  // Update on system changes if nothing stored, one-time effect
  useEffect(() => {
    if (localStorage.getItem(THEME_KEY)) return;
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = (e) => {
      setTheme(e.matches ? DARK : LIGHT);
    };
    mql.addEventListener('change', handler);
    return () => mql.removeEventListener('change', handler);
  }, []);

  const toggleTheme = useCallback(() => {
    setTheme((prev) => (prev === LIGHT ? DARK : LIGHT));
  }, []);

  return { theme, toggleTheme };
}
