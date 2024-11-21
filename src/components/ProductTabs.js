import React, { useState } from "react";
import allData from "../data/data";
import styled from "styled-components";

const ProductTabsWrapper = styled.div`
  background-color: #f0f0f0;
  padding: 30px 2px;
  border-radius: 24px;

  .content-wrap {
    display: flex;
    width: 100%;
  }

  .tabs {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    /* flex-wrap: wrap; */
    /* gap: 10px; */
    /* margin-bottom: 20px; */

    width: 20%;
    padding: 20px;
    text-align: center;
  }

  .tab-content {
    width: 80%;
    /* background-color: #d0e6ff; */
    padding: 20px;
    text-align: center;

    .tab-content__items {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      /* display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
      justify-items: center; */
    }
  }

  .toggle-button {
    display: none;
    border: 1px solid #363636;
    border-radius: 24px;
    /* margin-bottom: 10px; */
    padding: 10px 20px;
    font-size: 16px;
    cursor: pointer;

    max-width: 170px;
    margin: 20px auto;

  }

  @media (max-width: 768px) {
    .content-wrap {
      display: block;
    }

    .tabs {
      width: 100%;
      display: none;
    }

    .tab-content {
      width: 100%;
    }

    .toggle-button {
      display: block; 
    }

    .tabs.open {
      display: block;
    }
  }

  .item {
    border: 1px solid #ccc;
    padding: 10px;
    width: 220px;
    text-align: center;
    margin: 10px;
    box-shadow: 2px 4px 4px 0px rgba(172, 172, 172, 1);
    background-color: #fff;
    border-radius: 12px;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    img {
      height: auto;
      max-width: 80%;
      max-height: 300px;
    }

    h3 {
      font-size: 18px;
    }
  }

  .button-category {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    border: none;

    cursor: pointer;

    img {
      width: 20px;
      height: 20px;
      margin: 0px 4px;
    }

    p {
      margin: 0;
      text-align: left;

      &:hover {
        color: #3861fb;
        text-decoration: underline;
      }
    }
  }

  .button-category.active {
    font-weight: bold;
    color: #007bff;
  }
`;

const ProductTabs = () => {
  const [activeTab, setActiveTab] = useState("all");

  const handleTabClick = (name) => {
    setActiveTab(name);
  };

  const activeData = allData.find((tab) => tab.name === activeTab);
  ////////////////
  const [isOpen, setIsOpen] = useState(false);

  const toggleSection = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ProductTabsWrapper>
      <button onClick={toggleSection} className="toggle-button">
        {isOpen ? "Zwiń kategorie" : "Rozwiń kategorie"}
      </button>
      <div>
        <h2>{activeData.headline}</h2>
      </div>
      <div className="content-wrap">
        <div className={`tabs section-left ${isOpen ? "open" : ""}`}>
          {allData.map((tab) => (
            <button
              key={tab.name}
              onClick={() => handleTabClick(tab.name)}
              className={`${
                activeTab === tab.name ? "active" : ""
              } button-category`}
            >
              <span>
                <img src={tab.iconSrc} alt={tab.headline} />
              </span>
              <p>{tab.headline}</p>
            </button>
          ))}
        </div>

        <div className="tab-content">
          <div className="tab-content__items">
            {activeData.data.map((item) => (
              <div key={item.id} className="item">
                <img src={item.imgSrc} alt={item.title} />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ProductTabsWrapper>
  );
};

export default ProductTabs;
