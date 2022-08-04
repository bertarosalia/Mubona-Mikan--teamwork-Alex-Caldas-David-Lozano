import LoadingStyled from "./LoadingStyled";

const Loading = (): JSX.Element => {
  return (
    <LoadingStyled>
      <video
        src="./images/loading.mp4"
        title="Mandarin dancing"
        autoPlay
        loop
      ></video>
      <span>Loading...</span>
    </LoadingStyled>
  );
};

export default Loading;
