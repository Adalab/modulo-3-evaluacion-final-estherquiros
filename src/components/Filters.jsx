function Filters({
  handleInput,
  handleChange,
  handleGenderChange,
  handleAlphabeticChange,
}) {
  return (
    <section className="filters">
      <form className="filters__form" onSubmit={(ev) => ev.preventDefault()}>
        <div className="filters__name">
          <label className="filter__name-label" htmlFor="name">
            Buscar 🔍
          </label>
          <input
            className="filters__name-input"
            name="name"
            type="text"
            onInput={handleInput}
          />
        </div>
        <div className="filters__houses">
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
        </div>
        <div className="filters__gender">
          <input
            type="radio"
            id="all"
            name="gender"
            value=""
            onChange={handleGenderChange}
          />
          <label htmlFor="all">Todos</label>
          <input
            type="radio"
            id="female"
            name="gender"
            value="female"
            onChange={handleGenderChange}
          />
          <label htmlFor="female">Mujer</label>
          <input
            type="radio"
            id="male"
            name="gender"
            value="male"
            onChange={handleGenderChange}
          />
          <label htmlFor="male">Hombre</label>
        </div>
        <div className="filters__alphabetic">
          <input
            type="checkbox"
            id="all"
            name="alphabetic"
            value=""
            onChange={handleAlphabeticChange}
          />
          <label htmlFor="all">A-Z</label>
        </div>
      </form>
    </section>
  );
}
export default Filters;
