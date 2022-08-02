import { useEffect, useState } from "react";
import { AnimeContext, IAnimeContext } from "./AnimeContext";

interface AnimeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AnimeContextProvider = ({
  children,
}: AnimeContextProviderProps): JSX.Element => {
  const animeInfoTest: IAnimeContext = {
    animeInfo: {
      pagination: {
        has_next_page: false,
        current_page: 1,
        items: {
          count: 0,
          total: 666,
        },
      },
      data: [],
    },
  };

  const [animeInfo, setAnimeInfo] = useState(animeInfoTest.animeInfo);

  const apiURL = "https://api.jikan.moe/v4/top/anime?limit=10";

  const loadAnimeApi = async () => {
    const response = await fetch(apiURL);
    const animeApiInfo = await response.json();
    setAnimeInfo(animeApiInfo);
  };

  useEffect(() => {
    loadAnimeApi();
  }, []);

  return (
    <AnimeContext.Provider value={{ animeInfo }}>
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeContextProvider;
