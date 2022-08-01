import styled from "styled-components";

const FooterStyled = styled.footer`
  border: 0;
  padding: 1rem;
  width: 100vw;
  height: 15rem;

  box-sizing: border-box;
  position: absolute;
  bottom: 0;

  background-color: #008585;
  color: white;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  p {
    margin: 0;
    text-align: center;
  }
  a,
  img {
    width: auto;
    height: 100%;
  }
  .footer {
    &__RRSS,
    &__stores {
      width: 100%;
      max-width: 450px;
      height: 3rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
  }
`;

const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <div className="footer__RRSS">
        <a href="https://discord.com/">
          <img src="./images/iconDiscord.png" alt="Icono Discord" />
        </a>
        <a href="https://www.facebook.com/">
          <img src="./images/iconFacebook.png" alt="Icono Facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="./images/iconInstagram.png" alt="Icono Instagram" />
        </a>
        <a href="https://twitter.com/">
          <img src="./images/iconTwitter.png" alt="Icono Twitter" />
        </a>
      </div>
      <div className="footer__stores">
        <a href="https://www.apple.com/app-store/   ">
          <img src="./images/iconAppleStore.svg" alt="Icono Apple Sotre" />
        </a>
        <a href="https://play.google.com/store/games">
          <img src="./images/iconGooglePlay.svg" alt="Icono Google Play" />
        </a>
      </div>
      <p>
        Mubōna mikan is a property of Mandarinas Temerarias S.AL. ©2022
        <br></br>All rights reserved
      </p>
    </FooterStyled>
  );
};

export default Footer;
