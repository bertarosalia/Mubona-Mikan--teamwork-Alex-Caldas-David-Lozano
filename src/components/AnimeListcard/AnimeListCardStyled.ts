import styled from "styled-components";

const AnimeCardListStyled = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-height: 10rem;

  .animeListCard {
    &__title {
      font-size: 2rem;
      color: #e5c185;
      opacity: 0.5;
    }

    &__container {
      display: flex;
      flex-direction: column;
      gap: 2rem;
    }

    &__pagination {
      display: flex;
      margin-top: 2rem;
      justify-content: space-between;
    }

    &__numberPage {
      display: flex;
      align-items: center;
    }
  }
`;

export default AnimeCardListStyled;
