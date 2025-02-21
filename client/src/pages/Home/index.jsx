import React, { useState, useEffect } from "react";
import Search from "../../components/Search";
import DisplayArea from "../../components/DisplayArea";
import { getAll } from "../../services/movies.service";

const HomePage = () => {
  const [currentData, setCurrentData] = useState([]);
  console.log(currentData);

  useEffect(() => {
    getAll().then((response) => {
      setCurrentData(response.data);
    });
  }, []);

  return (
    <div>
      <Search handleUpdate={setCurrentData} />
      <DisplayArea dataset={currentData} />
    </div>
  );
};

export default HomePage;
