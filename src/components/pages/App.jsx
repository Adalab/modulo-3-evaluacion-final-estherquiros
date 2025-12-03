import { Routes, Route } from "react-router";
import { useState, useEffect } from "react";

import "../../styles/App.scss";
import Header from "../layout/Header";
import Footer from "../layout/Footer";
import HomePage from "./HomePage";
import CharacterDetail from "../CharacterDetail";

const getCharacters = () => {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((charactersResponse) => {
      setCharacters(charactersResponse);
    });
  }, []);

  return (
    <div>
      <Header />
      <main className="main">
        <Routes>
          <Route path="/" element={<HomePage characters={characters} />} />
          <Route
            path="/character/:id"
            element={<CharacterDetail characters={characters} />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
