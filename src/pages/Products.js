import {
  bri60,
  bri90,
  eliquis25,
  eliquis5,
  forxiga5,
  forxiga10,
  pradaxa75,
  pradaxa150,
  xarelto15,
  xarelto20,
  xigduo,
} from "../assets/products-img";
import { ProductItem } from "../components";

import { ProductsWrapper } from "../styled-components/style";

const Products = () => {
  const productsData = [
    {
      name: "Brilique 60mg",
      img: bri60,
    },
    {
      name: "Brilique 90mg",
      img: bri90,
    },

    {
      name: "Eliquis 2,5mg",
      img: eliquis25,
    },
    {
      name: "Eliquis 5mg",
      img: eliquis5,
    },
    {
      name: "Forxiga 5mg",
      img: forxiga5,
    },
    {
      name: "Forxiga 10mg",
      img: forxiga10,
    },
    {
      name: "Pradaxa 75mg",
      img: pradaxa75,
    },
    {
      name: "Pradaxa 150mg",
      img: pradaxa150,
    },
    {
      name: "Xarelto 15mg",
      img: xarelto15,
    },
    {
      name: "Xarelto 20mg",
      img: xarelto20,
    },
    {
      name: "Xigduo",
      img: xigduo,
    },
  ];

  return (
    <ProductsWrapper>
      <h2>Nasze nowości</h2>
      <p>
        Ze względu na duże zainteresowanie pacjentów, wprowadzamy do naszej
        apteki następujące leki nierefundowane(100%).
      </p>
      <p>Zapraszamy do zapoznania się z naszą ofertą</p>
      <div className="products-content">
        {productsData.map((el) => {
          return <ProductItem key={`product-${el.name}`} data={el} />;
        })}
      </div>
    </ProductsWrapper>
  );
};

export default Products;
