import { useContext } from "react";
import { AnimeContext } from "../../store/contexts/animeContext/AnimeContext";
import AnimeCard from "../AnimeCard/AnimeCard";
import Button from "../Button/Button";
import AnimeCardListStyled from "./AnimeCardListStyled";
import {
  nextAnimePageActionCreator,
  previousAnimePageActionCreator,
} from "../../store/actions/actionAnime/animeActionsCreator";

const AnimeCardList = () => {
  const { animeListInfo, dispatchAnime } = useContext(AnimeContext);
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
            dispatchAnime(previousAnimePageActionCreator());
          }}
        />
        <span className="animeListCard__numberPage">{`
        ${current_page} / 
        ${Math.ceil(total / count)}`}</span>
        <Button
          text="Next"
          actionOnClick={() => {
            dispatchAnime(nextAnimePageActionCreator(true));
          }}
        />
      </div>
    </AnimeCardListStyled>
  );
};

export default AnimeCardList;
