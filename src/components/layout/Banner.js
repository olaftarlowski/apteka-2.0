import { bannerImg, logoSnap } from "../../assets";

import { BannerWrapper } from "../../styled-components/style";

const Banner = () => {
  return (
    <BannerWrapper>
      <img
        src={bannerImg}
        className="banner-img"
        alt="Pełne zdjęcie apteki z widocznym miejscem do parkowania samochodu"
      />
      <div className="banner-content">
        <img
          src={logoSnap}
          className="banner-logo"
          alt="Logo apteki z informacją o całotygodniowym otwarciu oraz adresie"
        />
      </div>

      
    </BannerWrapper>
  );
};

export default Banner;
