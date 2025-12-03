import { useParams, useNavigate } from "react-router";
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

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <section className="character-detail">
      <img
        className="character-detail__img"
        src={character.image || "images/avatar-placeholder.png"}
        alt={`Imagen de ${character.name}`}
      />
      <h2 className="character-detail__name">{character.name}</h2>
      <p className="character-detail__alive">
        <span className="character-detail__desc">Estatus: </span>
        {character.alive ? "Alive" : "Dead"}
      </p>
      <p className="character-detail__species">
        <span className="character-detail__desc">Specie: </span>
        {character.species}
      </p>
      <p className="character-detail__gender">
        <span className="character-detail__desc">Gender: </span>
        {character.gender}
      </p>
      <p className="character-detail__house">
        <span className="character-detail__desc">House: </span>
        {character.house}
      </p>
      <button className="character-detail__back-btn" onClick={handleBack}>
        Volver
      </button>
    </section>
  );
}
export default CharacterDetail;
