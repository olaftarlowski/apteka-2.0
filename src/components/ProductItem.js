import { ProductItemWrapper } from "../styled-components/style";

const ProductItem = ({ data }) => {
  const { name, img } = data;

  return (
    <ProductItemWrapper>
      <h2 className="product-headline">{name}</h2>
      <div className="product-image">
        <img
          className="product-image__element"
          src={img}
          alt={`Opakowanie leku ${name}`}
        />
      </div>
    </ProductItemWrapper>
  );
};

export default ProductItem;
