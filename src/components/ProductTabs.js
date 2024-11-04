import React, { useState } from "react";
import { dataPharmaCatAll, dataPharmaCatOdpornosc } from "../data/data";

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
  };

  let activeData;

  switch (activeTab) {
    case "all":
      activeData = dataPharmaCatAll.data;
      break;
    case "odpornosc":
      activeData = dataPharmaCatOdpornosc.data;
      break;
    default:
      activeData = [];
      break;
  }

  return (
    <div>
      <div>
        <button onClick={() => handleTabChange("all")}>All</button>
        <button onClick={() => handleTabChange("odpornosc")}>Odpornosc</button>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          marginTop: "16px",
        }}
      >
        {activeData.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: "10px",
              width: "200px",
              textAlign: "center",
            }}
          >
            <img
              src={item.imgSrc}
              alt={item.title}
              style={{ width: "100%", height: "auto" }}
            />
            <h4>{item.title}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductTabs;
