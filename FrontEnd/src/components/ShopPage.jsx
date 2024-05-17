import ShopItem from "./ShopItem";

import "../assets/css/ShopPage.css";

function ShopPage() {
  return (
    <>
      <ShopHeader />
      <ShopItem />
    </>
  );
}

export default ShopPage;

function ShopHeader() {
  return (
    <div className="ShopHeaderDiv">
      <nav className="ShopNav">
        <li className="ShopNavBtn">Shop Home</li>
        <li className="ShopNavBtn">Shop Merch</li>
        <li className="ShopNavBtn">Shop Models</li>
        <li className="ShopNavBtn">Shop Media</li>
        <li className="ShopNavBtn">Cart</li>
      </nav>
    </div>
  );
}
