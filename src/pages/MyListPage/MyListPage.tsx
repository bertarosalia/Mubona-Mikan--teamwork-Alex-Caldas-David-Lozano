import MyAnimeList from "../../components/MyAnimeList/MyAnimeList";
import MyAnimeListStyled from "../../components/MyAnimeList/MyAnimeListStyled";
const MyListPage = (): JSX.Element => {
  return (
    <>
      <MyAnimeListStyled>
        <h2 className="my-anime-list__title">My Anime List</h2>
        <MyAnimeList />
      </MyAnimeListStyled>
    </>
  );
};

export default MyListPage;
