import HeaderStyled from "./HeaderStyles";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <h1>
        <img
          className="header__image"
          alt="Mubona Mikan title"
          src="./images/Mubona.svg"
        ></img>
      </h1>
      <img
        className="header__icon"
        alt="Menu icon"
        src="./images/Menu-open.svg"
      ></img>
    </HeaderStyled>
  );
};

export default Header;
