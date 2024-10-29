import React from "react";
import { MenuLinksWrapper } from "../styled-components/style";

const MenuLinks = () => {
  return (
    <MenuLinksWrapper>
      <h3>Przydatne linki</h3>
      <div className="menu-links">
        <a href="https://www.nfz.gov.pl/" rel="noreferrer" target="_blank">
          Narodowy Fundusz Zdrowia
        </a>
        <a href="https://www.gov.pl/web/gif" rel="noreferrer" target="_blank">
          Główny Inspektorat Farmaceutyczny
        </a>
        <a href="https://www.nia.org.pl/" rel="noreferrer" target="_blank">
          Naczelna Izba Aptekarska
        </a>
      </div>
    </MenuLinksWrapper>
  );
};

export default MenuLinks;
