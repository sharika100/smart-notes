export default function SearchBar({ setSearchTerm }) {
  return (
    <div className="search-bar">
      <input placeholder="Search notes..." onChange={e=>setSearchTerm(e.target.value)} />
    </div>
  );
}
