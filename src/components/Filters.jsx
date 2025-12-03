function Filters({ handleInput }) {
  return (
    <section className="filters">
      <form className="filters__form" onSubmit={(ev) => ev.preventDefault()}>
        <label className="filter__label" htmlFor="name">
          Buscar por personaje
        </label>
        <input
          className="filters__input"
          name="name"
          type="text"
          onInput={handleInput}
        />
      </form>
    </section>
  );
}
export default Filters;
