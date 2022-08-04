import styled from "styled-components";

const NavigationStyled = styled.section`
  .list-animes {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 2rem;
  }

  .list-animes__links {
    font-size: 1em;
    font-weight: bold;
    text-decoration: none;
  }

  .nav-links {
    text-decoration: none;
    color: #e5c185;
  }

  .navigation-anime {
    display: flex;
    background-color: #74a892;
    width: 100%;
    height: 3rem;
    justify-content: flex-end;
  }
`;
export default NavigationStyled;
