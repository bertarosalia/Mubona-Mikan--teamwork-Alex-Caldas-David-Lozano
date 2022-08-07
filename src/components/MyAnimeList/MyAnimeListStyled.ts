import styled from "styled-components";

const MyAnimeListStyled = styled.main`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1rem;

  .my-anime-list__title {
    font-size: 2em;
    color: #e5c185;
  }
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
`;

export default MyAnimeListStyled;
