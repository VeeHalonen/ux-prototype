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
  "The Ice",
  "Silent One",
  "Antarctic+",
  "Tristar",
  "Whisper Pro",
];

// Returns a random number between 1 and max (inclusive)
const randomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

// Returns a random integer between min and max (inclusive)
const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

// Returns a random number of reviews with a random rating (randomly weighted)
const randomReviews = () => {
  const reviews = [];
  const reviewCount = randomNumberBetween(0, 30);
  // Overall product quality (used for random review limits)
  const quality = randomNumber(4);
  let min = 1;
  let max = 5;
  switch (quality) {
    // Poor
    case 1:
      min = 1;
      max = 3;
      break;
    // Average
    case 2:
      min = 2;
      max = 4;
      break;
    // Good
    case 3:
      min = 3;
      max = 5;
      break;
    // Conflicting
    default:
      min = 1;
      max = 5;
  }
  while (reviews.length < reviewCount) {
    const randomReview = {
      reviewer: "User #" + randomNumber(10000),
      rating: randomNumberBetween(min, max),
    };
    reviews.push(randomReview);
  }
  return reviews;
};

// Calculates product rating based on reviews
const calculateRating = (reviews) => {
  let count = reviews.length;
  if (count === 0) return 0;
  let total = 0;
  reviews.forEach((r) => {
    total += r.rating;
  });
  return total / count;
};

export const getRandomProduct = () => {
  const productName = randomFromArray(NAMES) + " #" + randomNumber(10000);
  const price = randomNumberBetween(10, MAX_PRICE);
  const reviews = randomReviews();
  const rating = calculateRating(reviews);
  return {
    productName,
    rating,
    price,
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
    reviews,
    inCart: 0,
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
    totalPrice += getProductPrice(p) * p.inCart;
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

const calculateItemCount = (items) => {
  let count = 0;
  items.forEach((i) => {
    count += parseInt(i.inCart);
  });
  return count;
};

// Returns last selected product from given list of products
export const getLastProduct = (products) => {
  const productName = localStorage.getItem("product");
  if (!productName || !products) return null;

  return products.find((p) => p.productName === productName);
};

// const context = useContext(GlobalStateContext);
// context.globalState.products
// context.globalState.shoppingCartItems
// context.dispatch({ type: "addToCart", product });
export const globalStateReducer = (state, { type, product, count }) => {
  switch (type) {
    case "addToCart":
      product.inCart++;
      // Duplicate of an item already in cart?
      const found = state.shoppingCart.find(
        (p) => p.productName === product.productName
      );
      if (found) {
        return {
          ...state,
          shoppingCartItems: state.shoppingCartItems + 1,
          shoppingCart: [...state.shoppingCart],
        };
      }
      // Not yet in cart? Add new item
      else {
        return {
          ...state,
          shoppingCartItems: state.shoppingCartItems + 1,
          shoppingCart: [...state.shoppingCart, product],
        };
      }
    // Adds multiple items to cart
    case "addMultipleToCart":
      product.inCart += count;
      // Duplicate of an item already in cart?
      const found2 = state.shoppingCart.find(
        (p) => p.productName === product.productName
      );
      if (found2) {
        return {
          ...state,
          shoppingCartItems: state.shoppingCartItems + count,
          shoppingCart: [...state.shoppingCart],
        };
      }
      // Not yet in cart? Add new item
      else {
        return {
          ...state,
          shoppingCartItems: state.shoppingCartItems + count,
          shoppingCart: [...state.shoppingCart, product],
        };
      }
    case "removeFromCart":
      const afterRemoveCart = state.shoppingCart.filter(
        (p) => p.productName !== product.productName
      );
      const countRemoved = product.inCart;
      product.inCart = 0;
      return {
        ...state,
        shoppingCartItems: state.shoppingCartItems - countRemoved,
        shoppingCart: afterRemoveCart,
      };
    case "changeCount":
      return {
        ...state,
        shoppingCartItems: calculateItemCount(state.shoppingCart),
      };
    case "emptyCart":
      state.shoppingCart.forEach((p) => (p.inCart = 0));
      return { ...state, shoppingCartItems: 0, shoppingCart: [] };
    default:
      return state;
  }
};

export const GlobalStateContext = createContext();
