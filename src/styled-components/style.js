import styled from "styled-components";

export const AppContentWrapper = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  text-align: center;
  background-color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: calc(10px + 2vmin);
  color: #000;
`;

export const HeaderWrapper = styled.header`
  background: #f8fafd;
  width: 100%;
  border: 1px solid #d2d2d2;

  position: sticky;
  top: 0;
  right: 0;
  left: 0;
  z-index: 10000;

  .header__content {
    height: 100%;
    padding: 0 48px;
    color: #000;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
    z-index: 100;

    .ReactCollapse--collapse {
      position: absolute;
      top: ${(props) => props.headerHeight + 1}px;
      right: 0;
      transition: height 500ms;
    }

    .logosDIV {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;

      @media (max-width: 768px) {
        width: 100%;
      }
    }

    @media (max-width: 768px) {
      padding: 0 12px;
      flex-direction: column;
    }
  }
`;

export const NavbarWrapper = styled.nav`
  width: 100%;
  background-color: #f8fafd;
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    padding: 0;
    display: flex;
    margin: 0;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    li {
      padding: 0 6px;
      display: flex;
      align-items: flex-end;
      justify-content: center;
      width: 100%;

      @media (max-width: 768px) {
        display: block;
      }

      a {
        min-width: 120px;
        white-space: nowrap;
        display: block;
        text-transform: capitalize;
        text-decoration: none;
        color: inherit;
        padding: 4px 6px;
        transition: 0.3s ease all;
        border-bottom: 1px solid #d2d2d2;

        @media (max-width: 768px) {
          font-size: 1.5rem;
          padding: 0.5rem 2rem;
        }

        @media (max-width: 265px) {
          font-size: 1.3rem;
          padding: 0.5rem 1rem;
        }

        &:hover,
        &.active {
          color: #3861fb;
          border-bottom: 1px solid #3861fb;
        }
      }
    }
  }
`;

export const MainWrapper = styled.main`
  padding: 8px;
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: row;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const FooterWrapper = styled.footer`
  background: #f8fafd;
  border-top: 2px solid #eff2f5;
  padding: 0 48px;
  font-size: 1.4rem;
  color: #777;
  width: 100%;

  @media (max-width: 768px) {
    padding: 0 12px;
  }

  .footer__container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer__logo-box {
      text-align: center;
      color: #000;
      font-size: 2.5rem;
      font-weight: 700;
    }
    .footer__info {
      display: block;

      .footer__list {
        text-align: center;
        list-style: none;
        padding-inline-start: 0;

        .footer__item {
          display: inline-block;

          &:not(:last-child) {
            margin-right: 1.5rem;
          }

          .footer__link {
            &:link,
            &:visited {
              color: #000;
              text-decoration: none;
              display: inline-block;
              transition: all 0.2s;
            }

            &:hover,
            &:active {
              color: #3861fb;
            }
          }
        }
      }
    }
  }

  .footer__copyright {
    text-align: right;
    font-size: 0.8rem;
    border-top: 1px solid #d5d9dc;
  }

  .footer__creator {
    text-align: right;
    font-size: 0.8rem;
    margin-bottom: 8px;

    address {
      a {
        text-decoration: none;
        color: #333;
      }
    }
  }
`;

export const LogoWrapper = styled.div`
  display: block;
  width: 80px;
  height: 80px;

  .main-logo {
    width: 100%;
    height: 100%;
    display: inline-block;

    img {
      width: 100%;
      height: auto;
    }
  }
`;

export const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  .leaflet-container {
    height: 600px;
    width: 600px;

    @media (max-width: 622px) {
      height: 400px;
      width: 400px;
    }

    @media (max-width: 405px) {
      height: 300px;
      width: 300px;
    }

    @media (max-width: 305px) {
      height: 200px;
      width: 200px;
    }

    @media (max-width: 205px) {
      height: 150px;
      width: 150px;
    }
  }
`;

export const MenuLinksWrapper = styled.aside`
  display: flex;
  flex-direction: column;
  width: 70%;

  .menu-links {
    display: flex;
    flex-direction: column;
    text-align: left;
    font-size: 1rem;

    a {
      color: #949494;
      text-decoration: none;
      transition: 0.3s ease all;

      &:hover {
        color: #eb6a00;
        text-decoration: underline;
      }
    }
  }
`;

export const BannerWrapper = styled.div`
  width: 100%;
  height: auto;
  position: relative;

  @media (max-width: 476px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .banner-content {
    color: #fff;
    text-align: left;
    z-index: 10;
    position: absolute;
    inset: 0;
    padding-left: 48px;
    padding-top: 48px;
    width: 300px;
    height: 150px;
    display: flex;
    justify-content: center;

    .banner-logo {
      max-width: 280px;
      border-radius: 6px;

      box-shadow: 8px 7px 20px -7px rgba(66, 68, 90, 1);

      @media (max-width: 476px) {
        width: 100%;
      }
    }

    @media (max-width: 810px) {
      padding: 24px;
    }

    @media (max-width: 640px) {
      position: relative;
      width: 100%;
      height: auto;
      left: 0;
    }

    @media (max-width: 254px) {
      padding: 6px;
    }
  }

  .banner-img {
    width: 100%;
    height: auto;
    filter: brightness(60%);
  }
`;

export const KeyFeaturesWrapper = styled.section`
  color: #000;
  width: 100%;

  .features-headline {
    border-top: 1px solid #d5d9dc;
    text-align: center;
    padding: 24px 0 12px 0;
  }

  .features-container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    @media (max-width: 768px) {
      text-align: center;
      flex-direction: column;
      align-items: center;
    }
  }
`;

export const KeyFeaturesItemWrapper = styled.div`
  border-radius: 24px;
  background-color: ${(props) => props.bgColor};
  margin: 2px;
  padding: 12px;
  color: #fff;
  box-shadow: 7px 5px 25px -5px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 7px 5px 25px -5px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 7px 5px 25px -5px rgba(0, 0, 0, 0.75);

  @media (max-width: 768px) {
    width: 60%;
  }

  @media (max-width: 540px) {
    width: 80%;
  }

  @media (max-width: 240px) {
    width: 95%;
  }

  h3 {
    text-transform: uppercase;
    font-size: 1.4rem;
    margin: 0;

    @media (max-width: 354px) {
      font-size: 1rem;
    }
  }

  p {
    font-size: 1rem;
    margin: 0;
  }
`;

export const HomeWrapper = styled.section`
  margin-right: 8px;

  @media (max-width: 768px) {
    border-right: none;
    margin-right: 0;
  }
  .home-info {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin: 50px 0 60px 0;

    @media (max-width: 476px) {
      flex-direction: column;
      align-items: center;
    }

    h1 {
      width: 40%;
      font-size: 2rem;
      margin: 2px 0;

      span {
        @media (max-width: 200px) {
          word-break: break-all;
        }
      }

      @media (max-width: 1140px) {
        font-size: 1.4rem;
      }

      @media (max-width: 810px) {
        padding: 12px;
        text-align: center;
        font-size: 1.4rem;
      }

      @media (max-width: 476px) {
        width: 100%;
      }

      @media (max-width: 322px) {
        width: 100%;
        font-size: 1rem;
      }

      @media (max-width: 200px) {
        font-size: 1rem;
      }
    }

    ul {
      margin: 2px 0;
      text-align: left;
      font-size: 1.2rem;
      padding: 0;
      width: 240px;

      li {
        display: flex;
        justify-content: space-between;
      }

      @media (max-width: 322px) {
        font-size: 0.8rem;
      }
    }
  }

  .home-headline {
    text-align: center;
  }

  .home-spacing {
    margin: 46px 0;
  }

  .home-content {
    width: 80%;
    margin: 0 auto;
    text-align: justify;

    @media (max-width: 240px) {
      width: 95%;
    }

    .home-content__span {
      float: left;
      margin: 6px 14px;

      .home-content__image {
        width: 300px;
        height: auto;
        margin-right: 12px;

        @media (max-width: 576px) {
          width: 95%;
        }
      }
    }
  }
  .home-btm-headline {
    text-decoration: underline;
    font-weight: bold;
    font-style: italic;
  }
`;

export const AboutWrapper = styled.section`
  display: block;

  .about__content {
    border-top: 1px solid #d5d9dc;
    display: flex;
    flex-direction: row;
    text-align: left;

    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }

    .about__text,
    .about__image {
      width: 50%;
      text-align: justify;

      @media (max-width: 768px) {
        width: 90%;
      }
    }

    img {
      padding: 16px;
      width: 100%;
      height: auto;

      @media (max-width: 768px) {
        padding: 0;
      }
    }
  }

  .about__content2 {
    border-top: 1px solid #d5d9dc;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
  }
`;

export const ContactWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

  .contact__headline {
    font-size: 1.4rem;
    margin: 40px 0;

    @media (max-width: 768px) {
      font-size: 1.1rem;
    }

    @media (max-width: 434px) {
      font-size: 0.8rem;
    }
  }

  .contact__content {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    width: 80%;
    margin: 0 auto;
    text-align: left;

    @media (max-width: 768px) {
      flex-direction: column;
    }

    .contact__infos {
      padding-right: 12px;

      .content__line-parag {
        display: flex;
        flex-direction: row;
        align-items: center;
        color: #2c729b;
        margin: 10px 0;

        svg {
          width: 1.1em;
          height: 1.1em;
        }

        a {
          text-decoration: none;

          &:visited {
            color: #2c729b;
          }
          &:hover {
            text-decoration: underline;
          }
        }
      }
      .content__day-parag {
        display: flex;
        flex-direction: column;
        margin: 10px 0;

        span {
          text-transform: capitalize;
        }
        b {
          color: #278112;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
      }
    }
  }
`;

export const ProductsWrapper = styled.section`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 24px;

  .products-content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
    padding: 6px;

    @media (max-width: 1034px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 276px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
`;

export const ProductItemWrapper = styled.div`
  background-color: white;
  border-radius: 24px;
  border: 1px solid #d2d2d2;
  color: #000;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  padding: 8px;
  width: 240px;

  @media (max-width: 534px) {
    width: 100%;
    height: auto;
  }

  .product-headline {
    font-size: 1.6rem;
  }

  .product-image {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    .product-image__element {
      width: 230px;

      @media (max-width: 768px) {
        width: 100%;
        height: auto;
      }
    }
  }
`;
