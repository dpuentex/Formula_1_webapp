import "../assets/css/ShopItem.css";

function ShopItem({ item, addToCart }) {
  const { itemName, makeBy, itemImg, price } = item;
  return (
    <div className="ShopItemDiv">
      <img className="itemImg" src={itemImg} alt="" />
      <div className="itemInfo">
        <h3>{itemName}</h3>
        <p>{makeBy}</p>
        <p>${price.toFixed(2)}</p>
        <button onClick={() => addToCart(item)}>ADD TO CART</button>
      </div>
    </div>
  );
}

export default ShopItem;
