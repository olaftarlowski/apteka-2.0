import { Link } from "react-router-dom";
import { newLogoImg } from "../assets";
import { LogoWrapper } from "../styled-components/style";

const Logo = () => {
  return (
    <LogoWrapper>
      <Link to="/" className="main-logo">
        <img src={newLogoImg} alt="Logo Apteki Prywatnej" />
      </Link>
    </LogoWrapper>
  );
};

export default Logo;
