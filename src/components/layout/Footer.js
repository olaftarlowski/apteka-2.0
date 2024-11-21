import { Link } from "react-router-dom";
import { Logo } from "../";

import { FooterWrapper } from "../../styled-components/style";

const Footer = () => {
  return (
    <FooterWrapper className="footer">
      <div className="footer__container">
        <Logo />
        <div className="footer__info">
          <ul className="footer__list">
            <li className="footer__item">
              <Link className="footer__link" to="/o-nas">
                O nas
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer__copyright">
        <p>
        Apteka Prywatna mgr farm. Urszula Siuta mgr farm. Małgorzata Rzegocka<br></br> Wielopole Skrzyńskie 260, 39-110 Wielopole Skrzyńskie
        </p>
        <p> NIP 8180002736</p>
      </div>
      <div className="footer__copyright">
        <p>Copyright &copy; 2024 Apteka Prywatna. All rights reserved.</p>
      </div>
      <div className="footer__creator">
        <address>
          Projekt i wykonanie:{" "}
          <a href="mailto:olaf.tarlowski@gmail.com">Olaf Tarłowski</a>
        </address>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
