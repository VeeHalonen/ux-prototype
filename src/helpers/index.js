const randomNumber = (max) => {
  return Math.floor(Math.random() * max) + 1;
};

const randomNumberBetween = (min, max) => {
  return Math.floor(Math.random() * (max - min)) + min;
};

export const getRandomProduct = () => {
  const productName = "Fan #" + randomNumber(10000);
  const rating = randomNumber(5);
  const price = randomNumberBetween(10, 1000);
  return {
    productName,
    rating,
    price,
    shortInfo: "Some more information\nAbout the product",
  };
};

// Get n number of random products
export const getRandomProducts = (quantity) => {
  const randomProducts = [];
  for (let i = 0; i < quantity; i++) {
    randomProducts.push(getRandomProduct());
  }
  return randomProducts;
};
