import styled from "styled-components";

const HeaderStyled = styled.header`
  padding-left: 1rem;
  padding-right: 1rem;
  background-color: #008585;
  display: flex;
  justify-content: space-between;
  height: 3rem;
  align-items: center;

  .header {
    &__image,
    &__icon {
      height: 1.5rem;
    }
  }
`;

export default HeaderStyled;
