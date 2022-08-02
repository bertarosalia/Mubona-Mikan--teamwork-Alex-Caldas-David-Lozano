import { useContext } from "react";
import { AnimeContext } from "../../store/contexts/AnimeContext";
import Button from "../Button/Button";
import AnimeCardListStyled from "./AnimeListCardStyled";

const AnimeListcard = () => {
  const { animeInfo } = useContext(AnimeContext);

  const {
    pagination: { current_page },
  } = animeInfo;
  const {
    pagination: {
      items: { total },
    },
  } = animeInfo;
  const {
    pagination: {
      items: { count },
    },
  } = animeInfo;

  return (
    <AnimeCardListStyled>
      <h2 className="animeListCard__title">Anime</h2>
      <section></section>
      <div className="animeListCard__container">
        <Button text="Atras" actionOnClick={() => {}} />
        <span>{`${count * current_page} / ${total}`}</span>
        <Button text="Adelante" actionOnClick={() => {}} />
      </div>
    </AnimeCardListStyled>
  );
};

export default AnimeListcard;
