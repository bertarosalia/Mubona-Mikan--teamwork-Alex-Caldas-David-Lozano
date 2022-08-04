import styled from "styled-components";

const NavigationStyled = styled.section`
  .list-animes {
    display: flex;
    flex-direction: row;
    list-style: none;
    gap: 2rem;
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
