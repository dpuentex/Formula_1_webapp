import { useState, useEffect } from "react";
import "../assets/css/ShopItem.css";

function ShopItem({ id, name, price, addtoCart }) {
  return (
    <div className="ShopItemDiv">
      <img
        className="itemImg"
        src="https://www.neweracap.com/cdn/shop/files/60504219_9FIFTYORIGINALFIT_MCLARENF1TEAM_MCLAREN_MULTI_3QL_01181deb-fce8-470c-9e9f-0fff86fb2c88.jpg?v=1707749408&width=823"
        alt="Lando Hat"
      />
      <div className="itemInfo">
        <h3>Mclaren Hat</h3>
        <p>by NewEra</p>
        <br />
        <button className="addToCartbtn">ADD TO CART</button>
      </div>
    </div>
  );
}

export default ShopItem;
