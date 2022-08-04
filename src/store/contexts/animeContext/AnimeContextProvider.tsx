import { useContext, useEffect, useReducer, useState } from "react";
import apiUrlReducer from "../../reducers/apiUrlReducer";
import {
  closeLoadingActionCreator,
  showLoadingActionCreator,
} from "../../actions/actionUI/UIActionsCreator";
import { AnimeContext, IAnimeContext } from "./AnimeContext";
import { UIContext } from "../UIContext/UIContext";

interface AnimeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AnimeContextProvider = ({
  children,
}: AnimeContextProviderProps): JSX.Element => {
  const [currentPage, dispatch] = useReducer(apiUrlReducer, 1);
  const { UIdispatch } = useContext(UIContext);

  const animeInfoTest: IAnimeContext = {
    animeListInfo: {
      pagination: {
        has_next_page: false,
        current_page: -1,
        items: {
          count: 0,
          total: 666,
        },
      },
      data: [],
    },
    dispatch: dispatch,
  };

  const [animeListInfo, setAnimeInfo] = useState(animeInfoTest.animeListInfo);
  const apiURL = `https://api.jikan.moe/v4/top/anime?limit=10&page=${currentPage}`;

  useEffect(() => {
    const loadAnimeApi = async () => {
      UIdispatch(showLoadingActionCreator());
      const response = await fetch(apiURL);
      const animeApiInfo = await response.json();
      UIdispatch(closeLoadingActionCreator());
      setAnimeInfo(animeApiInfo);
    };
    loadAnimeApi();
  }, [UIdispatch, apiURL]);

  return (
    <AnimeContext.Provider value={{ animeListInfo, dispatch }}>
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeContextProvider;
