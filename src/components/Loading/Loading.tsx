import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <img src="./images/loading.gif" alt="Mandarin dancing, loading"></img>
      <span>Loading...</span>
    </LoadingStyled>
  );
};

export default Loading;
