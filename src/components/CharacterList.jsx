import CharacterCard from "./CharacterCard";
function CharacterList({ characters }) {
  return (
    <ul className="characters-list">
      {characters.map((character) => {
        return <CharacterCard character={character} />;
      })}
    </ul>
  );
}
export default CharacterList;
