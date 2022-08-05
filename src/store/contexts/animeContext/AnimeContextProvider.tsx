import { useReducer } from "react";
import { AnimeContext } from "./AnimeContext";
import { AnimeInfo } from "../../../types/interfaces";
import animeReducer from "../../reducers/animeReducer/animeReducer";

interface AnimeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AnimeContextProvider = ({
  children,
}: AnimeContextProviderProps): JSX.Element => {
  const animeInitialInfo: AnimeInfo = {
    pagination: {
      has_next_page: false,
      current_page: 0,
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

  return (
    <AnimeContext.Provider value={{ animeListInfo, dispatchAnime }}>
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeContextProvider;
