import styled from "styled-components";

const HeaderStyled = styled.header`
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #008585;
  display: flex;
  justify-content: space-between;
  height: 3rem;
  align-items: center;

  button {
    padding: 0;
    margin: 0;
    border: 0;
    background-color: transparent;
    cursor: pointer;
  }

  .header {
    &__image,
    &__icon {
      height: 1.5rem;
    }
  }
`;

export default HeaderStyled;
