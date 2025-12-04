import { Link } from "react-router";

function CharacterCard({ character }) {
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
    <Link to={`/character/${character.id}`}>
      <li key={character.id} className="character-card">
        <h3 className="character-card__name">
          {character.name}
          {houseLogo && (
            <img
              src={houseLogo}
              alt={`Logo de ${character.house}`}
              className="character-card__house-logo"
            />
          )}
        </h3>
        <p className="character-card__species">{character.especies}</p>
        <img
          className="character-card__img"
          src={character.image || "images/avatar-placeholder.png"}
          alt={`Imagen de ${character.name}`}
        />
      </li>
    </Link>
  );
}
export default CharacterCard;
