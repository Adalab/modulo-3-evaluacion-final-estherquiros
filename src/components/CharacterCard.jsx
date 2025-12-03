import { Link } from "react-router";

function CharacterCard({ character }) {
  return (
    <Link to={`/character/${character.id}`}>
      <li key={character.id} className="character-card">
        <h3 className="character-card__name">{character.name}</h3>
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
