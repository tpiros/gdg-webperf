export default function Search({ searchTerm, onInput }) {
  return (
    <form className="search-container" onSubmit={(e) => e.preventDefault()}>
      <input
        type="text"
        name="query"
        placeholder="Search wizards..."
        className="search-bar"
        value={searchTerm}
        onInput={onInput}
      />
    </form>
  );
}
