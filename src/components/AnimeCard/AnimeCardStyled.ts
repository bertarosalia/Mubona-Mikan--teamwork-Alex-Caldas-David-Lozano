import styled from "styled-components";

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
    height: 100%;
    img {
      height: auto;
      width: 120px;
    }
  }
  .animeCard_info {
    padding: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    h3 {
      margin: 0;
    }
  }
  .animeCard_footer {
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
`;

export default ArticleStyled;
