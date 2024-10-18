import { readFile } from 'node:fs/promises';
import { DB_PATH } from '../constans/product.js';

export const readProducts = async () => {
  const products = await readFile(DB_PATH, 'utf-8');
  return JSON.parse(products);
};
