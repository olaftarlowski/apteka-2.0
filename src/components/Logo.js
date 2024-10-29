import { Link } from "react-router-dom";
import { logoImg } from "../assets";

import { LogoWrapper } from "../styled-components/style";

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/" className="main-logo">
        <img src={logoImg} alt="Logo Apteki Prywatnej" />
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
