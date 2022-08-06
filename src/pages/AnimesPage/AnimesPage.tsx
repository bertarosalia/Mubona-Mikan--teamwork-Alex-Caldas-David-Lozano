import { useContext } from "react";
import AnimeCardList from "../../components/AnimeCardList/AnimeCardList";
import { AnimeContext } from "../../store/contexts/AnimeContext/AnimeContext";

const AnimesPage = (): JSX.Element => {
  const { animeListInfo } = useContext(AnimeContext);

  const {
    pagination: { current_page },
  } = animeListInfo;

  return <>{current_page !== -1 && <AnimeCardList />}</>;
};

export default AnimesPage;
