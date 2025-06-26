import SearchIcon from "./search.svg"
function SearchBar(props) {
   const searchTerm=props.item_for_search;
  return (
    <div className="search">
      <img src={SearchIcon} alt="search" />
      <input
        type="text"
        value={searchTerm}
        placeholder="Search for movies"
        onChange={(e) => props.search_item(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            props.search_movie(searchTerm)
          }
        }} />
    </div>
  )
}

export default SearchBar;