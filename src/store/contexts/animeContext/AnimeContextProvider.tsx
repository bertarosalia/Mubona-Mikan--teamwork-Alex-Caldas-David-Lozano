import { useContext, useEffect, useReducer } from "react";
import {
  closeLoadingActionCreator,
  showLoadingActionCreator,
} from "../../actions/actionUI/UIActionsCreator";
import { AnimeContext } from "./AnimeContext";
import { UIContext } from "../UIContext/UIContext";
import { AnimeInfo } from "../../../types/interfaces";
import animeReducer from "../../reducers/animeReducer/animeReducer";
import { loadAnimeListActionCreator } from "../../actions/actionAnime/animeActionsCreator";

interface AnimeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AnimeContextProvider = ({
  children,
}: AnimeContextProviderProps): JSX.Element => {
  const { UIdispatch } = useContext(UIContext);

  const animeInitialInfo: AnimeInfo = {
    pagination: {
      has_next_page: false,
      current_page: -1,
      items: {
        count: 0,
        total: 666,
      },
    },
    data: [],
  };

  const [animeListInfo, dispatchAnime] = useReducer(
    animeReducer,
    animeInitialInfo
  );
  const {
    pagination: { current_page },
  } = animeListInfo;

  const apiURL = `https://api.jikan.moe/v4/top/anime?limit=12&page=${current_page}`;

  useEffect(() => {
    const loadAnimeApi = async () => {
      UIdispatch(showLoadingActionCreator());
      const response = await fetch(apiURL);
      const animeApiInfo = await response.json();
      UIdispatch(closeLoadingActionCreator());
      dispatchAnime(loadAnimeListActionCreator(animeApiInfo));
    };
    loadAnimeApi();
  }, [UIdispatch, apiURL]);

  return (
    <AnimeContext.Provider value={{ animeListInfo, dispatchAnime }}>
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeContextProvider;
