import styled from "styled-components";

const LoadingStyled = styled.div`
  width: 100vw;
  height: 100%;
  background-color: white;
  text-align: center;
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;

  span {
    font-weight: 700;
    font-size: 40px;
    color: #ff6b00;
  }
  img {
    width: 100%;
    max-width: 500px;
    height: auto;
  }
`;

export default LoadingStyled;
