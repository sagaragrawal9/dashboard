import { useSelector } from "react-redux";

const QueryHistory = () => {
  const queries = useSelector((state) => state.queries.history);

  return (
    <div className="mt-5">
      <h2 className="text-lg font-semibold">Query History</h2>
      <ul className="list-disc pl-5">
        {queries.length > 0 ? (
          queries.map((q, index) => <li key={index}>{q}</li>)
        ) : (
          <p>No queries yet.</p>
        )}
      </ul>
    </div>
  );
};

export default QueryHistory;