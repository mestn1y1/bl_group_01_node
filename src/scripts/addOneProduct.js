import { createFakeProduct } from '../utils/createFakeProduct.js';
import { readProducts } from '../utils/readProducts.js';
import { writeProducts } from '../utils/writeProducts.js';

export const addOneProduct = async () => {
  const initialProducts = await readProducts();
  const newProduct = createFakeProduct();
  initialProducts.push(newProduct);
  await writeProducts(initialProducts);
};
addOneProduct();
