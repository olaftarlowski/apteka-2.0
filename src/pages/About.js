import { imageMain, imageMain2 } from "../assets";

import { AboutWrapper } from "../styled-components/style";

const About = () => {
  return (
    <AboutWrapper>
      <h2>Nasza apteka</h2>
      <div className="about__content">
        <div className="about__text">
          <h3>Coś o nas</h3>
          <p>
            Wychodząc na przeciw oczekiwaniom pacjentów pracujemy cały tydzień.
            Kierujemy się szacunkiem jak i profesjonalnym podejściem do
            pacjenta. Mamy szeroki asortyment leków, suplementów oraz
            kosmetyków. Przestronny parking i wjazd dla osób z utrudnieniami
            ułatwia naszym pacjentom wizyty.
          </p>
        </div>
        <div className="about__image">
          <img
            src={imageMain}
            alt="Zdjęcie pełnego budynku apteki. Widoczny napis apteka. Widoczny jest także wjazd dla wózków."
          />
        </div>
      </div>
      <br />
      <div className="about__content about__content2">
        <div className="about__image">
          <img
            src={imageMain2}
            alt="Zdjęcie pełnego budynku apteki z daleszej perspektywy. Widoczny napis apteka. Widoczne jest wejście łągodne dla wózków. Perpsektywa ukazuje dużo miejsca do parkowania."
          />
        </div>
        <div className="about__text">
          <h3>Więcej o nas</h3>
          <p>
            Apteka działa od 1997 roku przy ulicy Wyszyńskiego 45. Personel
            służy państwu swoją wiedzą, doświadczeniem oraz zaangażowaniem.
            Pracownicy ciągle się szkolą podnosząc swoje kwalifikacje, aby
            jeszcze lepiej służyć pacjentom. Profesjonalizm i szacunek to nasze
            podstawowe wartości.ń
          </p>
        </div>
      </div>
      <div className="about__content">
        <h4>Zapraszamy!</h4>
      </div>
    </AboutWrapper>
  );
};

export default About;
