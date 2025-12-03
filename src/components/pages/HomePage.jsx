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
  const [filters, setFilters] = useState({ name: "", house: "" });
  const [charactersFiltered, setCharactersFiltered] = useState([]);

  const handleSearchCharacters = (ev) => {
    ev.preventDefault();
    const nameSearch = ev.target.value;

    setFilters({
      ...filters,
      name: nameSearch,
    });
  };

  const handleSelectHouse = (ev) => {
    ev.preventDefault();
    const selectedHouse = ev.target.value;

    setFilters({
      ...filters,
      house: selectedHouse,
    });
  };

  useEffect(() => {
    getCharacters().then((charactersResponse) => {
      setCharacters(charactersResponse);
      setCharactersFiltered(charactersResponse);
    });
  }, []);

  useEffect(() => {
    const filteredResults = characters
      .filter((character) => {
        return character.name
          .toLowerCase()
          .includes(filters.name.toLowerCase());
      })
      .filter((character) => {
        return character.house
          .toLowerCase()
          .includes(filters.house.toLowerCase());
      });

    setCharactersFiltered(filteredResults);
  }, [filters]);

  return (
    <section className="home-page">
      <Filters
        handleInput={handleSearchCharacters}
        handleChange={handleSelectHouse}
      />
      <CharacterList characters={charactersFiltered} />
    </section>
  );
}
export default HomePage;
