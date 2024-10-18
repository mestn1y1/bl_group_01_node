import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const generateProducts = async (number) => {
  const initialProducts = await readProducts();
  const products = Array(number).fill(0).map(createFakeProduct);
  const result = initialProducts.concat(products);
  await writeProducts(result);
};

generateProducts(6);
