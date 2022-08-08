import { useContext } from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Loading from "./components/Loading/Loading";
import Modal from "./components/Modal/Modal";
import Navigation from "./components/Navigation/Navigation";
import { UIContext } from "./store/contexts/UIContext/UIContext";
import { Routes, Route } from "react-router-dom";
import MyListPage from "./pages/MyListPage/MyListPage";
import AnimesPage from "./pages/AnimesPage/AnimesPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  const {
    ui: { isLoading, isModalShowing, message, type },
  } = useContext(UIContext);

  return (
    <>
      {isModalShowing && <Modal message={message} type={type} />}
      {isLoading && <Loading />}
      <Header />
      <Navigation />
      <Routes>
        <Route path="/" element={<AnimesPage />} />
        <Route path="/animes" element={<AnimesPage />} />
        <Route path="/my-list" element={<MyListPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
