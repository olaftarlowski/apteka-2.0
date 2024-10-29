import { KeyFeaturesItemWrapper } from "../styled-components/style";

const KeyFeaturesItem = ({ data }) => {
  const { name, desc, icon, bgColor } = data;
  return (
    <KeyFeaturesItemWrapper bgColor={bgColor}>
      <h3>
        {name} {icon}
      </h3>
      <p>{desc}</p>
    </KeyFeaturesItemWrapper>
  );
};

export default KeyFeaturesItem;
