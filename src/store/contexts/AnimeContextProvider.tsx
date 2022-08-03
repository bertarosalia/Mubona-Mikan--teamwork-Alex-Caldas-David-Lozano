import { useEffect, useReducer, useState } from "react";
import apiUrlReducer from "../reducers/apiUrlReducer";
import { AnimeContext, IAnimeContext } from "./AnimeContext";

interface AnimeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AnimeContextProvider = ({
  children,
}: AnimeContextProviderProps): JSX.Element => {
  const [currentPage, dispatch] = useReducer(apiUrlReducer, 1);

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
      const response = await fetch(apiURL);
      const animeApiInfo = await response.json();
      setAnimeInfo(animeApiInfo);
    };
    loadAnimeApi();
  }, [apiURL]);

  return (
    <AnimeContext.Provider value={{ animeListInfo, dispatch }}>
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeContextProvider;
