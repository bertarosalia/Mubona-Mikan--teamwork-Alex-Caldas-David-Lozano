import { useCallback, useContext } from "react";
import { loadAnimeListActionCreator } from "../store/actions/actionAnime/animeActionsCreator";
import {
  closeLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../store/actions/actionUI/UIActionsCreator";
import { AnimeContext } from "../store/contexts/animeContext/AnimeContext";
import { UIContext } from "../store/contexts/UIContext/UIContext";

const useAPI = () => {
  const { UIdispatch } = useContext(UIContext);
  const {
    animeListInfo: {
      pagination: { current_page },
    },
    dispatchAnime,
  } = useContext(AnimeContext);

  const apiURL = `${
    process.env.REACT_APP_API_URL as string
  }&page=${current_page}`;

  const jikanAPI = useCallback(async () => {
    UIdispatch(showLoadingActionCreator());

    try {
      const response = await fetch(apiURL);
      const animeApiInfo = await response.json();
      UIdispatch(closeLoadingActionCreator());
      dispatchAnime(loadAnimeListActionCreator(animeApiInfo));
    } catch (error) {
      UIdispatch(showModalActionCreator(false, error as string));
    }
  }, [UIdispatch, apiURL, dispatchAnime]);

  return { jikanAPI };
};

export default useAPI;
/* 
  const { UIdispatch } = useContext(UIContext);

  const apiURL = `${
    process.env.REACT_APP_API_URL as string
  }&page=${current_page}`;

  useEffect(() => {
    const loadAnimeApi = async () => {
      UIdispatch(showLoadingActionCreator());
      
    };
    loadAnimeApi();
  }, [UIdispatch, apiURL]); */
