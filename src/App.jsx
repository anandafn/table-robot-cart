import { useState } from "react";
import AddData from "./components/AddData";
import Pagination from "./components/Pagination";

const App = () => {
  const [data, setData] = useState([
    { no: 1, source: "a", destination: "b", status: "executing" },
    { no: 2, source: "c", destination: "r", status: "done" },
    { no: 3, source: "f", destination: "g", status: "cancelled" },
    { no: 4, source: "t", destination: "s", status: "cancelled" },
  ]);

  const handleSubmit = (newData) => {
    setData([...data, newData]);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-white">
      <AddData onSubmit={handleSubmit} data={data} />
      <Pagination data={data} />
    </div>
  );
};

export default App;
