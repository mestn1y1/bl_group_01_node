import { readProducts } from '../utils/readProducts.js';

export const countProduct = async () => {
  const products = await readProducts();
  return products.length;
};
console.log(await countProduct());
