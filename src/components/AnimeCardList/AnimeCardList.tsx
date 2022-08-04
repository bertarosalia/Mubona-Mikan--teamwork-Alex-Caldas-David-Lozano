import { useContext } from "react";
import { AnimeContext } from "../../store/contexts/animeContext/AnimeContext";
import AnimeCard from "../AnimeCard/AnimeCard";
import Button from "../Button/Button";
import AnimeCardListStyled from "./AnimeCardListStyled";
import {
  nextAnimePageActionCreator,
  previousAnimePageCreator,
} from "../../store/actions/apiUrlActionCreator";

const AnimeCardList = () => {
  const { animeListInfo, dispatch } = useContext(AnimeContext);
  const { data: animesList } = animeListInfo;
  const {
    pagination: { current_page },
  } = animeListInfo;
  const {
    pagination: {
      items: { total },
    },
  } = animeListInfo;
  const {
    pagination: {
      items: { count },
    },
  } = animeListInfo;

  return (
    <AnimeCardListStyled>
      <h2 className="animeListCard__title">Anime</h2>
      <section className="animeListCard__container">
        {animesList.map((anime) => (
          <AnimeCard animeInfo={anime} key={anime.mal_id} />
        ))}
      </section>
      <div className="animeListCard__pagination">
        <Button
          text="Previous"
          actionOnClick={() => {
            dispatch(previousAnimePageCreator());
          }}
        />
        <span className="animeListCard__numberPage">{`${
          count * current_page
        } / ${total}`}</span>
        <Button
          text="Next"
          actionOnClick={() => {
            dispatch(nextAnimePageActionCreator(true));
          }}
        />
      </div>
    </AnimeCardListStyled>
  );
};

export default AnimeCardList;
