import LeafletMap from "../components/LeafletMap";
import { KeyFeatures } from "../components/layout";
import { imageShelf } from "../assets";

import { HomeWrapper } from "../styled-components/style";
import ProductTabs from "../components/ProductTabs";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <div className="home-info">
          <h1>
            Apteka w Wielopolu Skrzyńskim. <br></br>
            <span>Czynna 7 dni w tygodniu</span>
          </h1>
          <ul>
            <li>
              <b>Poniedziałek</b> <span>07:00 - 20:00</span>
            </li>
            <hr />
            <li>
              <b>Wtorek</b> <span>07:00 - 20:00</span>
            </li>
            <hr />
            <li>
              <b>Środa</b> <span>07:00 - 20:00</span>
            </li>
            <hr />
            <li>
              <b>Czwartek</b> <span>07:00 - 20:00</span>
            </li>
            <hr />
            <li>
              <b>Piątek</b> <span>07:00 - 20:00</span>
            </li>
            <hr />
            <li className="weekend">
              <b>Sobota</b> <span>07:30 - 17:30</span>
            </li>
            <hr />
            <li className="weekend">
              <b>
                Niedziela <br /> i Święta
              </b>{" "}
              <span>08:00 - 17:30</span>
            </li>
          </ul>
        </div>
        <hr />
        <div>
          <p>
            <b>Pilna sprawa, a nasza apteka jest już nieczynna?</b>
          </p>
          <p>
            Prowadzimy także punkt w Ropczycach o dłuższych godzinach otwarcia
          </p>
          <p>
            Sprawdź:{" "}
            <a href="https://www.apteka-ropczyce.pl/" target="_blank">
              Apteka w Ropczycach
            </a>
          </p>
        </div>
        <hr />
        <ProductTabs />
        <h3 className="home-spacing">Tu jesteśmy</h3>
        <LeafletMap />
        <h3 className="home-btm-headline">Zapraszamy do naszej apteki </h3>
      </HomeWrapper>
    </>
  );
};

export default Home;
