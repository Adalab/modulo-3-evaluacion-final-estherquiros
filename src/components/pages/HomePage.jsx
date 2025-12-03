import { useEffect, useState } from "react";
import CharacterCard from "../CharacterCard";

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
      <ul className="characters-list">
        {characters.map((character) => {
          return <CharacterCard character={character} />;
        })}
      </ul>
    </section>
  );
}
export default HomePage;
