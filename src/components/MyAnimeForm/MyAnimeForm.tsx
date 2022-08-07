import { SyntheticEvent, useState } from "react";
import useAPI from "../../hooks/useAPI";
import { AnimeData } from "../../types/interfaces";

const MyAnimeForm = () => {
  const initialAnimeFormData: AnimeData = {
    mal_id: -1,
    title: "",
    images: {
      webp: {
        image_url: "",
      },
    },
    type: "",
    episodes: 0,
    duration: "",
    genres: [{ name: "dsadasd" }, { name: "asdsda" }],
    rating: "",
    year: 0,
    score: 0,
    synopsis: "",
  };

  const { postLocalAPI } = useAPI();
  const [animeForm, setAnimeForm] = useState(initialAnimeFormData);

  const changeFormData = (event: SyntheticEvent) => {
    const property = (event.target as HTMLInputElement).id;
    const newValue = (event.target as HTMLInputElement).value;

    let newAnimeForm;

    switch (property) {
      case "image_url":
        newAnimeForm = {
          ...animeForm,
          images: { webp: { image_url: newValue } },
        };
        break;
      case "firstGenre":
        newAnimeForm = {
          ...animeForm,
          genres: [{ name: newValue }, { ...animeForm.genres[1] }],
        };
        break;
      case "secondGenre":
        newAnimeForm = {
          ...animeForm,
          genres: [{ ...animeForm.genres[0] }, { name: newValue }],
        };
        break;
      default:
        newAnimeForm = { ...animeForm, [property]: newValue };
        break;
    }

    setAnimeForm(newAnimeForm);
  };

  const changeFormImage = (event: SyntheticEvent) => {
    const newValue = (event.target as HTMLInputElement).value;

    setAnimeForm({
      ...animeForm,
      images: { webp: { image_url: newValue } },
    });
  };

  const createAnime = async (event: SyntheticEvent) => {
    event.preventDefault();

    const localUrl = process.env.REACT_APP_LOCAL_API_URL;

    const newAnime = {
      ...animeForm,
    };

    postLocalAPI(localUrl as string, newAnime);

    setAnimeForm(initialAnimeFormData);
  };

  const isFormValid = (): boolean =>
    animeForm.title !== "" &&
    animeForm.images.webp.image_url !== "" &&
    animeForm.type !== "" &&
    animeForm.episodes !== 0 &&
    animeForm.duration !== "" &&
    animeForm.genres[0].name !== "" &&
    animeForm.genres[1].name !== "" &&
    animeForm.year !== 0 &&
    animeForm.rating !== "" &&
    animeForm.synopsis !== "";

  return (
    <form
      className="new-anime"
      autoComplete="off"
      noValidate
      onSubmit={createAnime}
    >
      <div className="new-anime__group">
        <label htmlFor="title" className="new-anime__label">
          Title:{" "}
        </label>
        <input
          type="text"
          id="title"
          className="new-anime__control"
          value={animeForm.title}
          onChange={changeFormData}
        />
      </div>
      <div className="new-anime__group">
        <label htmlFor="imageUrl" className="new-anime__label">
          Image:{" "}
        </label>
        <input
          type="url"
          id="image_url"
          className="new-anime__control"
          value={animeForm.images.webp.image_url}
          onChange={changeFormImage}
        />
      </div>
      <div className="new-anime__group">
        <label htmlFor="type" className="new-anime__label">
          Type:{" "}
        </label>
        <select id="type" value={animeForm.type} onChange={changeFormData}>
          <option></option>
          <option>TV</option>
          <option>Movie</option>
          <option>Ova</option>
          <option>Special</option>
          <option>Ona</option>
          <option>Music</option>
        </select>
      </div>
      <div className="new-anime__group">
        <label htmlFor="episodes" className="new-anime__label">
          Episodes:{" "}
        </label>
        <input
          type="number"
          id="episodes"
          className="new-anime__control"
          value={animeForm.episodes}
          onChange={changeFormData}
        />
      </div>
      <div className="new-anime__group">
        <label htmlFor="duration" className="new-anime__label">
          Duration:{" "}
        </label>
        <input
          type="text"
          id="duration"
          className="new-anime__control"
          value={animeForm.duration}
          onChange={changeFormData}
        />
      </div>
      <div className="new-anime__group">
        <label htmlFor="genres1" className="new-anime__label">
          Genres 1:{" "}
        </label>
        <input
          type="text"
          id="firstGenre"
          className="new-anime__control"
          value={animeForm.genres[0].name}
          onChange={changeFormData}
        />
      </div>
      <div className="new-anime__group">
        <label htmlFor="genres1" className="new-anime__label">
          Genres 2:{" "}
        </label>
        <input
          type="text"
          id="secondGenre"
          className="new-anime__control"
          value={animeForm.genres[1].name}
          onChange={changeFormData}
        />
      </div>
      <div className="new-anime__group">
        <label htmlFor="rating" className="new-anime__label">
          Rating:{" "}
        </label>
        <select id="rating" value={animeForm.rating} onChange={changeFormData}>
          <option></option>
          <option>G - All Ages</option>
          <option>PG - Children</option>
          <option>PG-13 - Teens 13 or older</option>
          <option>R - 17+ (violence & profanity)</option>
          <option>R+ - Mild Nudity</option>
          <option>Rx - Hentai</option>
        </select>
      </div>
      <div className="new-anime__group">
        <label htmlFor="year" className="new-anime__label">
          Year:{" "}
        </label>
        <input
          type="number"
          id="year"
          min={0}
          max={2022}
          className="new-anime__control"
          value={animeForm.year}
          onChange={changeFormData}
        />
      </div>
      <div className="new-anime__group">
        <label htmlFor="score" className="new-anime__label">
          Score:{" "}
        </label>
        <input
          type="number"
          id="score"
          min={0}
          max={10}
          className="new-anime__control"
          value={animeForm.score}
          onChange={changeFormData}
        />
      </div>
      <div className="new-anime__group">
        <label htmlFor="synopsis" className="new-gentleman__label">
          Synopsis:{" "}
        </label>
        <input
          type="box "
          id="synopsis"
          className="new-gentleman__control"
          value={animeForm.synopsis}
          onChange={changeFormData}
        />
      </div>
      <div className="new-gentleman__group new-gentleman__group--end">
        <button type="submit" disabled={!isFormValid()}>
          Create
        </button>
      </div>
    </form>
  );
};

export default MyAnimeForm;
