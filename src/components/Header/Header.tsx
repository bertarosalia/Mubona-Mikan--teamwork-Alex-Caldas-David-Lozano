import HeaderStyled from "./HeaderStyled";

const Header = (): JSX.Element => {
  return (
    <HeaderStyled>
      <h1>
        <img
          className="header__image"
          alt="Mubona Mikan title"
          height="25"
          width="218"
          src="./images/Mubona.svg"
        ></img>
      </h1>
      <button>
        <img
          className="header__icon"
          alt="Menu icon"
          height="24"
          width="22"
          src="./images/Menu-open.svg"
        ></img>
      </button>
    </HeaderStyled>
  );
};

export default Header;
