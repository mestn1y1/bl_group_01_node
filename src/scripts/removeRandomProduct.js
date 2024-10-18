import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const removeRandomProduct = async () => {
  const products = await readProducts();
  if (products.length === 0) return;
  const randomIndex = Math.floor(Math.random() * products.length);
  products.splice(randomIndex, 1);
  await writeProducts(products);
};
removeRandomProduct();
