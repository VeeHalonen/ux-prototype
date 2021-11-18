import { createContext } from "react";

export const MAX_PRICE = 500;

export const CATEGORIES = ["Table", "Floor", "Wall-mounted", "Ceiling"];
export const MATERIALS = ["Plastic", "Aluminum", "Steel"];
export const COLORS = ["White", "Black", "Gray"];
export const FEATURES = [
  "Standalone",
  "Tripod",
  "Integrated",
  "Fanless",
  "Silent",
  "Tower Fan",
];
export const SIZES = ["Small", "Medium", "Large"];
export const POWER_CONSUMPTION = ["Low", "Medium", "High"];
export const SOUND_LEVEL = ["Low", "Medium", "High"];

const NAMES = [
  "CoolMaster",
  "Breeze Master",
  "Air Master",
  "Heating Beast",
  "The Ice",
  "Silent One",
  "Volcano",
  "Antarctic+",
  "Tristar",
  "Whisper Pro",
];

const randomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

const randomFromArray = (arr) => {
  return arr[Math.floor(Math.random() * arr.length)];
};

// Selects 0-LENGTH values from given array
const randomFromArrayMultiple = (arr) => {
  const values = [...arr];
  const randomValues = [];
  while (values.length > 0 && Math.floor(Math.random() * 3) !== 0) {
    const selectedVal = values.splice(
      Math.floor(Math.random() * values.length),
      1
    )[0];
    randomValues.push(selectedVal);
  }
  return randomValues;
};

export const getRandomProduct = () => {
  const productName = randomFromArray(NAMES) + " #" + randomNumber(10000);
  const price = randomNumberBetween(10, MAX_PRICE);
  return {
    productName,
    rating: randomNumber(5),
    price: price,
    discount: Math.random() >= 0.7 ? true : false,
    latest: Math.random() >= 0.7 ? true : false,
    category: randomFromArray(CATEGORIES),
    shortInfo: "Some more information\nAbout the product",
    features: randomFromArrayMultiple(FEATURES),
    color: randomFromArray(COLORS),
    material: randomFromArray(MATERIALS),
    COP: randomNumberBetween(1, 6),
    size: randomFromArray(SIZES),
    speedSettings: randomNumber(5),
    powerConsumption: randomFromArray(POWER_CONSUMPTION),
    soundLevel: randomFromArray(SOUND_LEVEL),
  };
};

export const getExampleProducts = () => {
  const exampleProducts = [];
  // Under €30
  const ex1 = getRandomProduct();
  ex1.price = 25;
  ex1.discount = false;
  exampleProducts.push(ex1);
  // Black & Decker, White 16'' Stand Fan
  const ex2 = getRandomProduct();
  ex2.productName = "Black & Decker BFSR16W";
  ex2.category = "Floor";
  ex2.color = "White";
  ex2.shortInfo = "White 16'' Stand Fan";
  exampleProducts.push(ex2);
  // Between 200-350
  const ex3 = getRandomProduct();
  ex3.price = 275;
  ex3.discount = false;
  exampleProducts.push(ex3);

  return exampleProducts;
};

// Get n number of random products
export const getRandomProducts = (quantity) => {
  const randomProducts = [];
  for (let i = 0; i < quantity; i++) {
    randomProducts.push(getRandomProduct());
  }
  return randomProducts;
};

// Returns product price after potential discount
export const getProductPrice = (product) => {
  if (product.discount) {
    return Math.floor(product.price / 2);
  } else return product.price;
};

// Get total price of products in array
export const getTotalPrice = (products) => {
  let totalPrice = 0;
  products.forEach((p) => {
    totalPrice += getProductPrice(p);
  });
  return totalPrice;
};

/* GLOBAL CONTEXT */

const exampleProducts = getRandomProducts(57).concat(getExampleProducts());

export const initialState = {
  shoppingCart: [],
  shoppingCartItems: 0,
  products: exampleProducts,
};

// const context = useContext(GlobalStateContext);
// context.globalState.products
// context.globalState.shoppingCartItems
// context.dispatch({ type: "addToCart", product });
export const globalStateReducer = (state, { type, product }) => {
  switch (type) {
    case "addToCart":
      return {
        ...state,
        shoppingCartItems: state.shoppingCartItems + 1,
        shoppingCart: [...state.shoppingCart, product],
      };
    case "removeFromCart":
      const afterRemoveCart = state.shoppingCart.filter(
        (p) => p.productName !== product.productName
      );
      return {
        ...state,
        shoppingCartItems: afterRemoveCart.length,
        shoppingCart: afterRemoveCart,
      };
    case "emptyCart":
      return { ...state, shoppingCartItems: 0, shoppingCart: [] };
    default:
      return state;
  }
};

export const GlobalStateContext = createContext();
