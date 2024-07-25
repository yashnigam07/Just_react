import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState("olive");
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark-mode', !darkMode);
  };

  return (
    <div className={`w-full h-screen duration-200 ${darkMode ? 'dark' : ''}`} style={{ backgroundColor: color }}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white/20 px-3 py-2 rounded-3xl backdrop-blur-lg glassmorphism">
          <button className="dark-mode-toggle" onClick={toggleDarkMode}>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)" }}
            onClick={() => setColor("#f6d365")}
          >
            Red
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #a1c4fd 0%, #c2e9fb 100%)" }}
            onClick={() => setColor("#a1c4fd")}
          >
            Blue
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #d4fc79 0%, #96e6a1 100%)" }}
            onClick={() => setColor("#d4fc79")}
          >
            Green
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)" }}
            onClick={() => setColor("#c3cfe2")}
          >
            Purple
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)" }}
            onClick={() => setColor("#fbc2eb")}
          >
            Orange
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" }}
            onClick={() => setColor("#ffecd2")}
          >
            Lavender
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #feada6 100%)" }}
            onClick={() => setColor("#ff9a9e")}
          >
            Peach
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)" }}
            onClick={() => setColor("#f6d365")}
          >
            Mint
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)" }}
            onClick={() => setColor("#c3cfe2")}
          >
            Sky Blue
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #feada6 100%)" }}
            onClick={() => setColor("#ff9a9e")}
          >
            Blush
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)" }}
            onClick={() => setColor("#ffecd2")}
          >
            Coral
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #ff9a9e 0%, #fecfef 99%, #feada6 100%)" }}
            onClick={() => setColor("#ff9a9e")}
          >
            Lemon
          </button>
          <button
            className="button"
            style={{ backgroundImage: "linear-gradient(135deg, #c3cfe2 0%, #c3cfe2 100%)" }}
            onClick={() => setColor("#c3cfe2")}
          >
            Turquoise
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
