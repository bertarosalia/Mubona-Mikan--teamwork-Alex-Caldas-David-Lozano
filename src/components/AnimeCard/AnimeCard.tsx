import styled from "styled-components";
import Button from "../Button/Button";
import { AnimeData } from "../../types/interfaces";

const ArticleStyled = styled.article`
  box-sizing: border-box;
  height: 160px;
  border-radius: 20px;
  box-shadow: 3px 3px 10px grey;
  display: flex;
  flex-direction: row;
  object-fit: cover;
  overflow: hidden;

  .animeCard_image-frame {
    width: 200px;
    height: 100%;

    img {
      height: 100%;
      width: auto;
    }
  }
  .animeCard_info {
    padding: 10px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3,
    p {
      margin: 0;
    }
  }
  .animeCard_footer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .score {
      display: flex;
      align-items: center;
      gap: 5px;
      div {
        height: 30px;
        width: 30px;
      }
      img {
        width: auto;
        height: 100%;
      }
    }
    .info {
      text-align: center;
      color: grey;
      display: flex;
      flex-direction: column;
    }
  }
`;

interface AnimeCardProps {
  animeInfo: AnimeData;
}

const AnimeCard = ({ animeInfo }: AnimeCardProps): JSX.Element => {
  return (
    <>
      <ArticleStyled>
        <div className="animeCard_image-frame">
          <img src="images/testAnimeImage.png" alt="Spy X Family" />
        </div>
        <div className="animeCard_info">
          <h3>Shingeky no Kyogin: Quien Eren y que hace en Mikasa</h3>
          <p></p>
          <div className="animeCard_footer">
            <div className="score">
              <div>
                <img src="images/iconStar.png" alt="Icon Star" />
              </div>
              <span>
                <b>9,75</b>
              </span>
            </div>
            <div className="info">
              <span>Tv Series</span>
              <span>24 Chapters</span>
            </div>
            <Button text="Add" actionOnClick={() => console.log("clicked")} />
          </div>
        </div>
      </ArticleStyled>
    </>
  );
};

export default AnimeCard;
