export default function ThemeToggle({ darkMode, setDarkMode }) {
  return (
    <div className="theme-toggle">
      <button onClick={()=>setDarkMode(!darkMode)}>
        {darkMode ? '🌞 Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
  );
}
