import MyAnimeListStyled from "./MyAnimeListStyled";

const MyAnimeList = () => {
  return (
    <MyAnimeListStyled>
      <h2 className="my-anime-list__title">My List</h2>
      <section className="my-anime-list__container"></section>
    </MyAnimeListStyled>
  );
};
export default MyAnimeList;
