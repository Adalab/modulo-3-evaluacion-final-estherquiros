import { useParams } from "react-router";
import { useState } from "react";

function CharacterDetail({ characters }) {
  const characterId = useParams("id");

  const [character, setCharacter] = useState({
    name: "Cargando...",
  });

  return (
    <section className="character-detail">
      <h2 className="character-detail__name">{character.name}</h2>
    </section>
  );
}
export default CharacterDetail;
