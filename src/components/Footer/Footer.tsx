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

  p {
    margin: 0;
    text-align: center;
  }

  img {
    width: auto;
    height: 100%;
  }
  .footer {
    &__RRSS, &__stores {
      width: 100%;
      height: 3rem;
      display: flex;
      flex-direction: row;
      justify-content: space-around;
    }
   
    }
  }
`;

const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <div className="footer__RRSS">
        <img src="./images/iconDiscord.png" alt="Icono Discord" />
        <img src="./images/iconFacebook.png" alt="Icono Facebook" />
        <img src="./images/iconInstagram.png" alt="Icono Instagram" />
        <img src="./images/iconTwitter.png" alt="Icono Twitter" />
      </div>
      <div className="footer__stores">
        <img src="./images/iconAppleStore.svg" alt="Icono Apple Sotre" />
        <img src="./images/iconGooglePlay.svg" alt="Icono Google Play" />
      </div>
      <p>
        Mubōna mikan is a property of Mandarinas Temerarias S.AL. ©2022
        <br></br>All rights reserved
      </p>
    </FooterStyled>
  );
};

export default Footer;
