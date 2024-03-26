import { useEffect, useState } from "react"
import Header from "./Components/Header"
import { ThemeContext } from "./Context/ThemeContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GameContext } from "./Context/GameContext";
import HomePage from "./Pages/HomePage";
import GamePage from "./Pages/GamePage";

function App() {
  const [theme, setTheme] = useState('light');
  const [game, setGame] = useState(null);

  useEffect(() => {
    setTheme(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className={`${theme} ${theme === "dark" ? "bg-[#121212]" : ""} transition-colors ease-in-out duration-300 max-h-screen`}>
        <BrowserRouter>
          <Header />
          <GameContext.Provider value={{ game, setGame }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/:gameId" element={<GamePage />} />
            </Routes>
          </GameContext.Provider>
        </BrowserRouter>
      </div>
    </ThemeContext.Provider>
  )
}

export default App
