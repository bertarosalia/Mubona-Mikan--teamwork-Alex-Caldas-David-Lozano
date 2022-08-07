import styled from "styled-components";

const AnimeCardStyled = styled.article`
  width: 100%;

  @media (min-width: 450px) {
    width: auto;
  }

  .not-detailed {
    box-sizing: border-box;
    width: 100%;
    height: 170px;
    border-radius: 20px;
    box-shadow: 0 0 10px grey;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-wrap: wrap;
    overflow: hidden;

    @media (min-width: 450px) {
      width: 400px;
    }

    .animeCard_image-frame {
      height: 100%;
      width: fit-content;
      img {
        height: auto;
        width: 120px;
      }
    }
    h3 {
      width: calc(100% - 140px);
      margin: 10px 0;
      padding: 0 10px;
    }
    .animeCard_footer {
      width: calc(100% - 140px);
      margin: 10px;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;

      .info {
        text-align: left;
        color: grey;
        display: flex;
        flex-direction: column;
      }
    }
  }
  .detailed {
    box-sizing: border-box;
    padding: 20px;
    width: 100%;
    min-width: 330px;
    display: flex;
    flex-direction: column;
    gap: 15px;

    h3 {
      order: 1;
      width: 100%;
    }
    .animeCard_image-frame {
      order: 2;
      width: 100%;
      height: 100%;
      display: grid;
      place-items: center;
      img {
        width: auto;
        height: auto;
        border-radius: 20px;
      }
    }
    .animeCard_footer {
      margin: 10px 0;
      height: 100px;
      width: 100%;
      order: 3;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      align-items: flex-start;
      justify-content: space-between;
    }
    .info {
      width: 30%;
      display: flex;
      flex-direction: column;
    }
    .animeCard_footer_score_button {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      justify-content: space-between;
      align-items: center;
      gap: 20px;
    }
    .animeCard_footer_score {
      display: flex;
      flex-direction: row;
      flex-wrap: nowrap;
      gap: 10px;
      justify-content: center;
      align-items: baseline;
      font-weight: 700;
      font-size: 20px;
    }
    .animeCard_synapsis {
      order: 4;
    }
  }

  @media (min-width: 490px) and (max-width: 700px) {
    .detailed {
      flex-direction: row;
      flex-wrap: wrap;
      .animeCard_image-frame {
        width: fit-content;
      }
      .animeCard_footer {
        width: calc(100% - 240px);
        height: auto;
        flex-direction: column;
        flex-wrap: nowrap;
      }
      .animeCard_footer_score_button {
        width: 100%;
      }
      .animeCard_synapsis {
        width: 100%;
      }
    }
  }
  @media (min-width: 700px) and (max-width: 840px) {
    .detailed {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: space-between;
      .animeCard_image-frame {
        width: fit-content;
      }
      .animeCard_footer {
        width: calc(100% - 240px);
        height: auto;
        flex-direction: column;
        flex-wrap: nowrap;
      }
      .animeCard_footer_score_button {
        width: 100%;
      }
      .animeCard_synapsis {
        width: 100%;
        height: 320px;
        overflow: scroll;
      }
    }
  }
  @media (min-width: 840px) {
    .detailed {
      height: 390px;
      flex-direction: column;
      flex-wrap: wrap;
      justify-content: flex-start;
      .animeCard_image-frame {
        order: 1;
        width: fit-content;
        height: fit-content;
      }
      h3 {
        margin: 0;
        width: calc(100% - 240px);
        height: fit-content;
      }
      .animeCard_footer {
        margin: 0;
        width: calc(100% - 240px);
        height: fit-content;
        flex-direction: row;
        flex-wrap: nowrap;
      }
      .animeCard_synapsis {
        width: calc(100% - 240px);
        height: calc(100% - 115px);
        overflow: hidden;
      }
    }
  }
`;

export default AnimeCardStyled;
