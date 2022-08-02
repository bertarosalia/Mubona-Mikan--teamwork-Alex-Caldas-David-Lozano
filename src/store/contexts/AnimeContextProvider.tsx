import { AnimeContext, IAnimeContext } from "./AnimeContext";

interface AnimeContextProviderProps {
  children: JSX.Element | JSX.Element[];
}

const AnimeInfoTest: IAnimeContext = {
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

const AnimeContextProvider = ({
  children,
}: AnimeContextProviderProps): JSX.Element => {
  return (
    <AnimeContext.Provider value={AnimeInfoTest}>
      {children}
    </AnimeContext.Provider>
  );
};

export default AnimeContextProvider;
