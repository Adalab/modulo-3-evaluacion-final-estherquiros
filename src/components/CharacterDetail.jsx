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

    const character = characters.find((char) => {
      return char.id === params.id;
    });

    setCharacter(character);
  }, [characters, params.id]);

  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  const getHouseLogo = (house) => {
    if (!house) return null;
    const houseLower = house.toLowerCase();

    if (houseLower === "gryffindor") {
      return "images/icons8-hogwarts-legacy-gryffindor-48.png";
    } else if (houseLower === "hufflepuff") {
      return "images/icons8-hogwarts-legacy-hufflepuff-48.png";
    } else if (houseLower === "ravenclaw") {
      return "images/icons8-hogwarts-legacy-ravenclaw-48.png";
    } else if (houseLower === "slytherin") {
      return "images/icons8-hogwarts-legacy-slytherin-48.png";
    }
    return null;
  };

  const houseLogo = getHouseLogo(character.house);

  return (
    <section className="character-detail">
      <img
        className="character-detail__img"
        src={character.image || "images/avatar-placeholder.png"}
        alt={`Imagen de ${character.name}`}
      />
      <h2 className="character-detail__name">
        {character.name}
        {houseLogo && (
          <img
            src={houseLogo}
            alt={`Logo de ${character.house}`}
            className="character-detail__house-logo"
          />
        )}
      </h2>
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
