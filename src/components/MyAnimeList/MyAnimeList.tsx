import MyAnimeListStyled from "./MyAnimeListStyled";
import AnimeCard from "../AnimeCard/AnimeCard";
import useAPI from "../../hooks/useAPI";
import { AnimeContext } from "../../store/contexts/AnimeContext/AnimeContext";
import { useContext, useEffect } from "react";

const MyAnimeList = () => {
  const { getApiLocal } = useAPI();
  const { animeListInfo } = useContext(AnimeContext);
  const localApi = `${process.env.REACT_APP_LOCAL_API_URL as string}`;

  useEffect(() => {
    getApiLocal(localApi);
  }, [getApiLocal, localApi]);
  console.log(animeListInfo.animeLocalData);
  const { animeLocalData } = animeListInfo;
  return (
    <MyAnimeListStyled>
      <section className="my-anime-list__container">
        {animeLocalData.map((anime) => (
          <AnimeCard key={anime.id} animeInfo={anime} isDetailed={false} />
        ))}
      </section>
    </MyAnimeListStyled>
  );
};
export default MyAnimeList;
