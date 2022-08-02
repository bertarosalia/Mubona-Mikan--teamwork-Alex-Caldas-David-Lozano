import Button from "../Button/Button";
import ArticleStyled from "./AnimeCardStyled";
import { AnimeData } from "../../types/interfaces";

interface AnimeCardProps {
  animeInfo: AnimeData;
}

const AnimeCard = ({ animeInfo }: AnimeCardProps): JSX.Element => {
  console.log(animeInfo);
  return (
    <ArticleStyled>
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
    </ArticleStyled>
  );
};

export default AnimeCard;
