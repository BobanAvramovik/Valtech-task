import { useEffect, useState } from "react";

import Header from "./components/Header/Header";

function App() {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://picsum.photos/200/300");
        console.log(response);

        const data = await response.json();
        console.log(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Header />
    </>
  );
}

export default App;
