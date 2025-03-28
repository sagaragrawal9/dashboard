import { useState } from "react";
import QueryInput from "./components/queryInput";
import QueryHistory from "./components/QueryHistory";
import ResultChart from "./components/ResultChart";

const App = () => {
  const [result, setResult] = useState(null);

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white shadow-lg rounded-xl">
      <h1 className="text-2xl font-bold mb-4">Data Query Dashboard</h1>
      <QueryInput onSubmit={setResult} />
      {result && <ResultChart data={result} />}
      <QueryHistory />
    </div>
  );
};

export default App;