import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSingleImage } from "../api/getSingleImage";
import Button from "../../components/Button/Button";
import classes from "./ImageDetail.module.css";
import Spinner from "../../components/Spinner/Spinner";

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
    navigate("/");
  };

  return (
    <>
      {loading ? (
        <div className={classes.centered}>
          <Spinner />
        </div>
      ) : loading === false && image ? (
        <main className={classes.detail}>
          <img src={image.download_url} alt={image.author} width="800" />
          <p>Uploaded by:</p>
          <h3>{image.author}</h3>
        </main>
      ) : (
        <p className={classes.centered}>No data.</p>
      )}

      <div className={`${classes.centered} ${classes["mt-20"]}`}>
        <Button onClick={handleBackButton}>Go back</Button>
      </div>
    </>
  );
};

export default ImageDetail;
