import { writeProducts } from '../utils/writeProducts.js';

export const clearProducts = async () => {
  await writeProducts();
};
clearProducts();
