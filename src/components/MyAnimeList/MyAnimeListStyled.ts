import styled from "styled-components";

const MyAnimeListStyled = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-height: 10rem;

  .button_add_new {
    position: absolute;
    top: 128px;
    right: 10px;
    border: 0;
    font-size: 40px;
    font-weight: 500;
    color: #e5c185;
    background-color: transparent;
    cursor: pointer;
  }
  .my-anime-list {
    &__title {
      font-size: 2rem;
      color: #e5c185;
    }

    &__container {
      height: calc(100vh - 460px);
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 2rem;
    }
  }
`;

export default MyAnimeListStyled;
