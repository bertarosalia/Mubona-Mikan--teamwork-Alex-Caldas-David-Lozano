import HeaderStyled from "./HeaderStyles";

const Header = (): JSX.Element => {
  let isOpen = false;

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
        src={`./images/${!isOpen ? "Menu-open.svg" : "Menu-close.svg"}`}
      ></img>
    </HeaderStyled>
  );
};

export default Header;
