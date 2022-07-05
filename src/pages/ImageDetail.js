import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleImage } from "./api/getSingleImage";
import Button from "../components/Layout/Button";

const ImageDetail = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  const [image, setImage] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getSingleImage(id)
      .then((response) => response.json())
      .then((data) => {
        setImage(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [id]);

  const handleBackButton = () => {
    navigate("/", { replace: true });
  };

  return (
    <>
      {loading ? (
        <p>loading...</p>
      ) : loading === false && image ? (
        <main>
          <img src={image.download_url} alt={image.author} />
          <p>Uploaded by:</p>
          <h3>{image.author}</h3>
        </main>
      ) : (
        <p>No data.</p>
      )}

      <Button onClick={handleBackButton}>Go back</Button>
    </>
  );
};

export default ImageDetail;
