import { useContext } from "react";
import AnimeCardList from "./components/AnimeCardList/AnimeCardList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { AnimeContext } from "./store/contexts/AnimeContext";

function App() {
  const { animeListInfo } = useContext(AnimeContext);
  const {
    pagination: { current_page }
  } = animeListInfo;

  return (
    <>
      <Header />
      {current_page !== -1 && <AnimeCardList />}
      <Footer />
    </>
  );
}

export default App;
