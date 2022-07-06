import classes from "./GridImages.module.css";
import { useNavigate } from "react-router-dom";

const GridImages = ({ images }) => {
  let navigate = useNavigate();

  const handleOpenImage = (id) => {
    navigate(`/${id}`);
  };

  return (
    <ul className={classes.grid}>
      {images.map((image) => (
        <li key={image.id} onClick={() => handleOpenImage(image.id)}>
          <img
            src={image.download_url}
            alt={image.author}
            className={classes.image}
          />
        </li>
      ))}
    </ul>
  );
};

export default GridImages;
