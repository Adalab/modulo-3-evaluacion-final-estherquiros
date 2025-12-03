import { useEffect, useState } from "react";

import CharacterList from "../CharacterList";

const getCharacters = () => {
  return fetch("https://hp-api.onrender.com/api/characters")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
};

function HomePage() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    getCharacters().then((charactersResponse) => {
      setCharacters(charactersResponse);
    });
  }, []);

  return (
    <section className="home-page">
      <CharacterList characters={characters} />
    </section>
  );
}
export default HomePage;
