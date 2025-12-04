import { useEffect, useState } from "react";

import CharacterList from "../CharacterList";
import Filters from "../Filters";

function HomePage({ characters }) {
  const [filters, setFilters] = useState({ name: "", house: "", gender: "" });
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

  const handleSelectGender = (ev) => {
    const selectedGender = ev.target.value;

    setFilters({
      ...filters,
      gender: selectedGender,
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
        if (filters.house === "") return true;
        return character.house === filters.house;
      })
      .filter((character) => {
        if (filters.gender === "") return true;
        return character.gender === filters.gender;
      });

    setCharactersFiltered(filteredResults);
  }, [filters, characters]);

  return (
    <section className="home-page">
      <Filters
        handleInput={handleSearchCharacters}
        handleChange={handleSelectHouse}
        handleGenderChange={handleSelectGender}
      />
      <CharacterList characters={charactersFiltered} />
    </section>
  );
}
export default HomePage;
