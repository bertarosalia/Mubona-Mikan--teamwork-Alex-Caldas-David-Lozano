import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <img
        src="./images/loading.gif"
        alt="Mandarina bailando, cargando pagina"
      ></img>
      <span>Loading...</span>
    </LoadingStyled>
  );
};

export default Loading;
