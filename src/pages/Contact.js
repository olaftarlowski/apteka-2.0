import { HiLocationMarker, HiOutlineInformationCircle } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
// import { LeafletMap } from "../components";

import { ContactWrapper } from "../styled-components/style";

const Contact = () => {
  const callHandler = () => {
    window.open("tel:+172218183");
  };

  return (
    <ContactWrapper>
      <div className="contact__headline">
        <h2>APTEKA PRYWATNA - MAŁGORZATA RZEGOCKA</h2>
      </div>
      <div className="contact__content">
        <div className="contact__infos">
          <p className="content__line-parag">
            <a
              href="https://ktomalek.pl/szukam/leku/ropczyce/5Uv53-NqgXk/ih5R"
              target="_blank"
              rel="noreferrer"
            >
              <HiLocationMarker />
              Ropczyce, Ks. Kard. Stefana Wyszyńskiego 45
            </a>
          </p>
          <p className="content__line-parag" onTouchStart={callHandler}>
            <BsFillTelephoneFill />+ 17 221 81 83
          </p>
          <p className="content__line-parag">
            <HiOutlineInformationCircle />
            Id apteki: 995&nbsp;828
          </p>
          <div>
            <p className="content__day-parag">
              <span>poniedziałek - piątek</span>
              <b>
                <BiTime />&nbsp; 07:30 – 20:30
              </b>
            </p>
            <p className="content__day-parag">
              <span>sobota</span>
              <b>
                <BiTime />&nbsp; 08:30 – 20:30
              </b>
            </p>
            <p className="content__day-parag">
              <span>niedziela</span>
              <b>
                <BiTime />&nbsp; 09:00 – 19:00
              </b>
            </p>
          </div>
        </div>
        {/* <LeafletMap /> */}
      </div>
    </ContactWrapper>
  );
};

export default Contact;
