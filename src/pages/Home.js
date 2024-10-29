// import { LeafletMap } from "../components";
import { KeyFeatures } from "../components/layout";
import { imageShelf } from "../assets";

import { HomeWrapper } from "../styled-components/style";

const Home = () => {
  return (
    <>
      <HomeWrapper>
        <div className="home-info">
          <h1>
            Apteka Prywatna w Ropczycach. <span>Całotygodniowa</span>
          </h1>
          <ul>
            <li>
              <b>Pon - pt:</b> <span>07:30 - 20:30</span>
            </li>
            <li>
              <b>Sobota:</b> <span>08:30 - 20:30</span>
            </li>
            <li>
              <b>Niedziela:</b> <span> 09:00 - 19:00</span>
            </li>
          </ul>
        </div>
        <h2 className="home-headline home-spacing">Witamy na stronie naszej Apteki</h2>
        <div className="home-content">
          <p>
            <span className="home-content__span">
              <img
                src={imageShelf}
                alt="Półki ze antycznymi szklanymi butelkami na surowce do receptury"
                className="home-content__image"
              />
            </span>
            <span>
              <b>Nasza apteka w Ropczycach powstała w 1997 roku.</b> Mieścimy
              się na <b>ulicy Wyszyńskiego 45.</b>
            </span>
          </p>
          <p>
            <b>Od 25 lat</b> - personel zatrudniony w naszej aptece służy
            Państwu swoją wiedzą, doświadczeniem nabytym przez lata praca oraz
            zaangażowaniem. Nasi pracownicy ukończyli najlepsze uczelnie
            medyczne w kraju, ciągłym szkoleniem oraz wiedzą nabytą z innych
            dziedzin nauki. Dzięki swojej wiedzy staramy się przezwyciężyć
            szeroko pojęte problemy zdrowotne.
          </p>
          <KeyFeatures />
          <p>
            Za pośrednictwem strony internetowej, pragniemy poinformować Państwa
            o obecnych nowościach w naszej aptece. W razie jakichkolwiek pytań
            proszę kontaktować się telefonicznie lub przyjechać osobiście.
            Telefon i adres znajdą Państwo w zakładce Kontakt
          </p>
        </div>
        <h3 className="home-spacing">Tu jesteśmy</h3>
        {/* <LeafletMap /> */}
        <h3 className="home-btm-headline">Zapraszamy do naszej apteki </h3>
      </HomeWrapper>
    </>
  );
};

export default Home;
