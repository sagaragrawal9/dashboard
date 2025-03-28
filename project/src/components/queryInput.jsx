import { useState } from "react";
import { useDispatch } from "react-redux";
import { addQuery } from "../redux/querySlice";

const QueryInput = ({ onSubmit }) => {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const suggestions = [
    "What were the sales in Q1?",
    "Show me revenue trends",
    "How did user engagement change?",
  ];

  const filteredSuggestions = suggestions.filter((s) =>
    s.toLowerCase().includes(query.toLowerCase())
  );

  const handleQuerySubmit = () => {
    if (!query.trim()) return;
    setLoading(true);
    setError(null);

    setTimeout(() => {
      if (Math.random() > 0.1) {
        dispatch(addQuery(query));
        onSubmit([
          { name: "Jan", value: 100 },
          { name: "Feb", value: 200 },
          { name: "Mar", value: 150 },
          { name: "Apr", value: 250 },
        ]);
      } else {
        setError("Failed to fetch results. Try again.");
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full p-2 border rounded-md"
        placeholder="Ask a business question..."
      />
      {query && filteredSuggestions.length > 0 && (
        <ul className="bg-gray-100 border rounded-md mt-2 p-2">
          {filteredSuggestions.map((s, index) => (
            <li key={index} className="p-1 cursor-pointer hover:bg-gray-300" onClick={() => setQuery(s)}>
              {s}
            </li>
          ))}
        </ul>
      )}
      <button
        onClick={handleQuerySubmit}
        className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
      >
        Submit Query
      </button>
      {loading && <p className="mt-3 text-gray-500">Processing...</p>}
      {error && <p className="mt-3 text-red-500">{error}</p>}
    </div>
  );
};

export default QueryInput;