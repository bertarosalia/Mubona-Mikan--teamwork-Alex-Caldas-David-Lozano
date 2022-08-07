import styled from "styled-components";

const MyAnimeListStyled = styled.main`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  min-height: 10rem;

  .button_add_new {
    width: 40px;
    height: 40px;
    border-radius: 50px;
    position: absolute;
    line-height: 0;
    top: 128px;
    right: 10px;
    border: 0;
    font-size: 40px;
    font-weight: 500;
    color: #e5c185;
    background-color: white;
    cursor: pointer;
  }
  .my-anime-list {
    &__title {
      font-size: 2rem;
      color: #e5c185;
    }

    &__container {
      min-height: calc(100vh - 460px);
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-around;
      gap: 2rem;
    }
  }

  input {
    border: 1px solid #ff6b00;
  }
`;

export default MyAnimeListStyled;
