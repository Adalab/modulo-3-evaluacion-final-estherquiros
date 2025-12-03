import { useEffect, useState } from "react";

import CharacterList from "../CharacterList";
import Filters from "../Filters";

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
  const [charactersFiltered, setCharactersFiltered] = useState([]);

  const handleSearchCharacters = (ev) => {
    ev.preventDefault();
    const nameSearch = ev.target.value;

    const filteredResults = characters.filter((character) => {
      return character.name.toLowerCase().includes(nameSearch.toLowerCase());
    });

    setCharactersFiltered(filteredResults);
  };

  useEffect(() => {
    getCharacters().then((charactersResponse) => {
      setCharacters(charactersResponse);
      setCharactersFiltered(charactersResponse);
    });
  }, []);

  return (
    <section className="home-page">
      <Filters handleInput={handleSearchCharacters} />
      <CharacterList characters={charactersFiltered} />
    </section>
  );
}
export default HomePage;
