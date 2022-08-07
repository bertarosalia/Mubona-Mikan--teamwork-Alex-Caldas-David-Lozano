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
      UIdispatch(showLoadingActionCreator());

      try {
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
    async (localApi: string) => {
      try {
        UIdispatch(showLoadingActionCreator());
        const response = await fetch(localApi);
        const localApiAnime = await response.json();
        UIdispatch(closeLoadingActionCreator());
        dispatchAnime(loadLocalAnimeListActionCreator(localApiAnime));
      } catch (error) {
        UIdispatch(showModalActionCreator(false, error as string));
      }
    },
    [UIdispatch, dispatchAnime]
  );

  const postLocalAPI = (apiURL: string, animeObject: object) => {
    fetch(apiURL, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(animeObject),
    });
  };

  const deleteLocalAPI = (apiURL: string, animeId: number) => {
    fetch(`${apiURL}/${animeId}`, {
      method: "DELETE",
    });
  };

  return { deleteLocalAPI, postLocalAPI, jikanAPI, animeListInfo, getApiLocal };
};

export default useAPI;
