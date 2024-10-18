import { writeFile } from 'node:fs/promises';
import { DB_PATH } from '../constans/product.js';

export const writeProducts = async (products) => {
  await writeFile(DB_PATH, JSON.stringify(products));
};
