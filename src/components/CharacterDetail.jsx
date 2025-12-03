import { useParams } from "react-router";
import { useState } from "react";
import { useEffect } from "react";

function CharacterDetail({ characters }) {
  const params = useParams("id");

  const [character, setCharacter] = useState({
    name: "Cargando...",
  });

  useEffect(() => {
    if (characters.length === 0) return;

    const character = characters.find((c) => {
      return c.id === params.id;
    });

    setCharacter(character);
  }, [characters, params.id]);

  return (
    <section className="character-detail">
      <img
        className="character-detail__img"
        src={character.image || "images/avatar-placeholder.png"}
        alt={`Imagen de ${character.name}`}
      />
      <h2 className="character-detail__name">{character.name}</h2>
      <p className="character-detail__alive">
        {character.alive ? "Alive" : "Dead"}
      </p>
      <p className="character-detail__species">{character.species}</p>
      <p className="character-detail__gender">{character.gender}</p>
      <p className="character-detail__house">{character.house}</p>
    </section>
  );
}
export default CharacterDetail;
