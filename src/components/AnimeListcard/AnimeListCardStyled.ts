import styled from "styled-components";

const AnimeCardListStyled = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-height: 10rem;

  .animeListCard {
    &__title {
      color: #e5c185;
      opacity: 0.5;
    }
  }
`;

export default AnimeCardListStyled;
