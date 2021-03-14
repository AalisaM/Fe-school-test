import { React, useEffect, useState } from "react";

import "./item-details.css";

function ItemDetailComponent({ match }) {
  useEffect(() => {
    fetchItem();
  }, []);

  const [item, setItem] = useState({});

  const fetchItem = async () => {
    const fetchItemObj = await fetch(
      `https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}`
    );
    const item = await fetchItemObj.json();

    console.log(item.data.item);

    setItem(item.data.item);
  };

  let img = "";
  console.log(item);
  if (item.images && item.images.icon) {
    img = item.images.icon;
  }
  return (
    <div className="item-detail">
      <h1>{item.name}</h1>
      <div className="item-card">
        <div className="item-img">
          <img src={img} alt="" />
          <div>{item.description}</div>
        </div>
        <div className="item-details">
          <h3>Specification:</h3>
          <ul>
            <li>
              <span>Type</span>: {item.type}
            </li>
            <li>
              <span>Rarity</span>: {item.rarity}
            </li>
            <li>
              <span>Cost</span>: {item.cost}$
            </li>
            <li>
              <span>Upcoming</span>: {item.upcoming ? "yes" : "no"}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ItemDetailComponent;
