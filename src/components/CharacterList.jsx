import CharacterCard from "./CharacterCard";

function CharacterList({ characters, searchText }) {
  if (characters.length === 0) {
    return (
      <p className="no-results">
        No hay ningún personaje que coincida con la palabra {searchText}
      </p>
    );
  }
  return (
    <ul className="characters-list">
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </ul>
  );
}

export default CharacterList;
