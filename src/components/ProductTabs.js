import React, { useState } from "react";
import allData from "../data/data";

const TabsComponent = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (name) => {
    setActiveTab(name);
  };

  const activeData = allData.find((tab) => tab.name === activeTab);

  return (
    <div>
      <div
        className="tabs"
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {allData.map((tab) => (
          <button
            key={tab.name}
            onClick={() => handleTabClick(tab.name)}
            className={activeTab === tab.name ? "active" : ""}
          >
            <span>
              <img
                src={tab.iconSrc}
                alt={tab.headline}
                style={{ width: 20, height: 20, margin: 4 }}
              />
            </span>
            {tab.headline}
          </button>
        ))}
      </div>

      <div className="tab-content">
        <h2>{activeData.headline}</h2>
        <div
          className="items"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "20px",
            justifyItems: "center",
          }}
        >
          {activeData.data.map((item) => (
            <div
              key={item.id}
              className="item"
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
                style={{
                  // width: '90%', // Szerokość obrazów na 90%
                  // maxHeight: '200px', // Maksymalna wysokość 200px
                  height: "auto",
                  maxWidth: "90%",
                  maxHeight: "300px",
                }}
              />
              <h3>{item.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TabsComponent;
