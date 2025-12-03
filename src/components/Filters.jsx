function Filters({ handleInput, handleChange }) {
  return (
    <section className="filters">
      <form className="filters__form" onSubmit={(ev) => ev.preventDefault()}>
        <label className="filter__name-label" htmlFor="name">
          Buscar🔍
        </label>
        <input
          className="filters__name-input"
          name="name"
          type="text"
          onInput={handleInput}
        />
        <label className="filters__houses-label" htmlFor="houses"></label>
        <select
          className="filters__houses-select"
          name="houses"
          id="houses"
          onChange={handleChange}
        >
          <option value={""}>Todas las casas</option>
          <option value={"Gryffindor"}>🦁 Gryffindor</option>
          <option value={"Slytherin"}>🐍 Slytherin</option>
          <option value={"Hufflepuff"}>🦡 Hufflepuff</option>
          <option value={"Ravenclaw"}> 🦅Ravenclaw</option>
        </select>
      </form>
    </section>
  );
}
export default Filters;
