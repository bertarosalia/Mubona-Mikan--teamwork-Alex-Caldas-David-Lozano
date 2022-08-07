import { useContext } from "react";
import AnimeCardList from "../../components/AnimeCardList/AnimeCardList";
import AnimeCardListStyled from "../../components/AnimeCardList/AnimeCardListStyled";
import { AnimeContext } from "../../store/contexts/AnimeContext/AnimeContext";

const AnimesPage = (): JSX.Element => {
  const { animeListInfo } = useContext(AnimeContext);

  const {
    pagination: { current_page },
  } = animeListInfo;

  return (
    <>
      <AnimeCardListStyled>
        <h2 className="animeListCard__title">Anime</h2>
        {current_page !== -1 && <AnimeCardList />}
      </AnimeCardListStyled>
    </>
  );
};

export default AnimesPage;
