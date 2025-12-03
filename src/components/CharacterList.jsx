import CharacterCard from "./CharacterCard";
function CharacterList({ characters }) {
  return (
    <ul className="characters-list">
      {characters.map((character) => {
        return <CharacterCard key={character.id} character={character} />;
      })}
    </ul>
  );
}
export default CharacterList;
