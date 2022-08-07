import styled from "styled-components";

const MyAnimeFormStyled = styled.div`
  padding: 1rem;
  box-sizing: border-box;
  position: fixed;
  top: 96px;
  height: calc(100vh - 96px);
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  overflow: scroll;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    div {
      width: 100%;
    }
  }

  .new-anime__group {
    margin: 10px 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
  }
  label {
    font-size: 20px;
    margin: 0 0 5px 0;
    font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
      "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
      "Helvetica Neue", sans-serif;
    color: #ff6b00;
  }
  input,
  select {
    padding: 10px;
    border: 2px solid #ff6b00;
    border-radius: 10px;
    background-color: white;

    &:focus {
      outline: 3px solid #ff6b00;
    }
  }

  .new-anime__group--end {
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    button[type="button"] {
      border: none;
      border-radius: 3rem;
      padding: 0.7rem 1rem;
      font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      font-size: 1rem;
      font-weight: bold;
      color: #fff;
      text-align: center;
      background-color: #ff2e00;
      cursor: pointer;
    }

    button[type="submit"] {
      border: none;
      border-radius: 3rem;
      padding: 0.7rem 1rem;
      font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
        "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
        "Helvetica Neue", sans-serif;
      font-size: 1rem;
      font-weight: bold;
      color: #fff;
      text-align: center;
      background-color: #4aac0e;
      cursor: pointer;
    }
  }
`;

export default MyAnimeFormStyled;
