import Button from "../Button/Button";
import AnimeCardStyled from "./AnimeCardStyled";
import { AnimeData } from "../../types/interfaces";

interface AnimeCardProps {
  animeInfo: AnimeData;
}

const AnimeCard = ({ animeInfo }: AnimeCardProps): JSX.Element => {
  return (
    <AnimeCardStyled>
      <div className="animeCard_image-frame">
        <img src={animeInfo.images.jpg.image_url} alt={animeInfo.title} />
      </div>
      <div className="animeCard_info">
        <h3>{animeInfo.title}</h3>
        <div className="animeCard_footer">
          <div className="info">
            <span>Type: {animeInfo.type}</span>
            <span>Episodes: {animeInfo.episodes}</span>
          </div>
          <Button text="Add" actionOnClick={() => console.log("clicked")} />
        </div>
      </div>
    </AnimeCardStyled>
  );
};

export default AnimeCard;
