import MyAnimeListStyled from "./MyAnimeListStyled";
import AnimeCard from "../AnimeCard/AnimeCard";
import useAPI from "../../hooks/useAPI";
import { AnimeContext } from "../../store/contexts/AnimeContext/AnimeContext";
import { useContext, useEffect } from "react";
import { UIContext } from "../../store/contexts/UIContext/UIContext";
import {
  showFormActionCreator,
  closeFormActionCreator,
} from "../../store/actions/actionUI/UIActionsCreator";

const MyAnimeList = () => {
  const { getApiLocal } = useAPI();
  const { animeListInfo } = useContext(AnimeContext);
  const {
    UIdispatch,
    ui: { isFormShowing },
  } = useContext(UIContext);
  const localApi = `${process.env.REACT_APP_LOCAL_API_URL as string}`;

  useEffect(() => {
    getApiLocal(localApi);
  }, [getApiLocal, localApi]);

  const { animeLocalData } = animeListInfo;
  return (
    <>
      <MyAnimeListStyled>
        <h2 className="my-anime-list__title">My Anime List</h2>
        {!isFormShowing && (
          <button
            className="button_add_new"
            onClick={() => UIdispatch(showFormActionCreator())}
          >
            +
          </button>
        )}
        {isFormShowing && (
          <button
            className="button_add_new"
            onClick={() => UIdispatch(closeFormActionCreator())}
          >
            x
          </button>
        )}
        <section className="my-anime-list__container">
          {animeLocalData.map((anime) => (
            <AnimeCard key={anime.id} animeInfo={anime} isDetailed={false} />
          ))}
        </section>
      </MyAnimeListStyled>
    </>
  );
};
export default MyAnimeList;
