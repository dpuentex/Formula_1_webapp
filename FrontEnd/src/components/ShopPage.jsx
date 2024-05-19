import ShopItem from "./ShopItem";

import "../assets/css/ShopPage.css";
import { useEffect, useState } from "react";

function ShopHeader({ handleSelectionChange }) {
  return (
    <div className="ShopHeaderDiv">
      <nav className="ShopNav">
        <li
          className="ShopNavBtn"
          onClick={() => handleSelectionChange("home")}
        >
          Shop Home
        </li>
        <li
          className="ShopNavBtn"
          onClick={() => handleSelectionChange("merch")}
        >
          Shop Merch
        </li>
        <li
          className="ShopNavBtn"
          onClick={() => handleSelectionChange("models")}
        >
          Shop Models
        </li>
        <li
          className="ShopNavBtn"
          onClick={() => handleSelectionChange("media")}
        >
          Shop Media
        </li>
        <li
          className="ShopNavBtn"
          onClick={() => handleSelectionChange("cart")}
        >
          Cart
        </li>
      </nav>
    </div>
  );
}

//Shop Home Component
function ShopHome({ addToCart }) {
  //F1 Store Items
  const f1StoreItems = [
    {
      id: 1,
      itemName: "Lando Norris Cap",
      makeBy: "NewEra",
      price: 35.0,
      itemImg:
        "https://images.footballfanatics.com/mclaren-f1-team/mclaren-2023-new-era-special-edition-9fifty-pre-curve-lando-norris-mexico-gp-cap_ss5_p-14418294+pv-1+u-vgtjuf9cfktvrcuy8pqo+v-ykurjck313nmwbhstmqq.jpg?_hv=2&w=900",
    },
    {
      id: 2,
      itemName: "Lando Norris orange Cap",
      makeBy: "NewEra",
      price: 45.0,
      itemImg:
        "https://www.neweracap.com/cdn/shop/files/60504219_9FIFTYORIGINALFIT_MCLARENF1TEAM_MCLAREN_MULTI_3QL_01181deb-fce8-470c-9e9f-0fff86fb2c88.jpg?v=1707749408&width=823",
    },
    {
      id: 3,
      itemName: "Lewis Hamilton Hat",
      makeBy: "NewEra",
      price: 35.0,
      itemImg:
        "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTlVjIN5PJvNKW2Pyiu5_NY7mZkpV51uSYRESNDaCnVcrJ21gTNydGHes89i8y1OhEg5ZHIP3HbEAcIeUOL7mqgsnk49f_AM9xX9RW45YZRQiuGVX2qfDWY&usqp=CAc",
    },
  ];

  return (
    <>
      {f1StoreItems.map((item) => (
        <ShopItem key={item.id} item={item} addToCart={addToCart} />
      ))}
    </>
  );
}

//Shop Merch
function ShopMerch({ addToCart }) {
  const merchItem = [
    {
      id: 1,
      itemName: "F1 Shirt",
      makeBy: "F1",
      price: 45.0,
      itemImg:
        "https://images.footballfanatics.com/formula-1-merchandise/formula-1-essentials-logo-graphic-t-shirt-black-mens_ss4_p-12033629+u-9l056yoosyby9d09e3lx+v-2c4a3a4f59e64251bd34befde2082ec5.jpg?_hv=2&w=900",
    },
    {
      id: 2,
      itemName: "F1 Hoodie",
      makeBy: "F1",
      price: 85.0,
      itemImg:
        "https://www.fuelforfans.com/dw/image/v2/BDWJ_PRD/on/demandware.static/-/Sites-master-catalog/default/dw6a674df9/images/large/324901004003_pp_01_formula-1.jpg?sw=1813&q=80",
    },
  ];
  return (
    <>
      {merchItem.map((item) => (
        <ShopItem key={item.id} item={item} addToCart={addToCart} />
      ))}
    </>
  );
}

function ShopModels() {
  return <h1>MODELS</h1>;
}

//Shop Media
function ShopMedia() {
  return <h1>MEDIA SHOP</h1>;
}

//Cart Page
function CartPage({ cartItems }) {
  return (
    <div className="CartPage">
      <h1>Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <div key={item.id} className="CartItem">
            <img
              className="cartItemPic"
              src={item.itemImg}
              alt={item.itemName}
            />
            <div>
              <h3>{item.itemName}</h3>
              <p>{item.makeBy}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

function ShopPage() {
  const [currentSection, setCurrentSection] = useState("home");
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(storedCartItems);
  }, []);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const handleSelectionChange = (section) => {
    setCurrentSection(section);
  };

  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  return (
    <>
      <ShopHeader handleSelectionChange={handleSelectionChange} />
      {currentSection === "home" && <ShopHome addToCart={addToCart} />}
      {currentSection === "merch" && <ShopMerch addToCart={addToCart} />}
      {currentSection === "models" && <ShopModels />}
      {currentSection === "media" && <ShopMedia />}
      {currentSection === "cart" && <CartPage cartItems={cartItems} />}
    </>
  );
}

export default ShopPage;
