import { useEffect, useState } from "react";

import CharacterList from "../CharacterList";
import Filters from "../Filters";

function HomePage({ characters }) {
  const [filters, setFilters] = useState({ name: "", house: "" });
  const [charactersFiltered, setCharactersFiltered] = useState(characters);

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
  }, [filters, characters]);

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
