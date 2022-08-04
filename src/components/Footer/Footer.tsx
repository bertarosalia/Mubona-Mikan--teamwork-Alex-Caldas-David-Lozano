import FooterStyled from "./FooterStyled";

const Footer = (): JSX.Element => {
  return (
    <FooterStyled>
      <div className="footer__RRSS">
        <a href="https://discord.com/">
          <img src="./images/iconDiscord.svg" alt="Icono Discord" />
        </a>
        <a href="https://www.facebook.com/">
          <img src="./images/iconFacebook.svg" alt="Icono Facebook" />
        </a>
        <a href="https://www.instagram.com/">
          <img src="./images/iconInstagram.svg" alt="Icono Instagram" />
        </a>
        <a href="https://twitter.com/">
          <img src="./images/iconTwitter.svg" alt="Icono Twitter" />
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
        Mubōna mikan is a property of Mandarinas Temerarias S.A.L. ©2022
        <br></br>All rights reserved
      </p>
    </FooterStyled>
  );
};

export default Footer;
