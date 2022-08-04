import { useContext } from "react";
import AnimeCardList from "./components/AnimeCardList/AnimeCardList";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Modal from "./components/Modal/Modal";
import { AnimeContext } from "./store/contexts/animeContext/AnimeContext";
import { UIContext } from "./store/contexts/UIContext/UIContext";

function App() {
  const { animeListInfo } = useContext(AnimeContext);
  const {
    pagination: { current_page },
  } = animeListInfo;

  const {
    ui: { isLoading, isModalShowing, message, type },
  } = useContext(UIContext);

  return (
    <>
      <Header />
      {isModalShowing && <Modal message={message} type={type} />}
      {isLoading && <Loading />}
      {current_page !== -1 && <AnimeCardList />}
      <Footer />
    </>
  );
}

export default App;
