import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import AnimeContextProvider from "./store/contexts/animeContext/AnimeContextProvider";
import UIContextProvider from "./store/contexts/UIContext/UIContextProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <UIContextProvider>
      <AnimeContextProvider>
        <App />
      </AnimeContextProvider>
    </UIContextProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
