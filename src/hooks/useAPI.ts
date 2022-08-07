import { Dispatch, useCallback, useContext } from "react";
import {
  loadAnimeListActionCreator,
  loadLocalAnimeListActionCreator,
} from "../store/actions/actionAnime/animeActionsCreator";
import {
  closeLoadingActionCreator,
  showLoadingActionCreator,
  showModalActionCreator,
} from "../store/actions/actionUI/UIActionsCreator";
import { AnimeContext } from "../store/contexts/AnimeContext/AnimeContext";
import { UIContext } from "../store/contexts/UIContext/UIContext";
import { ActionUI } from "../types/actionTypesUI/actionsUI";

const useAPI = () => {
  const { UIdispatch } = useContext(UIContext);
  const { animeListInfo, dispatchAnime } = useContext(AnimeContext);

  const jikanAPI = useCallback(
    async (apiURL: string, dispatch: Dispatch<ActionUI> = UIdispatch) => {
      try {
        UIdispatch(showLoadingActionCreator());
        const response = await fetch(apiURL);
        if (response.status === 500) {
          throw new Error();
        }
        const animeApiInfo = await response.json();
        UIdispatch(closeLoadingActionCreator());
        dispatchAnime(loadAnimeListActionCreator(animeApiInfo));
      } catch (error) {
        dispatch(showModalActionCreator(false, error as string));
      }
    },
    [UIdispatch, dispatchAnime]
  );

  const getApiLocal = useCallback(
    async (localApi: string, dispatch: Dispatch<ActionUI> = UIdispatch) => {
      try {
        UIdispatch(showLoadingActionCreator());
        const response = await fetch(localApi);
        if (!response.ok) {
          throw new Error();
        }
        const localApiAnime = await response.json();
        UIdispatch(closeLoadingActionCreator());
        dispatchAnime(loadLocalAnimeListActionCreator(localApiAnime));
      } catch (error) {
        dispatch(showModalActionCreator(false, error as string));
      }
    },
    [UIdispatch, dispatchAnime]
  );

  const postLocalAPI = async (
    apiURL: string,
    animeObject: object,
    dispatch: Dispatch<ActionUI> = UIdispatch
  ) => {
    try {
      const response = await fetch(apiURL, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(animeObject),
      });
      if (!response.ok) {
        throw new Error();
      }
      const localApiAnime = await response.json();
      dispatchAnime(loadLocalAnimeListActionCreator(localApiAnime));
      dispatch(showModalActionCreator(true, "Anime added to your list"));
    } catch (error) {
      dispatch(showModalActionCreator(false, "Something were wrong"));
    }
  };

  const deleteLocalAPI = async (
    apiURL: string,
    animeId: number,
    dispatch: Dispatch<ActionUI> = UIdispatch
  ) => {
    try {
      const response = await fetch(`${apiURL}/${animeId}`, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error();
      }
      const localApiAnime = await response.json();
      UIdispatch(showModalActionCreator(true, "Anime deleted to your list"));
      dispatchAnime(loadLocalAnimeListActionCreator(localApiAnime));
    } catch (error) {
      dispatch(showModalActionCreator(false, "Something were wrong"));
    }
  };

  return { animeListInfo, deleteLocalAPI, postLocalAPI, jikanAPI, getApiLocal };
};

export default useAPI;
