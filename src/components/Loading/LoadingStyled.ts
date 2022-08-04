import styled from "styled-components";

const LoadingStyled = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  background-color: white;
  text-align: center;
  position: fixed;
  display: grid;
  place-items: center;

  span {
    font-weight: 700;
    font-size: 40px;
    color: #ff6b00;
  }
  video {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
`;

export default LoadingStyled;
