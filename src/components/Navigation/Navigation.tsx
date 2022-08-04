import { NavLink } from "react-router-dom";
import NavigationStyled from "./NavigationStyled";

const Navigation = (): JSX.Element => (
  <NavigationStyled>
    <nav className="navigation-anime">
      <ul className="list-animes">
        <li>
          <NavLink to="/">News</NavLink>
        </li>
        <li>
          <NavLink to="/">Search</NavLink>
        </li>
        <li>
          <NavLink to="/AnimeCardList">Animes</NavLink>
        </li>
        <li>
          <NavLink to="*"></NavLink>
        </li>
      </ul>
    </nav>
  </NavigationStyled>
);

export default Navigation;
