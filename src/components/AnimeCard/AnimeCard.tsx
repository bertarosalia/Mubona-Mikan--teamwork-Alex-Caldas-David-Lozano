import Button from "../Button/Button";
import AnimeCardStyled from "./AnimeCardStyled";
import { AnimeData } from "../../types/interfaces";
import { showModalActionCreator } from "../../store/actions/actionUI/UIActionsCreator";
import { useContext } from "react";
import { UIContext } from "../../store/contexts/UIContext/UIContext";
import useAPI from "../../hooks/useAPI";

interface AnimeCardProps {
  animeInfo: AnimeData;
  isDetailed: boolean;
}

function AnimeCard({ animeInfo, isDetailed }: AnimeCardProps): JSX.Element {
  const { UIdispatch } = useContext(UIContext);
  const { postLocalAPI } = useAPI();
  const urlAPI = `${process.env.REACT_APP_LOCAL_API_URL as string}`;

  const generesFilter = animeInfo.genres.map(({ name }) => ({ name: name }));

  const mokAnimeObject: AnimeData = {
    mal_id: animeInfo.mal_id,
    images: { webp: { image_url: animeInfo.images.webp.image_url } },
    title: animeInfo.title,
    type: animeInfo.title,
    episodes: animeInfo.episodes,
    duration: animeInfo.duration,
    rating: animeInfo.rating,
    score: animeInfo.score,
    synopsis: animeInfo.synopsis,
    year: animeInfo.year,
    genres: generesFilter,
  };

  return (
    <>
      <AnimeCardStyled>
        <div className={isDetailed ? "detailed" : "not-detailed"}>
          <div className="animeCard_image-frame">
            <img
              width="120"
              height="160"
              src={animeInfo.images.webp.image_url}
              alt={animeInfo.title}
            />
          </div>
          <h3>{animeInfo.title}</h3>

          <div className="animeCard_footer">
            <div className="info">
              <span>Type: {animeInfo.type}</span>
              <span>Episodes: {animeInfo.episodes}</span>
            </div>
            {isDetailed && (
              <span>
                Duration:
                <br /> {animeInfo.duration}
              </span>
            )}
            {isDetailed && (
              <span>
                Rating:
                <br /> {animeInfo.rating}
              </span>
            )}
            <div className="animeCard_footer_score_button">
              {isDetailed && (
                <div className="animeCard_footer_score">
                  <img
                    src="images/iconStar.webp"
                    width="20"
                    height="20"
                    alt="rating star icon"
                  ></img>
                  {animeInfo.score}
                </div>
              )}
              <Button
                text="Add"
                actionOnClick={() => {
                  postLocalAPI(urlAPI, mokAnimeObject);
                  UIdispatch(
                    showModalActionCreator(true, "Anime added to your list")
                  );
                }}
              />
            </div>
          </div>
          {isDetailed && (
            <span className="animeCard_synapsis">{animeInfo.synopsis}</span>
          )}
        </div>
      </AnimeCardStyled>
    </>
  );
}

export default AnimeCard;
