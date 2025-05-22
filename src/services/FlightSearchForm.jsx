const FlightSearchForm = ({ onSearch }) => {
    const [query, setQuery] = useState("");

    return (
        <form onSubmit={e => { e.preventDefault(); onSearch(query); }}>
            <input type="text" placeholder="Search by destination..." value={query} onChange={e => setQuery(e.target.value)} />
            <button type="submit">Search</button>
        </form>
    );
};
