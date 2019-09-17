import Link from "next/link";
import { useState, useEffect } from "react";

import AddEntry from "../components/AddEntry";
import JobGrid from "../components/JobGrid";

import list from "../components/JobGrid/GridList";

const Index = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(list);
  }, [])

  const addRow = (entry) => {
    const newData = [...data];
    newData.push(entry);
    setData(newData);
  }

  return (
    <div className="table--body">
      <AddEntry addRow={addRow} />
      <div className="table--grid">
        <JobGrid data={data} />
      </div>
    </div>
  );
};

export default Index;
