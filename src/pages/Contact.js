import { HiLocationMarker, HiOutlineInformationCircle } from "react-icons/hi";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiTime } from "react-icons/bi";
// import { LeafletMap } from "../components";
import LeafletMap from "../components/LeafletMap";

import { ContactWrapper } from "../styled-components/style";

const Contact = () => {
  const callHandler = () => {
    window.open("tel:+172214245");
  };

  return (
    <ContactWrapper>
      <div className="contact__headline">
        <h2>Apteka Prywatna mgr farm. Urszula Siuta mgr farm. Małgorzata Rzegocka</h2>
      </div>
      <div className="contact__content">
        <div className="contact__infos">
          <p className="content__line-parag">
            <a
              href="https://ktomalek.pl/apteki/apteka-prywatna-mgr-farm-urszula-siuda-mgr-farm-malgorzata-rzegocka/wielopole-skrzynskie/an-874648"
              target="_blank"
              rel="noreferrer"
            >
              <HiLocationMarker />
              Wielopole Skrzyńskie 260
            </a>
          </p>
          <p className="content__line-parag" onTouchStart={callHandler}>
            <BsFillTelephoneFill />+ 17 221 42 45
          </p>
          <p className="content__line-parag">
            <HiOutlineInformationCircle />
            Id apteki: 874&nbsp;648
          </p>
          <div>
            <p className="content__day-parag">
              <span>poniedziałek - piątek</span>
              <b>
                <BiTime />&nbsp; 07:00 – 18:00
              </b>
            </p>
            <p className="content__day-parag">
              <span>sobota</span>
              <b>
                <BiTime />&nbsp; 07:30 – 15:30
              </b>
            </p>
            <p className="content__day-parag">
              <span>niedziela</span>
              <b>
                <BiTime />&nbsp; 07:30 – 15:30
              </b>
            </p>
          </div>
        </div>
        <LeafletMap />
      </div>
    </ContactWrapper>
  );
};

export default Contact;
