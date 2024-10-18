import { createFakeProduct } from '../utils/createFakeProduct.js';

export const generateProduct = (number) => {
  const products = Array(number).fill(0).map(createFakeProduct);
};
