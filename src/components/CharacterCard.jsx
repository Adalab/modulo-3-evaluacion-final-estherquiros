function CharacterCard({ character }) {
  return (
    <li key={character.id} className="character-card">
      <h3 className="character-card__name">{character.name}</h3>
      <p className="character-card__species">{character.especies}</p>
      <img
        className="character-card__img"
        src={character.image}
        alt={`Imagen de ${character.name}`}
      />
    </li>
  );
}
export default CharacterCard;
