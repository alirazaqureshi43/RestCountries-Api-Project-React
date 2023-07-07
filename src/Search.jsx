function Search({ searchQuery, onSearch }) {  
  const handleChange = (event) => {
    onSearch(event.target.value);
  };
  return (
    <div className="input-group mb-3">
    <input
      value={searchQuery}
      onChange={handleChange}

     type="text" className="form-control" placeholder="Search Here..." aria-label="Search" />
    {/* <button className="btn btn-primary" type="button">Search</button> */}
  </div>
  )
}

export default Search