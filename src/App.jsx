import React from 'react';
import useTheme from './hooks/useTheme.jsx';

const appStyles = {
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontFamily: 'system-ui, sans-serif',
};

const buttonStyles = {
  marginTop: 32,
  padding: '12px 24px',
  fontSize: 18,
  borderRadius: 6,
  border: 'none',
  cursor: 'pointer',
  background: '#048',
  color: '#fff',
  transition: 'background 0.2s',
};

function themeLabel(theme) {
  return theme === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode';
}

export default function App() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div style={appStyles}>
      <h1>Persistent Theme Toggle Demo</h1>
      <p>The current theme is <strong>{themeLabel(theme)}</strong>.</p>
      <button
        aria-label="Toggle theme"
        style={buttonStyles}
        onClick={toggleTheme}
      >
        Switch to {theme === 'dark' ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}
