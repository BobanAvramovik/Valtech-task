import { useEffect, useState } from "react";
import GridImages from "../../components/GridImages/GridImages";
import { getImages } from "../api/getImages";

const Dashboard = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    getImages()
      .then((response) => response.json())
      .then((data) => setImages(data));
  }, []);

  return (
    <>
      <GridImages images={images} />
    </>
  );
};

export default Dashboard;
