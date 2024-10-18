import { readProducts } from '../utils/readProducts.js';

export const getAllProducts = () => readProducts();
console.log(await getAllProducts());
