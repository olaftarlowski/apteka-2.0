import { useState } from "react";
import { FaLeaf } from "react-icons/fa";
import { AiOutlineHeart, AiOutlineUsergroupAdd } from "react-icons/ai";
import { KeyFeaturesItem } from "../";

import { KeyFeaturesWrapper } from "../../styled-components/style";

const KeyFeatures = () => {
  const [features] = useState([
    {
      name: "Zdrowie",
      desc: "Zdrowie to nasz największy skarb",
      bgColor: "#ff8c00",
      icon: <AiOutlineHeart />,
    },
    {
      name: "Uroda",
      desc: "Kosmetyki najwyższej jakości",
      bgColor: "#32a852",
      icon: <FaLeaf />,
    },
    {
      name: "Profesjonalizm",
      desc: "Indywidualne podejście",
      bgColor: "#285e80",
      icon: <AiOutlineUsergroupAdd />,
    },
  ]);

  return (
    <KeyFeaturesWrapper>
      <h2 className="features-headline">Nasze wartości</h2>
      <div className="features-container">
        {features.map((item) => {
          return <KeyFeaturesItem key={`feature-${item.name}`} data={item} />;
        })}
      </div>
    </KeyFeaturesWrapper>
  );
};

export default KeyFeatures;
