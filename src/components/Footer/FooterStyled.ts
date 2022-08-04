import styled from "styled-components";

const FooterStyled = styled.footer`
  box-sizing: border-box;
  border: 0;
  padding: 1rem;
  width: 100%;
  height: 15rem;

  box-sizing: border-box;

  background-color: #008585;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    margin: 0;
    text-align: center;
  }
  a,
  img {
    width: auto;
    height: 100%;
  }
  .footer {
    &__RRSS,
    &__stores {
      width: 100%;
      max-width: 450px;
      height: 2.7rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
      gap: 1rem;
    }
  }
`;

export default FooterStyled;
