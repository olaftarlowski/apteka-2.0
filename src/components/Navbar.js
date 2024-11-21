import { NavLink } from "react-router-dom";
import { NavbarWrapper } from "../styled-components/style";
import useMobile from "./hooks/useMobile";

const Navbar = ({ setIsNavExpanded }) => {
  const isMobile = useMobile();
  const activeClassName = "active";

  const navbarItems = [
    { name: "strona główna", to: "/" },
    { name: "o nas", to: "/o-nas" },
    { name: "produkty", to: "/nowosci" },
    { name: "kontakt", to: "/kontakt" },
    { name: "apteka Wielopole", to: "https://www.apteka-wielopole.pl/" },
  ];

  const expandNavHandler = () => {
    if (!isMobile) {
      return;
    }
    setIsNavExpanded((e) => !e);
  };

  return (
    <NavbarWrapper>
      <ul>
        {navbarItems.map((item) => {
          return (
            <li key={`navbar-${item.name}`} onClick={expandNavHandler}>
              <NavLink
                target={`${
                  item.name === "apteka Wielopole" ? "_blank" : "_self"
                }`}
                to={item.to}
                className={({ isActive }) =>
                  isActive ? activeClassName : undefined
                }
              >
                {item.name}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </NavbarWrapper>
  );
};

export default Navbar;
