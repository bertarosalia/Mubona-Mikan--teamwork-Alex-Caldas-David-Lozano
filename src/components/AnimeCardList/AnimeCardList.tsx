import { useContext, useEffect } from "react";
import { AnimeContext } from "../../store/contexts/AnimeContext/AnimeContext";
import AnimeCard from "../AnimeCard/AnimeCard";
import Button from "../Button/Button";
import AnimeCardListStyled from "./AnimeCardListStyled";
import {
  nextAnimePageActionCreator,
  previousAnimePageActionCreator,
} from "../../store/actions/actionAnime/animeActionsCreator";
import useAPI from "../../hooks/useAPI";

const AnimeCardList = () => {
  const { jikanAPI, animeListInfo } = useAPI();

  const urlAPI = `${process.env.REACT_APP_API_URL as string}?page=${
    animeListInfo.pagination.current_page
  }&limit=12`;
  useEffect(() => {
    jikanAPI(urlAPI);
  }, [jikanAPI, urlAPI]);

  const { dispatchAnime } = useContext(AnimeContext);
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
          <AnimeCard animeInfo={anime} key={anime.mal_id} isDetailed={true} />
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
