import Button from "../Button/Button";
import AnimeCardStyled from "./AnimeCardStyled";
import { AnimeData } from "../../types/interfaces";
import {
  showModalActionCreator,
  closeModalActionCreator,
} from "../../store/actions/actionUI/UIActionsCreator";
import { useContext } from "react";
import { UIContext } from "../../store/contexts/UIContext/UIContext";

interface AnimeCardProps {
  animeInfo: AnimeData;
}

const AnimeCard = ({ animeInfo }: AnimeCardProps): JSX.Element => {
  const { UIdispatch } = useContext(UIContext);
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
          <Button
            text="Add"
            actionOnClick={() => {
              UIdispatch(
                showModalActionCreator(true, "Anime added to your list")
              );
              setTimeout(() => {
                UIdispatch(closeModalActionCreator());
              }, 2000);
            }}
          />
        </div>
      </div>
    </AnimeCardStyled>
  );
};

export default AnimeCard;
